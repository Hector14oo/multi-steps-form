import { useGlobalContext } from '@/context/GlobalContext';

import { CHANGE_PLAN } from '@/actions/types';

export function ScreenFour() {
  const { globalState, dispatcher } = useGlobalContext();
  return (
    <section className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <h1 className='mt-2 text-2xl font-bold text-Marine-blue'>Finish up</h1>
      <p className='mb-2 w-60 text-sm font-light text-Cool-gray'>Double-check everything looks OK before confirming.</p>

      <article className='flex flex-col gap-4'>
        <main className='p-4 w-full flex flex-col gap-4 bg-Alabaster rounded-lg'>
          <section className='w-full flex justify-between items-center'>
            <span className='flex flex-col text-sm font-medium text-Marine-blue'>
              {globalState.plan.name}
              <button
                type='button'
                className='text-sm font-normal text-Cool-gray underline'
                onClick={() => dispatcher({ type: CHANGE_PLAN, payload: 2 })}
              >
                Change
              </button>
            </span>
            <span className='text-sm font-medium text-Marine-blue'>
              ${globalState.plan.price}/{globalState.planType ? 'yr' : 'mo'}
            </span>
          </section>

          <hr className='text-Light-gray' />

          <ul>
            {globalState.addOns.map((addOn) => (
              <li
                key={addOn.name}
                className='flex justify-between text-sm font-normal text-Cool-gray'
              >
                {addOn.name}
                <span className='text-Marine-blue'>
                  +${addOn.price}/{globalState.planType ? 'yr' : 'mo'}
                </span>
              </li>
            ))}
          </ul>
        </main>

        <footer className='px-4'>
          <h3 className='w-full flex justify-between text-sm text-Cool-gray'>
            Total (per year) <span className='text-base font-medium text-Purplish-blue'>${globalState.total}/yr</span>
          </h3>
        </footer>
      </article>
    </section>
  );
}
