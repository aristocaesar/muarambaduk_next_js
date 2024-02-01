import { Ticket } from "@/app/types/tickets"
import Currency from "@/app/utils/Currency";

interface TicketItemProps {
    data : Ticket
}

const TicketItem : React.FC<TicketItemProps> = ({data}) => {
    return <div className="w-full">
        <h2 className="font-semibold mb-5">{data.title}</h2>
        <p className="mb-2">Hari Biasa : {Currency(data.normal_day)}</p>
        <p>Hari Akhir Pekan / Libur : {Currency(data.weekend_day)}</p>
    </div>
}

export default TicketItem;