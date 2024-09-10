'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type ReactNode } from 'react';

const queryClient = new QueryClient();

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
};

export default ClientProviders;
