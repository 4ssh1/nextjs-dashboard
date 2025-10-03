import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers - Acme Dashboard',
  description: 'Manage your customers in the Acme Dashboard.',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <Suspense key={query} fallback={<CardsSkeleton />}>
        <Table customers={customers} />
      </Suspense> 
    </div>
  );
}
