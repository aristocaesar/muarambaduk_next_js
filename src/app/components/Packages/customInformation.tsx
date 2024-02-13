import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

const CustomInformation: React.FC = () => {
  return (
    <div className="rounded-md flex flex-col lg:flex-row justify-between border-[1px] border-cod-gray-200 text-cod-gray-950 p-10 space-y-4 lg:space-y-0 mt-24">
      <div>
        <h6 className="font-semibold mb-1">
          Belum menemukan paket yang sesuai dengan kebutuhanmu ?
        </h6>
        <p className="text-cod-gray-800">
          Tenang, kamu bisa membuat pesanan paket spesial sendiri
        </p>
      </div>
      <Link
        href={process.env.NEXT_PUBLIC_RESERVATION_LINK?.toString() || '/'}
        target="_blank"
        className="flex items-center space-x-3 justify-center rounded-md bg-denim-600 hover:bg-denim-700 focus:bg-denim-700 text-white-50 py-[0.75rem] px-[3rem]"
      >
        <span className="text-[0.9rem] md:text-[1rem] font-semibold">
          Buat Paket
        </span>
        <FeatherIcon
          icon="chevron-right"
          size={23}
          className="text-white-50 font-bold"
        />
      </Link>
    </div>
  );
};

export default CustomInformation;
