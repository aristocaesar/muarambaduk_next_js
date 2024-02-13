'use client';

import Image from 'next/image';
import Section from '../Section';
import TestimonyData from '../../data/testimony.json';
import { useEffect, useState } from 'react';

const Testimony: React.FC = () => {
  const [testimoni, setTestimoni] = useState<number>(0);

  useEffect(() => {
    const slide = setInterval(() => {
      if (TestimonyData.length - 1 > testimoni) {
        setTestimoni(testimoni + 1);
      } else {
        setTestimoni(0);
      }
    }, 10000);

    return () => clearInterval(slide);
  }, [testimoni]);

  return (
    <Section id="testimoni" colorfull>
      <div className="container grid grid-cols-1 md:grid-cols-3 space-x-0 md:space-x-5">
        <div className="flex flex-col mb-14 space-y-5 col-span-2">
          <h3 className="text-cod-gray-950 text-[1.6rem] md:text-[2rem] font-semibold max-w-md">
            Kata <span className="text-denim-600">mereka</span> yang telah
            berkunjung
          </h3>
          <div id="testimonial-description">
            <div>
              <p className="text-cod-gray-300 max-w-xl text-[1.1rem]">
                {TestimonyData[testimoni].description}
              </p>
              <p className="font-semibold text-cod-gray-950 mt-5">
                - {TestimonyData[testimoni].name}
              </p>
            </div>
          </div>
        </div>
        <div id="testimonial-images" className="hidden md:block mt-4 md:mt-0">
          <div className="relative w-[350px] h-[400px]">
            <Image
              src={TestimonyData[testimoni].image}
              alt={TestimonyData[testimoni].image}
              fill
              style={{
                objectFit: 'cover',
              }}
              className="max-h-xs rounded-md drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimony;
