import { Package } from '@/app/types/packages';
import PackageItem from './item';
import MUARAMBADUK_API from '@/app/config/Muarambaduk_API';
import Empty from '../Empty';
import Article from '../Article';
import CustomInformation from './customInformation';

const PackagesItemsOnly: React.FC = async () => {
  const PackagesData: Package[] = await MUARAMBADUK_API.Get('packages').catch(
    () => []
  );
  return (
    <Article>
      {PackagesData.length == 0 ? (
        <Empty withSpace={false} message="Belum Ada Paket Yang Tersedia" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 xl:gap-x-20 gap-y-10 md:gap-y-10">
          {PackagesData.map((item, index) => {
            return (
              <PackageItem
                key={index}
                data={item}
                className="border-[1px] border-cod-gray-200"
              />
            );
          }).reverse()}
        </div>
      )}
      <CustomInformation />
    </Article>
  );
};

export default PackagesItemsOnly;
