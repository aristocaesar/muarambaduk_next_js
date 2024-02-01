import { Metadata } from "next";
import MainLayout from "../components/Main";
import Packages from "../components/Packages";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Paket Camping',
}  

const Paket : React.FC = () => {
    return <MainLayout title="Paket Camping">
        <Packages />
    </MainLayout>
}

export default Paket;