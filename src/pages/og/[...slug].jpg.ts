import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { generateOgImage } from '../../utils/og-image';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('posts');
  return posts
    .filter((post) => !post.data.draft)
    .map((post) => ({
      params: { slug: post.slug },
      props: {
        title: post.data.title,
        heroImage: post.data.heroImage,
      },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, heroImage } = props as { title: string; heroImage?: string };

  const imageBuffer = await generateOgImage(title, heroImage);

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
