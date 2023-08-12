'use client';

import { useState } from 'react';
import { RADIO_LIST } from '@utils/constants';

export function ScreenTwo() {
  const [togglePlan, setTogglePlan] = useState(false);
  return (
    <fieldset className='flex flex-col justify-center items-center gap-4'>
      {RADIO_LIST(togglePlan).map((radio) => (
        <label
          key={radio.label}
          className='w-full'
        >
          <input
            type='radio'
            name='plan'
            className='sr-only peer'
          />
          <article className='p-5 w-full flex items-center gap-4 rounded-lg ring-1 ring-Light-gray peer-checked:ring-Marine-blue'>
            <i aria-hidden='true'>{radio.icon}</i>
            <section className='w-full'>
              <span className='w-full text-Marine-blue font-medium'>{radio.label}</span>
              <span className='w-full flex justify-between items-center text-sm text-Cool-gray'>
                {radio.price}
                <span className='text-xs text-Marine-blue'>{radio.hasDiscount}</span>
              </span>
            </section>
          </article>
        </label>
      ))}

      <section className='pt-4 w-full flex justify-center gap-4 rounded-lg bg-Alabaster'>
        <span className={`text-sm font-medium ${!togglePlan ? 'text-Marine-blue' : 'text-Cool-gray'}`}>Monthly</span>
        <button
          type='button'
          className='p-1 w-9 h-fit rounded-full bg-Marine-blue'
          onClick={() => setTogglePlan(!togglePlan)}
        >
          <div className={`w-3 h-3 rounded-full bg-White ${togglePlan ? 'translate-x-[16px]' : 'translate-x-0'} ease-out duration-100 transition-transform`} />
        </button>
        <span className={`text-sm font-medium ${togglePlan ? 'text-Marine-blue' : 'text-Cool-gray'}`}>Yearly</span>
      </section>
    </fieldset>
  );
}
