import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 //arquivo de erros esperados, o de erros não esperados é o error.tsx

export default function notFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">Não encontrado</h2>
      <p>Não foi possível encontrar a fatura.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Voltar
      </Link>
    </main>
  );
}