import { Metadata } from "next";
import Article from "../components/Article";
import SyaratKetentuanData from "../data/syarat-kententuan.json";
import ListItem from "../components/ListItem/item";
import MainLayout from "../components/Main";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Syarat dan Ketentuan',
}  

const SyaratKetentuan : React.FC = () => {
    return <MainLayout title="Syarat dan Ketentuan">
        <Article>
            <h3 className="font-bold mb-5">Berikut adalah syarat dan ketentuan yang berlaku pada wisata Muara Mbaduk Banyuwangi:</h3>
            <ul className="space-y-5 list-disc ml-4">
                {
                    SyaratKetentuanData.map((item, index) => {
                        return <ListItem key={index} value={item.description} />
                    })
                }
            </ul>
        </Article>
    </MainLayout>
}

export default SyaratKetentuan;