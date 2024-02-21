import { NewsType } from '@/app/types/news';
import DateWFormat from '@/app/utils/Date/format';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItemProps {
  data: NewsType;
}

const NewsItem: React.FC<NewsItemProps> = ({ data }) => {
  return (
    <div className="rounded-md drop-shadow-sm bg-white-50 w-full lg:max-w-[30.1rem]">
      <div className="relative h-[200px] w-[100%]">
        <Image
          src={
            data.featured_media == null || data.featured_media == ''
              ? '/default-image.png'
              : data.featured_media
          }
          alt={data.title.rendered}
          className="rounded-t-md"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="p-[1.13rem] space-y-[0.58rem]">
        <span className="text-cod-gray-300">{DateWFormat(data.date)}</span>
        <h3 className="text-sm md:text-base">
          <Link
            className="font-semibold text-cod-gray-950 hover:text-cod-gray-700 text-[0.9rem] md:text-[1.1rem]"
            href={`berita/${data.slug}`}
          >
            {data.title.rendered}
          </Link>
        </h3>
        <div
          className="text-cod-gray-300"
          dangerouslySetInnerHTML={{
            __html: data.excerpt.rendered.toString().slice(0, 100),
          }}
        ></div>
      </div>
    </div>
  );
};

export default NewsItem;
