import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

interface HeroProps {
  data?: {
    title?: string;
    heading?: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="container text-white-50 py-32 md:py-40 space-y-4">
      {data?.title == undefined ? (
        <>
          <h2 className="text-[1.1rem] md:text-[1.5rem]">
            Selamat Datang Di Muara Mbaduk
          </h2>
          <h1 className="text-[2rem]/tight md:text-[3rem]/tight font-bold max-w-2xl">
            Nikmati Liburan yang Berbeda dengan Berkemah
          </h1>
          <p className="text-[1rem] md:text-[1.1rem] max-w-lg font-light mb-5">
            Muara Mbaduk adalah kawasan wisata alam yang menyajikan pantai,
            perbukitan hingga tempat berkemah
          </p>
          <Link
            href="#paket"
            className="flex justify-center items-center space-x-2 bg-denim-600 hover:bg-denim-700 focus:bg-denim-700 text-white-50 py-3 max-w-[14.5rem] rounded-sm"
          >
            <span className="text-[0.9rem] md:text-[1rem] font-semibold">
              CAMPING SEKARANG
            </span>
            <FeatherIcon
              icon="chevron-right"
              size={23}
              className="text-white-50 font-bold"
            />
          </Link>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-[2rem]/tight md:text-[3rem]/tight font-bold text-center">
            {data?.title}
          </h1>
          {data?.heading != undefined || data?.heading != null ? (
            <p className="text-ms md:text-xl font-base mt-3">{data.heading}</p>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
