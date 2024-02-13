'use client';

import { Faqs } from '@/app/types/faqs';
import classNames from 'classnames';
import { useState } from 'react';

interface FaqItemProps {
  data: Faqs;
}

const FaqItem: React.FC<FaqItemProps> = ({ data }) => {
  const [itemSelected, setItemSelected] = useState<boolean>(false);

  return (
    <div className="border-b-[1px] border-cod-gray-300 cursor-pointer">
      <div className="flex py-5 justify-between items-center">
        <h6 className="font-semibold w-10/12">{data.title.rendered}</h6>
        <div className="w-2/12 flex justify-end">
          <svg
            className={classNames({
              hidden: itemSelected,
            })}
            fill="#000000"
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setItemSelected(true)}
          >
            <path d="M9,17h6v6a1,1,0,0,0,2,0V17h6a1,1,0,0,0,0-2H17V9a1,1,0,0,0-2,0v6H9a1,1,0,0,0,0,2Z" />
          </svg>
          <svg
            className={classNames({
              hidden: !itemSelected,
            })}
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setItemSelected(false)}
          >
            <path
              d="M7 12L17 12"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={classNames('text-cod-gray-300 mb-5', {
          hidden: !itemSelected,
        })}
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      ></div>
    </div>
  );
};

export default FaqItem;
