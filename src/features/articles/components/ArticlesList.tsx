'use client';

import { useState } from 'react';
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
  const [pagination, setPagination] = useState({ page: 1, per_page: 10 });
  const { data, isLoading, error } = useGetArticles(
    pagination.page,
    pagination.per_page,
  );
  const columns = useColumns();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching articles</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Article List</CardTitle>
        <CardDescription>Manage articles with pagination</CardDescription>
      </CardHeader>
      <CardContent>
        {!data ? (
          <div>Articles not found</div>
        ) : (
          <DataTable
            columns={columns}
            data={data.data}
            pagination={data.pagination}
            setPagination={setPagination} // Pass setPagination to DataTable
          />
        )}
      </CardContent>
    </Card>
  );
};

export default ArticlesList;
