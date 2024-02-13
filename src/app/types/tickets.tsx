type TicketDetail = {
  id: number;
  name: string;
  price: number;
};

export type Ticket = {
  id: number;
  title: {
    rendered: string;
  };
  categories: {
    id: number;
    name: string;
  };
  detail: TicketDetail[];
};
