import { Metadata } from 'next';
import Article from '../components/Article';
import FaqItem from '../components/Faq/item';
import MainLayout from '../components/Main';
import { Faqs } from '../types/faqs';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - FAQ',
  description:
    'Temukan jawaban untuk pertanyaan umum Anda di Muara Mbaduk Camping Ground Banyuwangi. Lihat FAQ kami untuk mendapatkan informasi terkait reservasi, fasilitas, kebijakan, dan banyak lagi. Kami berusaha memberikan informasi yang jelas dan mendetail untuk memastikan pengalaman Anda di camping ground ini lebih lancar dan memuaskan. Jika pertanyaan Anda tidak terjawab di sini, jangan ragu untuk menghubungi tim dukungan kami.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - FAQ',
    description:
      'Temukan jawaban untuk pertanyaan umum Anda di Muara Mbaduk Camping Ground Banyuwangi. Lihat FAQ kami untuk mendapatkan informasi terkait reservasi, fasilitas, kebijakan, dan banyak lagi. Kami berusaha memberikan informasi yang jelas dan mendetail untuk memastikan pengalaman Anda di camping ground ini lebih lancar dan memuaskan. Jika pertanyaan Anda tidak terjawab di sini, jangan ragu untuk menghubungi tim dukungan kami.',
  },
};

const Faq: React.FC = async () => {
  const _Faqs: Faqs[] = await MUARAMBADUK_API.Get('faqs').catch(() => []);
  return (
    <MainLayout data={{ title: 'Frequently Asked Questions' }}>
      {_Faqs.length == 0 ? (
        <Empty />
      ) : (
        <Article>
          {_Faqs.map((faq, index) => {
            return <FaqItem key={index} data={faq} />;
          })}
        </Article>
      )}
    </MainLayout>
  );
};

export default Faq;
