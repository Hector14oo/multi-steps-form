import { FormEvent } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { useTransition } from '@/hooks/useTransition';

import { FormType } from '@/types/FormTypes';
import { GO_BACK, GO_NEXT, STEP_1, STEP_2, STEP_3, ERROR } from '@/actions/types';

import { RADIO_LIST, CHECKBOX_LIST } from '@/utils/constants';
import { ErrorMessage } from '../ErrorMessage';

export function Form({ id, legend, description, children }: FormType) {
  const { globalState, dispatcher } = useGlobalContext();
  const { transition, leaveTransition } = useTransition(globalState.step === id);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatcher({ type: ERROR, payload: false });

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
          dispatcher({ type: ERROR, payload: true });

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
          dispatcher({ type: ERROR, payload: true });
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

    leaveTransition();
    dispatcher({ type: GO_NEXT });
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={`w-full h-full flex flex-col justify-between gap-5 ${transition ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-out duration-200`}
      >
        <legend className='mt-2 text-2xl md:text-3xl font-bold text-Marine-blue'>{legend}</legend>
        <p className='mb-2 w-60 md:w-96 md:text-lg font-light text-Cool-gray'>{description}</p>

        {children}

        {globalState.showError && <ErrorMessage message={globalState.errorMessage[globalState.step - 1]} />}

        <section className='mt-auto lg:px-0 w-full flex justify-between items-center lg:right-16 lg:left-auto'>
          <button
            type='button'
            className={`${globalState.step > 1 ? 'visible' : 'invisible'} font-medium text-sm md:text-base text-Cool-gray md:hover:text-Marine-blue transition-colors ease-out duration-200`}
            onClick={() => {
              dispatcher({ type: ERROR, payload: false });
              leaveTransition();
              dispatcher({ type: GO_BACK });
            }}
          >
            Go Back
          </button>

          <button
            type='submit'
            className={`py-2 px-4 text-sm md:text-base text-White ${globalState.step < 4 ? 'bg-Marine-blue' : 'bg-Purplish-blue'} md:hover:bg-opacity-90 transition-colors ease-out duration-200 rounded-lg`}
          >
            {globalState.step < 4 ? 'Next Step' : 'Confirm'}
          </button>
        </section>
      </form>
    </>
  );
}
