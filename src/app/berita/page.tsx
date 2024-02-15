import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { NewsType } from '../types/news';
import NewsItem from '../components/News/item';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground - Berita',
};

const Berita: React.FC = async () => {
  const _NewsData: NewsType[] = await MUARAMBADUK_API.Get('posts');
  return (
    <MainLayout data={{ title: 'Berita' }}>
      <Article>
        {_NewsData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-0 md:gap-10">
            {_NewsData.map((news, index) => (
              <NewsItem key={index} data={news} />
            ))}
          </div>
        ) : (
          <Empty withSpace={false} message="Belum Ada Berita Yang Tersedia" />
        )}
      </Article>
    </MainLayout>
  );
};

export default Berita;
