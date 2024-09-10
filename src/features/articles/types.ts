import { type findAll } from '@/features/articles/api';

export type ArticleItem = Awaited<ReturnType<typeof findAll>>;
