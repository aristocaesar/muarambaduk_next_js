import { Metadata } from 'next';
import Article from '../components/Article';
import MainLayout from '../components/Main';
import { Pages } from '../types/pages';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'MuaMuarambaduk Camping Ground Banyuwangi - Kebijakan Privasi',
  description:
    'Kami menghargai privasi Anda di Muara Mbaduk Camping Ground Banyuwangi. Baca kebijakan privasi kami untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Kami berkomitmen untuk menjaga kerahasiaan data dan memberikan pengalaman yang aman selama Anda menjelajahi dan berinteraksi dengan situs kami. Informasi lebih lanjut tentang kebijakan privasi kami tersedia di halaman ini.',
  openGraph: {
    title: 'MuaMuarambaduk Camping Ground Banyuwangi - Kebijakan Privasi',
    description:
      'Kami menghargai privasi Anda di Muara Mbaduk Camping Ground Banyuwangi. Baca kebijakan privasi kami untuk memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Kami berkomitmen untuk menjaga kerahasiaan data dan memberikan pengalaman yang aman selama Anda menjelajahi dan berinteraksi dengan situs kami. Informasi lebih lanjut tentang kebijakan privasi kami tersedia di halaman ini.',
  },
};

const KebijakanPrivasi: React.FC = async () => {
  const PrivacyPolicy: Pages[] = await MUARAMBADUK_API.Get(
    'pages/?slug=kebijakan-privasi'
  ).catch(() => []);
  return (
    <MainLayout data={{ title: 'Kebijakan Privasi' }}>
      {PrivacyPolicy.length == 0 ? (
        <Empty />
      ) : (
        <Article isContent isHtml={PrivacyPolicy[0].content.rendered}></Article>
      )}
    </MainLayout>
  );
};

export default KebijakanPrivasi;
