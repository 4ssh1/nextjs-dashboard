import Image from 'next/image';
import { fetchFilteredCustomers } from '../lib/data';

export default async function CustomersPage({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      {/* Search Bar */}
      <form className="mb-6">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search customers..."
          className="w-full rounded-md border px-4 py-2"
        />
      </form>

      {/* Customers Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50 text-sm font-medium">
              <th className="p-3">Customer</th>
              <th className="p-3">Email</th>
              <th className="p-3">Total Invoices</th>
              <th className="p-3">Pending</th>
              <th className="p-3">Paid</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <Image
                    src={customer.image_url || '/default-avatar.png'}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {customer.name}
                </td>
                <td className="p-3">{customer.email}</td>
                <td className="p-3">{customer.total_invoices}</td>
                <td className="p-3 text-yellow-600">{customer.total_pending}</td>
                <td className="p-3 text-green-600">{customer.total_paid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
