import { findAll } from '@/features/articles/api';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const per_page = parseInt(url.searchParams.get('per_page') || '10', 10);

  const articles = await findAll(page, per_page);
  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
