import { INPUT_LIST } from '@/utils/constants';

export function StepOne() {
  return (
    <form
      action=''
      className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'
    >
      <legend className='mt-2 text-2xl font-bold text-Marine-blue'>
        Personal info
      </legend>
      <p className='mb-2 w-60 font-light text-Cool-gray'>
        Please provide your name, email address, and phone number.
      </p>

      {INPUT_LIST.map((data) => (
        <label
          key={data.label}
          className='flex flex-col text-[13.75px] text-Marine-blue'
        >
          {data.label}
          <input
            type={data.type}
            name={data.name}
            placeholder={`e.g. ${data.placeholder}`}
            className='px-3 py-[10px] text-sm font-medium border border-Light-gray rounded-md'
          />
        </label>
      ))}

      <section className='p-4 w-full flex flex-row-reverse fixed bottom-0 left-0 bg-White'>
        <button
          type='button'
          className='py-2 px-4 text-sm text-White bg-Marine-blue rounded-[4px]'
        >
          Next Step
        </button>
      </section>
    </form>
  );
}
