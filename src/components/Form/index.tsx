import { FormType } from '@/types/FormTypes';

export function StepOne({ legend, description, page, children }: FormType) {
  return (
    <form
      action=''
      className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'
    >
      <legend className='mt-2 text-2xl font-bold text-Marine-blue'>
        Personal info
        {legend}
      </legend>
      <p className='mb-2 w-60 font-light text-Cool-gray'>
        Please provide your name, email address, and phone number.
        {description}
      </p>

      {children}

      <section className='p-4 w-full flex justify-between items-center fixed bottom-0 left-0 bg-White'>
        <button
          type='button'
          className={`${page > 1 ? 'visible' : 'invisible'} text-sm text-Cool-gray rounded-[4px]`}
        >
          Go Back
        </button>

        <button
          type='button'
          className={`py-2 px-4 text-sm text-White ${page < 4 ? 'bg-Marine-blue' : 'bg-Purplish-blue'} rounded-[4px]`}
        >
          {page < 4 ? 'Next Step' : 'Confirm'}
        </button>
      </section>
    </form>
  );
}
