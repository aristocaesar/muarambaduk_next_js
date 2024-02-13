import MUARAMBADUK_API from '@/app/config/Muarambaduk_API';
import Section from '../Section';
import { NewsType } from '@/app/types/news';
import Empty from '../Empty';
import NewsItem from './item';
import Link from 'next/link';

const News: React.FC = async function () {
  const _NewsData: NewsType[] = await MUARAMBADUK_API.Get('posts');

  return (
    <Section id="berita" className="container">
      <h3 className="text-center text-cod-gray-950 text-[1.6rem] md:text-[2rem] font-semibold mb-14">
        Berita terbaru dari <span className="text-denim-600">Muara Mbaduk</span>
      </h3>
      {_NewsData.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-0 md:gap-y-0 md:gap-10">
          {_NewsData.map(
            (news, index) => index < 2 && <NewsItem key={index} data={news} />
          )}
        </div>
      ) : (
        <Empty withSpace={false} message="Belum Ada Berita Yang Tersedia" />
      )}
      {_NewsData.length > 2 ? (
        <div className="flex justify-center mt-[4.56rem]">
          <Link
            href="/berita"
            className="rounded-md bg-denim-600 hover:bg-denim-700 text-white-50 py-[0.75rem] px-[3.8rem] text-[0.9rem] md:text-base"
          >
            Lihat Lebih Banyak
          </Link>
        </div>
      ) : (
        <></>
      )}
    </Section>
  );
};

export default News;
