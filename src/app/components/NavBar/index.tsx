'use client';

import Link from 'next/link';
import Hero from '../Hero';
import NavItem from './NavItem';
import Image from 'next/image';
import Feather from 'feather-icons-react';
import { useState } from 'react';
import classNames from 'classnames';

interface NavBar {
  data?: {
    title?: string;
    heading?: string;
  };
}

const NavBar: React.FC<NavBar> = ({ data }) => {
  const [navToogle, setNavToogle] = useState<boolean>(false);

  return (
    <header className="flex flex-col items-center bg-no-repeat bg-center bg-cover bg-[url('/muarambaduk-camping-ground.webp')]">
      <nav className="container flex justify-between py-6 items-center">
        <Link href="/" className="w-[100px] h-[50px] relative">
          <Image
            src="/logo-muara-mbaduk.png"
            alt="logo-muara-mbaduk"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Link>
        <div onClick={() => setNavToogle(!navToogle)}>
          <Feather
            icon="menu"
            size={35}
            className="block lg:hidden cursor-pointer text-white-50"
          />
        </div>
        <ul className="lg:flex items-center text-white-50 text-sm hidden list-none">
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/">
            Beranda
          </NavItem>
          <NavItem
            onClick={() => setNavToogle(!navToogle)}
            href="/paket-camping"
          >
            Paket Camping
          </NavItem>
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/tiket">
            Harga Tiket
          </NavItem>
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/tentang">
            Tentang
          </NavItem>
          <li>
            <Link
              href="https://reservasi.muarambaduk.com"
              target="_blank"
              className="text-white-50 bg-denim-600  hover:bg-denim-700 px-5 py-3 rounded-sm font-semibold"
            >
              Pesan Sekarang
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={classNames(
          'fixed bg-white-50 z-10 top-0 h-full w-full block md:hidden transition-all',
          {
            '-right-full': !navToogle,
          }
        )}
      >
        <div onClick={() => setNavToogle(!navToogle)}>
          <Feather
            icon="x"
            size={35}
            className="absolute top-7 right-7 cursor-pointer text-cod-gray-950"
          />
        </div>
        <ul className="text-cod-gray-950 px-3 mt-8 space-y-8 list-none text-sm sm:text-lg">
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/">
            Beranda
          </NavItem>
          <NavItem
            onClick={() => setNavToogle(!navToogle)}
            href="/paket-camping"
          >
            Paket Camping
          </NavItem>
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/tiket">
            Harga Tiket
          </NavItem>
          <NavItem onClick={() => setNavToogle(!navToogle)} href="/tentang">
            Tentang
          </NavItem>
          <li>
            <Link
              href={process.env.NEXT_PUBLIC_RESERVATION_LINK?.toString() || '/'}
              target="_blank"
              className="text-white-50 bg-denim-600  hover:bg-denim-700 px-5 py-3 rounded-sm font-semibold"
            >
              Pesan Sekarang
            </Link>
          </li>
        </ul>
      </div>
      <Hero data={data} />
    </header>
  );
};

export default NavBar;
