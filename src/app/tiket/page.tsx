import MainLayout from "../components/Main";
import { Metadata } from "next";
import TicketPage from "../components/Ticket";

export const metadata: Metadata = {
    title: 'Muarambaduk Camping Ground - Tiket',
}  

const Tiket : React.FC = () => {

    return <MainLayout title="Tiket">
        <TicketPage />
    </MainLayout>
}

export default Tiket;