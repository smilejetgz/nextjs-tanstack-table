import { type ArticleItem } from '@/features/articles/types';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

const fetchArticles = async (page: number, per_page: number) => {
  const res = await fetch(`/api/articles?page=${page}&per_page=${per_page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  const articles = await (res.json() as Promise<ArticleItem>);
  return articles;
};

export const useGetArticles = (page = 1, per_page = 10) => {
  const queryOptions: UseQueryOptions<ArticleItem, Error> = {
    queryKey: ['articles', page, per_page],
    queryFn: () => fetchArticles(page, per_page),
    placeholderData: (prevData) => prevData,
  };

  return useQuery(queryOptions);
};
