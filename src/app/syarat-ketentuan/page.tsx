import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { Pages } from '../types/pages';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - Syarat dan Ketentuan',
  description:
    'Jelajahi syarat dan ketentuan yang berlaku di Muara Mbaduk Camping Ground Banyuwangi. Temukan panduan penting untuk pengalaman wisata alam yang menyenangkan di camping ground kami. Pelajari ketentuan pemesanan, aturan penggunaan fasilitas, dan informasi penting lainnya untuk memastikan perjalanan Anda berjalan lancar.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - Syarat dan Ketentuan',
    description:
      'Jelajahi syarat dan ketentuan yang berlaku di Muara Mbaduk Camping Ground Banyuwangi. Temukan panduan penting untuk pengalaman wisata alam yang menyenangkan di camping ground kami. Pelajari ketentuan pemesanan, aturan penggunaan fasilitas, dan informasi penting lainnya untuk memastikan perjalanan Anda berjalan lancar.',
  },
};

const SyaratKetentuan: React.FC = async () => {
  const TermCondition: Pages[] = await MUARAMBADUK_API.Get(
    'pages?slug=syarat-dan-ketentuan'
  ).catch(() => []);
  return (
    <MainLayout data={{ title: 'Syarat dan Ketentuan' }}>
      {TermCondition.length == 0 ? (
        <Empty />
      ) : (
        <Article isContent isHtml={TermCondition[0].content.rendered}></Article>
      )}
    </MainLayout>
  );
};

export default SyaratKetentuan;
