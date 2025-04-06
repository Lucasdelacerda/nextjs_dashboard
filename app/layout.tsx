import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
// ele vai fazer com que o titulo da pagina seja o mesmo do metadata para que apareça o titulo da pagina no navegador deforma automatica
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// aqui ele vai definir um padrão para o titulo da página, basta adicionar em cada página o export const metadata: Metadata = {
//   title: 'Invoices',
// };, pode usar esse ou o de cima


// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
