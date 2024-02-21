import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { Pages } from '../types/pages';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - Tentang',
  description:
    'Muara Mbaduk di Banyuwangi adalah kawasan wisata alam yang menawarkan pemandangan yang luar biasa indah. Terletak sekitar 25 km di sebelah barat kota Banyuwangi, Muara Mbaduk adalah tempat yang ideal bagi wisatawan yang mencari pengalaman wisata alam yang berbeda.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - Tentang',
    description:
      'Muara Mbaduk di Banyuwangi adalah kawasan wisata alam yang menawarkan pemandangan yang luar biasa indah. Terletak sekitar 25 km di sebelah barat kota Banyuwangi, Muara Mbaduk adalah tempat yang ideal bagi wisatawan yang mencari pengalaman wisata alam yang berbeda.',
  },
};

const Tentang: React.FC = async () => {
  const About: Pages[] = await MUARAMBADUK_API.Get(
    'pages?slug=tentang-kami'
  ).catch(() => []);
  return (
    <MainLayout data={{ title: 'Tentang Kami' }}>
      <Article isContent isHtml={About[0].content.rendered}></Article>
    </MainLayout>
  );
};

export default Tentang;
