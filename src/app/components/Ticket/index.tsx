'use client';

import classNames from 'classnames';
import Article from '../Article';
import TicketItem from './item';
import { useState } from 'react';
import { Ticket } from '@/app/types/tickets';

interface TicketPageProps {
  data: Ticket[];
}

const TicketPage: React.FC<TicketPageProps> = (props) => {
  const [ticketState, setTicketState] = useState<string>('tourist');

  return (
    <Article>
      <div className="flex w-full">
        <button
          className={classNames(
            'py-5 font-semibold text-white-50 w-full rounded-l-sm text-sm md:text-base',
            {
              'bg-denim-600 hover:bg-denim-700': ticketState == 'tourist',
              'bg-cod-gray-300 hover:bg-cod-gray-400':
                ticketState == 'transport',
            }
          )}
          onClick={() => setTicketState('tourist')}
        >
          Wisatawan
        </button>
        <button
          className={classNames(
            'py-5 font-semibold text-white-50 w-full rounded-l-sm text-sm md:text-base',
            {
              'bg-denim-600 hover:bg-denim-700': ticketState == 'transport',
              'bg-cod-gray-300 hover:bg-cod-gray-400': ticketState == 'tourist',
            }
          )}
          onClick={() => setTicketState('transport')}
        >
          Kendaraan
        </button>
      </div>
      <div className="flex flex-col text-sm md:text-base">
        <div
          className={classNames(
            'grid grid-cols-1 md:grid-cols-2 w-full my-10 space-y-5 md:space-y-0',
            {
              hidden: ticketState == 'transport',
            }
          )}
        >
          {props.data.map((ticket, index) => {
            if (ticket.categories.name == 'tourist') {
              return <TicketItem key={index} data={ticket} />;
            }
          })}
        </div>
        <div
          className={classNames(
            'grid grid-cols-1 md:grid-cols-2 w-full my-10 space-y-5 md:space-y-0',
            {
              hidden: ticketState == 'tourist',
            }
          )}
        >
          {props.data.map((ticket, index) => {
            if (ticket.categories.name == 'transport') {
              return <TicketItem key={index} data={ticket} />;
            }
          })}
        </div>
      </div>
    </Article>
  );
};

export default TicketPage;
