import Explore from "./components/Explore";
import Packages from "./components/Packages";
import Testimony from "./components/Testimony";
import HeroFooter from "./components/HeroFooter";
import MainLayout from "./components/Main";
export default function Home() {

  return (
    <MainLayout>
      <Explore />
      <Packages withHeading />
      <Testimony />
      <HeroFooter />
    </MainLayout>
  )
}
