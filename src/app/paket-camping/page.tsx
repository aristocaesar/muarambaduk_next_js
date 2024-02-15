import { Metadata } from 'next';
import MainLayout from '../components/Main';
import PackagesItemsOnly from '../components/Packages/itemsOnly';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground - Paket Camping',
};

const Paket: React.FC = () => {
  return (
    <MainLayout data={{ title: 'Paket Camping' }}>
      <PackagesItemsOnly />
    </MainLayout>
  );
};

export default Paket;
