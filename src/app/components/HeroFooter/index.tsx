import FeatherIcon from 'feather-icons-react';
import Section from '../Section';
import Link from 'next/link';

const HeroFooter: React.FC = () => {
  return (
    <Section id="hero_footer">
      <div className="container">
        <div className="flex justify-center items-center bg-gradient-to-r from-denim-800 to-denim-600 rounded-md">
          <div className="w-full px-10 py-10 md:py-0">
            <h3 className="text-xl font-semibold max-w-md text-white-50 mb-2">
              Sekarang giliran kamu
            </h3>
            <p className="text-white-100 font-light text-md md:text-lg md:max-w-md mb-5 md:mb-0">
              Rasakan pengalaman wisata alam yang tak terlupakan
            </p>
            <Link
              href="/#paket"
              className="md:hidden max-w-[15rem] flex justify-center items-center bg-white-50 hover:bg-white-100 text-denim-800 py-3 px-5 rounded-md"
            >
              <span className="text-sm font-semibold">Camping Sekarang</span>
              <FeatherIcon
                icon="chevron-right"
                size={23}
                className="text-denim-800 font-bold"
              />
            </Link>
          </div>
          <div className="hidden md:flex bg-[url('/pantai-muara-mbaduk.jpg')] bg-center justify-end w-full px-10 py-28 rounded-r-md">
            <Link
              href="/#paket"
              className="max-w-[15rem] flex justify-center items-center bg-white-50 hover:bg-white-100 text-denim-800 py-3 px-5 rounded-full"
            >
              <span className="text-sm font-semibold">Camping Sekarang</span>
              <FeatherIcon
                icon="chevron-right"
                size={23}
                className="text-denim-800 font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroFooter;
