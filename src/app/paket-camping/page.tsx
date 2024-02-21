import { Metadata } from 'next';
import MainLayout from '../components/Main';
import PackagesItemsOnly from '../components/Packages/itemsOnly';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - Paket Camping',
  description:
    'Temukan kemudahan dan kenyamanan dalam menyewa alat camping di Muara Mbaduk Camping Ground Banyuwangi. Jelajahi berbagai paket camping yang menawarkan penyewaan alat berkemah, mulai dari tenda hingga peralatan dapur. Nikmati liburan camping tanpa repot dengan layanan penyewaan kami. Pilih paket camping yang sesuai dengan kebutuhan Anda dan nikmati petualangan alam yang tak terlupakan.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - Paket Camping',
    description:
      'Temukan kemudahan dan kenyamanan dalam menyewa alat camping di Muara Mbaduk Camping Ground Banyuwangi. Jelajahi berbagai paket camping yang menawarkan penyewaan alat berkemah, mulai dari tenda hingga peralatan dapur. Nikmati liburan camping tanpa repot dengan layanan penyewaan kami. Pilih paket camping yang sesuai dengan kebutuhan Anda dan nikmati petualangan alam yang tak terlupakan.',
  },
};

const Paket: React.FC = () => {
  return (
    <MainLayout data={{ title: 'Paket Camping' }}>
      <PackagesItemsOnly />
    </MainLayout>
  );
};

export default Paket;
