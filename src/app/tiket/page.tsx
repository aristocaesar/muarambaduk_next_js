import MainLayout from '../components/Main';
import { Metadata } from 'next';
import TicketPage from '../components/Ticket';
import MUARAMBADUK_API from '../config/Muarambaduk_API';
import { Ticket } from '../types/tickets';
import Empty from '../components/Empty';

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground Banyuwangi - Tiket',
  description:
    'Beli tiket untuk pengalaman camping seru di Muara Mbaduk Camping Ground Banyuwangi. Temukan harga tiket, paket eksklusif, dan informasi pembelian tiket untuk merencanakan perjalanan outdoor Anda. Segera dapatkan tiket Anda dan nikmati petualangan alam yang tak terlupakan di destinasi camping yang indah ini.',
  openGraph: {
    title: 'Muarambaduk Camping Ground Banyuwangi - Tiket',
    description:
      'Beli tiket untuk pengalaman camping seru di Muara Mbaduk Camping Ground Banyuwangi. Temukan harga tiket, paket eksklusif, dan informasi pembelian tiket untuk merencanakan perjalanan outdoor Anda. Segera dapatkan tiket Anda dan nikmati petualangan alam yang tak terlupakan di destinasi camping yang indah ini.',
  },
};

const Tiket: React.FC = async () => {
  const TicketData: Ticket[] = await MUARAMBADUK_API.Get('tickets').catch(
    () => []
  );
  return (
    <MainLayout data={{ title: 'Tiket' }}>
      {TicketData.length ? <TicketPage data={TicketData} /> : <Empty />}
    </MainLayout>
  );
};

export default Tiket;
