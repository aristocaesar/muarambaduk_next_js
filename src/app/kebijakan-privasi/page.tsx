import { Metadata } from "next";
import ListItem from "../components/ListItem/item";
import Article from "../components/Article";
import KebijakanPrivasiData from "../data/kebijakan-privasi.json"
import MainLayout from "../components/Main";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Kebijakan Privasi',
}  

const KebijakanPrivasi : React.FC = () => {
    return <MainLayout title="Kebijakan Privasi">
        <Article>
            <h3 className="font-bold mb-5">Berikut adalah kebijakan privasi yang berlaku pada wisata Muara Mbaduk Banyuwangi:</h3>
            <ul className="space-y-5 list-disc ml-4">
                {
                    KebijakanPrivasiData.map((item, index) => {
                        return <ListItem key={index} value={item.description} />
                    })
                }
            </ul>
        </Article>
    </MainLayout>
}

export default KebijakanPrivasi;