import { FormEvent, useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';

import { FormType } from '@/types/FormTypes';
import { GO_BACK, GO_NEXT, STEP_1, STEP_2, STEP_3, ERROR } from '@/actions/types';

import { RADIO_LIST, CHECKBOX_LIST } from '@/utils/constants';

export function Form({ legend, description, children }: FormType) {
  const { globalState, dispatcher } = useGlobalContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatcher({ type: ERROR, payload: 0 });

    const labels = Array.from(e.currentTarget.getElementsByTagName('label'));
    const formData = new FormData(e.currentTarget);

    switch (globalState.step) {
      case 1: {
        if (
          labels.some((label) => {
            const input = label.children[0] as HTMLInputElement;
            return !input.value;
          })
        ) {
          dispatcher({ type: ERROR, payload: 1 });

          labels.forEach((label) => {
            const input = label.children[0];
            if (!input.getAttribute('value')) {
              input.classList.replace('ring-Light-gray', 'ring-Strawberry-red');
              input.classList.replace('outline-Marine-blue', 'outline-Strawberry-red');
            }
          });

          return;
        }

        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');

        dispatcher({ type: STEP_1, payload: { name, email, number } });
        break;
      }

      case 2: {
        dispatcher({ type: STEP_2, payload: { plan: { name: undefined, price: undefined } } });

        const planName = formData.get('plan');
        if (!planName) {
          dispatcher({ type: ERROR, payload: 1 });
          return;
        }

        const planInfo = RADIO_LIST(globalState.planType).find((plan) => plan.label === planName);
        if (!planInfo) throw new Error(`Plan ${planName} not found`);

        dispatcher({ type: STEP_2, payload: { plan: { name: planInfo.label, price: planInfo.price } } });
        break;
      }

      case 3: {
        const addOns = formData.getAll('addOns');
        if (addOns.length === 0) {
          dispatcher({ type: STEP_3, payload: { addOns: [] } });
          break;
        }
        const addOnsList = addOns.map((addOn, index) => ({ name: addOn, price: CHECKBOX_LIST(globalState.planType)[index].price }));

        dispatcher({ type: STEP_3, payload: { addOns: addOnsList } });
        break;
      }
    }

    dispatcher({ type: GO_NEXT });
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='p-5 lg:px-16 w-11/12 lg:w-full lg:h-full flex flex-col justify-between gap-3 lg:relative bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] lg:shadow-none'
      >
        <legend className='mt-2 text-2xl md:text-3xl font-bold text-Marine-blue'>{legend}</legend>
        <p className='mb-2 w-60 md:w-96 md:text-lg font-light text-Cool-gray'>{description}</p>

        {children}

        <div className={`my-4 p-4 min-h-[16px] text-sm text-center opacity-${globalState.errorOpacity} rounded-lg bg-Strawberry-red shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]`}>
          <span className='text-White'>{globalState.errorMessage[globalState.step - 1]}</span>
        </div>

        <section className='mt-auto lg:px-0 w-full flex justify-between items-center lg:right-16 lg:left-auto'>
          <button
            type='button'
            className={`${globalState.step > 1 ? 'visible' : 'invisible'} text-sm md:text-base text-Cool-gray rounded-[4px]`}
            onClick={() => dispatcher({ type: GO_BACK })}
          >
            Go Back
          </button>

          <button
            type='submit'
            className={`py-2 px-4 text-sm md:text-base text-White ${globalState.step < 4 ? 'bg-Marine-blue' : 'bg-Purplish-blue'} rounded-[4px]`}
          >
            {globalState.step < 4 ? 'Next Step' : 'Confirm'}
          </button>
        </section>
      </form>
    </>
  );
}
