import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
//   essa página é um Server Component que a busca customerse a passa para o <Form>componente
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Faturas', href: '/dashboard/invoices' },
          {
            label: 'Criar Fatura',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}