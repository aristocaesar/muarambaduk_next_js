import { Metadata } from 'next';
import MainLayout from '../components/Main';
import Packages from '../components/Packages';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground - Paket Camping',
};

const Paket: React.FC = () => {
  return (
    <MainLayout data={{ title: 'Paket Camping' }}>
      <Packages withCustomInformation />
    </MainLayout>
  );
};

export default Paket;
