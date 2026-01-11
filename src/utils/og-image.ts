import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

function createTextOverlay(title: string): Buffer {
  // Escape HTML entities
  const escapedTitle = title
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Calculate font size based on title length
  let fontSize = 64;
  if (title.length > 50) fontSize = 48;
  if (title.length > 80) fontSize = 40;

  const svg = `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
          <stop offset="50%" style="stop-color:rgba(0,0,0,0.3);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgba(0,0,0,0.8);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)"/>
      <text
        x="60"
        y="${OG_HEIGHT - 80}"
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="${fontSize}"
        font-weight="bold"
        fill="white"
        text-anchor="start"
      >
        ${wrapText(escapedTitle, fontSize)}
      </text>
    </svg>
  `;

  return Buffer.from(svg);
}

function wrapText(text: string, fontSize: number): string {
  const maxCharsPerLine = Math.floor((OG_WIDTH - 120) / (fontSize * 0.55));
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  // Limit to 3 lines max
  const displayLines = lines.slice(0, 3);
  if (lines.length > 3) {
    displayLines[2] = displayLines[2].slice(0, -3) + '...';
  }

  // Create tspan elements for each line, positioned from bottom up
  const lineHeight = fontSize * 1.2;
  const startY = 0 - (displayLines.length - 1) * lineHeight;

  return displayLines
    .map((line, i) => `<tspan x="60" dy="${i === 0 ? startY : lineHeight}">${line}</tspan>`)
    .join('');
}

function createFallbackBackground(): Buffer {
  const svg = `
    <svg width="${OG_WIDTH}" height="${OG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#071b3a"/>
          <stop offset="100%" style="stop-color:#0b3b7a"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
    </svg>
  `;

  return Buffer.from(svg);
}

export async function generateOgImage(
  title: string,
  heroImagePath?: string
): Promise<Buffer> {
  let baseImage: sharp.Sharp;

  if (heroImagePath) {
    // Load hero image from public folder
    const imagePath = join(process.cwd(), 'public', heroImagePath);
    try {
      const imageBuffer = await readFile(imagePath);
      baseImage = sharp(imageBuffer)
        .resize(OG_WIDTH, OG_HEIGHT, {
          fit: 'cover',
          position: 'center',
        });
    } catch {
      // Fallback to gradient if image can't be loaded
      baseImage = sharp(createFallbackBackground());
    }
  } else {
    // Use gradient background for posts without hero image
    baseImage = sharp(createFallbackBackground());
  }

  // Composite the text overlay
  const textOverlay = createTextOverlay(title);

  const result = await baseImage
    .composite([
      {
        input: textOverlay,
        top: 0,
        left: 0,
      },
    ])
    .jpeg({
      quality: 80,
    })
    .toBuffer();

  return result;
}
