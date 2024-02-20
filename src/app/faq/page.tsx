import { Metadata } from "next";
import Article from "../components/Article";
import FaqItem from "../components/Faq/item";
import MainLayout from "../components/Main";
import { Faqs } from "../types/faqs";
import MUARAMBADUK_API from "../config/Muarambaduk_API";
import Empty from "../components/Empty";

export const metadata: Metadata = {
  title: "Muarambaduk Camping Ground Banyuwangi - FAQ",
};

const Faq: React.FC = async () => {
  const _Faqs: Faqs[] = await MUARAMBADUK_API.Get("faqs").catch(() => []);
  return (
    <MainLayout data={{ title: "Frequently Asked Questions" }}>
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
