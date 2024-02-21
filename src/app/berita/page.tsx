import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { NewsType } from '../types/news';
import NewsItem from '../components/News/item';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - Berita',
  description:
    'Jelajahi berbagai berita terkini dan informasi menarik seputar Muara Mbaduk Camping Ground Banyuwangi. Di halaman berita kami, Anda akan menemukan update tentang acara khusus, kegiatan seru, dan berbagai pengalaman unik di alam terbuka. Tetap terinformasi dan ikuti perkembangan terbaru untuk memaksimalkan pengalaman camping dan menjadikan petualangan Anda di sini lebih berkesan.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - Berita',
    description:
      'Jelajahi berbagai berita terkini dan informasi menarik seputar Muara Mbaduk Camping Ground Banyuwangi. Di halaman berita kami, Anda akan menemukan update tentang acara khusus, kegiatan seru, dan berbagai pengalaman unik di alam terbuka. Tetap terinformasi dan ikuti perkembangan terbaru untuk memaksimalkan pengalaman camping dan menjadikan petualangan Anda di sini lebih berkesan.',
  },
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
