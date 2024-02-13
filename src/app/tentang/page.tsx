import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { Pages } from '../types/pages';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground - Tentang',
};

async function getAbout() {
  const About: Pages[] = await MUARAMBADUK_API.Get('pages?slug=tentang-kami');
  return About[0];
}

const Tentang: React.FC = async () => {
  const About: Pages = await getAbout();
  return (
    <MainLayout data={{ title: 'Tentang Kami' }}>
      <Article isContent isHtml={About.content.rendered}></Article>
    </MainLayout>
  );
};

export default Tentang;
