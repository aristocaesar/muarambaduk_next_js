import Explore from './components/Explore';
import Packages from './components/Packages';
import Testimony from './components/Testimony';
import HeroFooter from './components/HeroFooter';
import MainLayout from './components/Main';
import News from './components/News';

export default function Home() {
  return (
    <MainLayout>
      <Explore />
      <Packages withHeading />
      <News />
      <Testimony />
      <HeroFooter />
    </MainLayout>
  );
}
