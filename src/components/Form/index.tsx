import { useGlobalContext } from '@/context/GlobalContext';

import { FormType } from '@/types/FormTypes';
import { GO_BACK, GO_NEXT, STEP_1, STEP_2, STEP_3 } from '@/actions/types';

import { RADIO_LIST, CHECKBOX_LIST } from '@/utils/constants';

export function Form({ legend, description, children }: FormType) {
  const { globalState, dispatcher } = useGlobalContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    switch (globalState.step) {
      case 1: {
        const name = formData.get('name');
        const email = formData.get('email');
        const number = formData.get('number');

        dispatcher({ type: STEP_1, payload: { name, email, number } });
        break;
      }

      case 2: {
        const planName = formData.get('plan');
        const planInfo = RADIO_LIST(globalState.planType).find((plan) => plan.label === planName);

        if (!planInfo) throw new Error(`Plan ${planName} not found`);

        dispatcher({ type: STEP_2, payload: { plan: { name: planInfo.label, price: planInfo.price, discount: planInfo } } });
        break;
      }

      case 3: {
        const addOns = formData.getAll('addOns');
        const addOnsList = addOns.map((addOn, index) => ({ name: addOn, price: CHECKBOX_LIST(globalState.planType)[index].price }));

        dispatcher({ type: STEP_3, payload: { addOns: addOnsList } });
        break;
      }
    }

    dispatcher({ type: GO_NEXT });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'
    >
      <legend className='mt-2 text-2xl md:text-3xl font-bold text-Marine-blue'>{legend}</legend>
      <p className='mb-2 w-60 md:w-96 md:text-lg font-light text-Cool-gray'>{description}</p>

      {children}

      <section className='p-4 w-full flex justify-between items-center fixed bottom-0 left-0 bg-White'>
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
  );
}
