import { useMemo } from 'react';
import { type ColumnDef } from '@tanstack/react-table';
import { type ArticleItem } from '@/features/articles/types';
import { truncate } from 'lodash';

export const useColumns = () => {
  return useMemo<ColumnDef<ArticleItem['data'][number]>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'slug',
        header: 'Slug',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'detail',
        header: 'Detail',
        cell: (info) => {
          const value = info.getValue();
          if (value === undefined || value === null) return '';
          if (typeof value === 'string') return truncate(value, { length: 30 });
          return value;
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'userId',
        header: 'User ID',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    [],
  );
};
