import Link from 'next/link';
import MainLayout from './components/Main';

function NotFound() {
  return (
    <MainLayout>
      <div className="container flex flex-col py-24 space-y-5 justify-center items-center text-cod-gray-950">
        <h2 className="text-center text-9xl font-semibold">404</h2>
        <h3 className="text-center">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </h3>
        <Link
          href="/"
          className="rounded-md bg-denim-600 hover:bg-denim-700 text-white-50 py-[0.75rem] text-center font-semibold px-[3.8rem] max-w-md"
        >
          Kembali Ke Beranda
        </Link>
      </div>
    </MainLayout>
  );
}

export default NotFound;
