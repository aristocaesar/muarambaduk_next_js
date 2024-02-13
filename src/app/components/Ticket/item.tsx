import { Ticket } from '@/app/types/tickets';
import Currency from '@/app/utils/Currency';

interface TicketItemProps {
  data: Ticket;
}

const TicketItem: React.FC<TicketItemProps> = ({ data }) => {
  return (
    <div className="w-full">
      <h2 className="font-semibold mb-5">{data.title.rendered}</h2>
      {data.detail.map((ticket, index) => {
        return ticket.name == 'normal_day' ? (
          <p className="mb-2">Hari Biasa : {Currency(ticket.price)}</p>
        ) : (
          <p>Hari Akhir Pekan / Libur : {Currency(ticket.price)}</p>
        );
      })}
    </div>
  );
};

export default TicketItem;
