import { Metadata } from "next";
import MainLayout from "../components/Main";
import PackagesItemsOnly from "../components/Packages/itemsOnly";

export const metadata: Metadata = {
  title: "Muarambaduk Camping Ground Banyuwangi - Paket Camping",
  description:
    "Kami menawarkan paket camping yang menyediakan segala kebutuhan Anda sehingga Anda tidak perlu repot untuk menyiapkannya sendiri. Kami telah menyediakan berbagai perlengkapan yang diperlukan",
  openGraph: {
    title: "Muarambaduk Camping Ground Banyuwangi - Paket Camping",
    description:
      "Kami menawarkan paket camping yang menyediakan segala kebutuhan Anda sehingga Anda tidak perlu repot untuk menyiapkannya sendiri. Kami telah menyediakan berbagai perlengkapan yang diperlukan",
  },
};

const Paket: React.FC = () => {
  return (
    <MainLayout data={{ title: "Paket Camping" }}>
      <PackagesItemsOnly />
    </MainLayout>
  );
};

export default Paket;
