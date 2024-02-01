import FeatherIcon from "feather-icons-react";
import Section from "../Section"
import Link from "next/link";

const HeroFooter : React.FC = () => {
    return <Section id="hero_footer" colorfull>
    <div className="container">
      <div className="flex flex-col items-center text-center bg-gradient-to-r from-denim-800 to-denim-600 py-20 rounded-md">
          <h3 className="text-[1.4rem] md:text-[2rem] font-semibold max-w-md text-white-50">Sekarang giliran kamu</h3>
          <p className="text-white-100 font-light text-[0.8rem] md:text-[1.3rem] max-w-xs md:max-w-md">Untuk merasakan pengalaman wisata alam yang tak terlupakan di Muara Mbaduk</p>
          <Link href="#paket" className="flex justify-center items-center space-x-2 bg-denim-600 hover:bg-denim-700 text-white-50 py-3 px-5 rounded-md mt-5 md:mt-10">
              <span className="text-[0.8rem] md:text-[1rem] font-semibold">CAMPING SEKARANG</span>
              <FeatherIcon icon="chevron-right" size={23} className="text-white-50 font-bold" />
          </Link>
      </div>
  </div>
  </Section>
}

export default HeroFooter;