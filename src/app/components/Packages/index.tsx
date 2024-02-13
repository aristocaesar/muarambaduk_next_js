import { Package } from '@/app/types/packages';
import Section from '../Section';
import PackageItem from './item';
import MUARAMBADUK_API from '@/app/config/Muarambaduk_API';
import Empty from '../Empty';
import CustomInformation from './customInformation';

interface PackagesProps {
  withHeading?: boolean;
  withCustomInformation?: boolean;
}

const Packages: React.FC<PackagesProps> = async ({
  withHeading,
  withCustomInformation,
}) => {
  const PackagesData: Package[] = await MUARAMBADUK_API.Get('packages').catch(
    () => []
  );
  return (
    <Section id="paket" colorfull>
      <div className="container">
        {withHeading ? (
          <div className="flex flex-col items-center mb-14">
            <h3 className="sm:text-center text-cod-gray-950 text-[1.6rem] md:text-[2rem] font-semibold max-w-md">
              Kami menyediakan <span className="text-denim-600">paket</span>{' '}
              untuk berkemah
            </h3>
            <p className="text-cod-gray-300 max-w-lg sm:text-center mt-3">
              Kamu tidak perlu bingung untuk memulai berkemah kami menyediakan
              berbagai kebutuhanya
            </p>
          </div>
        ) : (
          <></>
        )}
        {PackagesData.length == 0 ? (
          <Empty withSpace={false} message="Belum Ada Paket Yang Tersedia" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 xl:gap-x-20 gap-y-10 md:gap-y-10">
            {PackagesData.map((item, index) => {
              return <PackageItem key={index} data={item} />;
            }).reverse()}
          </div>
        )}
        {withCustomInformation != undefined && <CustomInformation />}
      </div>
    </Section>
  );
};

export default Packages;
