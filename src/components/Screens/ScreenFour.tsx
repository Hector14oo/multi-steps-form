import { useGlobalContext } from '@/context/GlobalContext';
import { CHANGE_PLAN, GO_BACK, SUCCESS } from '@/actions/types';

export function ScreenFour() {
  const { globalState, dispatcher } = useGlobalContext();
  return (
    <section className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <h1 className='mt-2 text-2xl md:text-3xl font-bold text-Marine-blue'>Finish up</h1>
      <p className='mb-2 w-60 md:w-96 md:text-lg font-light text-Cool-gray'>Double-check everything looks OK before confirming.</p>

      <article className='pb-2 flex flex-col gap-6'>
        <main className='p-4 w-full flex flex-col gap-4 bg-Magnolia rounded-lg'>
          <section className='w-full flex justify-between items-center'>
            <span className='flex flex-col items-start md:text-lg font-medium text-Marine-blue'>
              {globalState.plan.name} ({globalState.plan ? 'Yearly' : 'Monthly'})
              <button
                type='button'
                className='text-sm md:text-base font-normal text-Cool-gray underline'
                onClick={() => dispatcher({ type: CHANGE_PLAN, payload: 2 })}
              >
                Change
              </button>
            </span>
            <span className='text-sm md:text-base font-medium text-Marine-blue'>
              ${globalState.plan.price}/{globalState.planType ? 'yr' : 'mo'}
            </span>
          </section>

          <hr className='text-Light-gray' />

          <ul>
            {globalState.addOns.map((addOn) => (
              <li
                key={addOn.name}
                className='flex justify-between text-sm md:text-base font-normal text-Cool-gray'
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
          <h3 className='w-full flex justify-between text-sm md:text-base text-Cool-gray'>
            Total ({globalState.plan ? 'per Year' : 'per Month'}) <span className='text-base font-medium text-Purplish-blue'>${globalState.total}/yr</span>
          </h3>
        </footer>
      </article>

      <section className='p-4 w-full flex justify-between items-center fixed bottom-0 left-0 bg-White'>
        <button
          type='button'
          className={`${globalState.step > 1 ? 'visible' : 'invisible'} text-sm md:text-base text-Cool-gray rounded-[4px]`}
          onClick={() => dispatcher({ type: GO_BACK })}
        >
          Go Back
        </button>

        <button
          type='button'
          className={`py-2 px-4 text-sm md:text-base text-White ${globalState.step < 4 ? 'bg-Marine-blue' : 'bg-Purplish-blue'} rounded-[4px]`}
          onClick={() => dispatcher({ type: SUCCESS })}
        >
          Confirm
        </button>
      </section>
    </section>
  );
}
