//as páginas layouts são exclusivamente para UI, no caso dessa pasta ele tem um ui que é compartilhado com os que estão dentro dessa pasta e em pastas que estão dentro dessa também, em resumo um layout compartilhado

import SideNav from '@/app/ui/dashboard/sidenav';
// export const experimental_ppr = true; para caso de ppr
//  esse children serve para atribuir as outras pastas
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}