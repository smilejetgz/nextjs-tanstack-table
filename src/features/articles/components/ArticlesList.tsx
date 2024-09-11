'use client';

import { DataTable } from '@/features/ui/components/DataTable';
import { useGetArticles } from '../hooks/api';
import { useColumns } from './Columns';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/features/shadcn/components/ui/card';

const ArticlesList = () => {
  const page = 1;
  const perPage = 10;
  const { data, isLoading, error } = useGetArticles(page, perPage);
  const columns = useColumns();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles</div>;

  const tableData = data?.data || [];

  columns.map(({ header }) => console.log(header));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={tableData} />
      </CardContent>
    </Card>
  );
};

export default ArticlesList;
