import { Package } from '@/app/types/packages';
import Currency from '@/app/utils/Currency';
import FeatherIcon from 'feather-icons-react';
import Image from 'next/image';
import Link from 'next/link';

interface PackageItemProps {
  data: Package;
}

const PackageItem: React.FC<PackageItemProps> = ({ data }) => {
  return (
    <div className="rounded-md drop-shadow-sm bg-white-50">
      <div className="relative w-[100%] h-[300px] rounded-t-md">
        <Image
          src={
            data.featured_media == null || data.featured_media == ''
              ? '/default-image.png'
              : data.featured_media
          }
          alt={data.title.rendered}
          fill
          style={{
            objectFit: 'cover',
          }}
          className="rounded-t-md"
        />
      </div>
      <div className="my-8 space-y-5 px-7 flex flex-col">
        <div className="text-center flex flex-col items-center">
          <h6 className="text-cod-gray-950 font-semibold text-[1.2rem]">
            {data.title.rendered.toUpperCase()}
          </h6>
          <p className="font-base text-[1.25rem] text-denim-600 mb-5">
            {Currency(data.price)}
          </p>
          <hr className="w-[15.8rem] border-t-[0.06rem] border-cod-gray-200" />
        </div>
        <ul>
          {data.products.map((product, index) => {
            return (
              <li key={index} className="flex items-center py-[0.44rem]">
                <FeatherIcon
                  icon="check-circle"
                  size={15}
                  className="text-denim-600 mr-[0.8rem]"
                />
                <p className="text-cod-gray-700 text-sm">{product.name}</p>
              </li>
            );
          })}
        </ul>
        <Link
          href={`/paket-camping/${data.slug}`}
          className="text-center rounded-md bg-denim-600 hover:bg-denim-700 focus:bg-denim-700 text-white-50 py-[0.75rem] text-[0.9rem] md:text-base"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
