import { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

interface MainLayoutProps {
  data?: {
    title?: string;
    heading?: string;
  };
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ data, children }) => {
  return (
    <>
      <NavBar data={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
