import { Metadata } from "next";
import Article from "../components/Article";
import FaqItem from "../components/Faq/item";
import FaqsData from "../data/faqs.json";
import MainLayout from "../components/Main";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - FAQ',
}  

const Faq : React.FC = () => {
    return <MainLayout title="Frequently Asked Questions">
        <Article>
            {
                FaqsData.map((faq, index) => {
                    return <FaqItem key={index} data={faq} />
                })
            }
        </Article>
    </MainLayout>
}

export default Faq;