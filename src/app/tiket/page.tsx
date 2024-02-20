import MainLayout from "../components/Main";
import { Metadata } from "next";
import TicketPage from "../components/Ticket";
import MUARAMBADUK_API from "../config/Muarambaduk_API";
import { Ticket } from "../types/tickets";
import Empty from "../components/Empty";

export const metadata: Metadata = {
  title: "Muarambaduk Camping Ground Banyuwangi - Tiket",
};

const Tiket: React.FC = async () => {
  const TicketData: Ticket[] = await MUARAMBADUK_API.Get("tickets").catch(
    () => []
  );
  return (
    <MainLayout data={{ title: "Tiket" }}>
      {TicketData.length ? <TicketPage data={TicketData} /> : <Empty />}
    </MainLayout>
  );
};

export default Tiket;
