
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import { fetchLatestInvoices } from '@/app/lib/data'
import CardWrapper from '@/app/ui/dashboard/cards';
//  esse componente ele é assincrono e por isso ele pode usar o await
export default async function Page() {
  // busca de dados

  const latestInvoices = await fetchLatestInvoices();
  // trazendo informações do fetchCardData


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* efeito escalonado para os cards */}
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>

      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* esse componente ele está carregando lentamente e para não deixar toda a página lenta para abrir estou deixando esse componente para ser carregado por ultimo */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}