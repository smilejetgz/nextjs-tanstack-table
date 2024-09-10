import { type ArticleItem } from '@/features/articles/types';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<ArticleItem>[] = [
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
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
];
