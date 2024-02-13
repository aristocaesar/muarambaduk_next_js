import FeatherIcon from 'feather-icons-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mine-shaft-900 pt-16 lg:pt-16 pb-14 flex flex-col items-center">
      <div className="container grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        <div className="flex flex-col">
          <div className="relative h-[120px] md:h-[150px] w-[200px]">
            <Image
              src="/logo-muara-mbaduk-2.png"
              alt="logo-muarambaduk"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="space-y-5 text-cod-gray-300 max-w-xs mt-5">
            <p>
              MuaraMbaduk adalah wisata alam yang menyajikan pantai, perbukitan
              hingga tempat berkemah
            </p>
            <p>
              Telepon / Whatapps : <br /> 0853 3334 2050
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/MuaraMbaduk/"
                target="_blank"
              >
                <FeatherIcon icon="facebook" size={24} strokeWidth={1} />
              </Link>
              <Link
                href="https://www.instagram.com/muarambaduk/"
                target="_blank"
              >
                <FeatherIcon icon="instagram" size={24} strokeWidth={1} />
              </Link>
              <Link href="mailto:info@muarambaduk.com">
                <FeatherIcon icon="mail" size={24} strokeWidth={1} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h6 className="text-white-50 font-semibold text-[1rem]">Informasi</h6>
          <ul className="text-cod-gray-300 space-y-2 list-none ml-0">
            <li>
              <Link href="/berita">Berita</Link>
            </li>
            <li>
              <Link href="/paket-camping">Daftar Paket</Link>
            </li>
            <li>
              <Link href="/tiket">Harga Tiket</Link>
            </li>
            <li>
              <Link href="/tentang">Tentang</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-5">
          <h6 className="text-white-50 font-semibold text-[1rem]">Bantuan</h6>
          <ul className="text-cod-gray-300 space-y-2 list-none ml-0">
            <li>
              <Link href="/kontak">Kontak</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/syarat-ketentuan">Syarat Dan Ketentuan</Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="container border-t border-cod-gray-700 max-w-[70rem] my-14" />
      <div className="container flex flex-col lg:flex-row justify-start md:justify-between text-cod-gray-300">
        <p>Copyright &copy; muarambaduk.com</p>
        <p>PT. Sarongan Tourism IDN</p>
      </div>
    </footer>
  );
};

export default Footer;
