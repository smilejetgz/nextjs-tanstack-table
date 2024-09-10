'use client';

import { useGetArticles } from '@/features/articles/hooks/api';

const ArticlesList = () => {
  const page = 1;
  const perPage = 10;
  const { data, isLoading, error } = useGetArticles(page, perPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles</div>;

  console.log(data);

  return <div>list</div>;
};

export default ArticlesList;
