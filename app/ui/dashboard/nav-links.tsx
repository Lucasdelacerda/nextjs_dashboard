'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// o usePathname ele serve para pegar o link que o usuário está atualmente, para podermos ultilizar para indicar a página onde ele está por exemplo colocando o link onde ele clicou em azul
import { usePathname } from 'next/navigation';
// nesse caso o clsx será ultilizado junto com o usePathname para deixar o link que foi clicado em azul
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  //{ name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (

    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // o link ele fica no lugar da tag a, a vantagem é que ele não atualiza a página toda quando clica em outro link
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
