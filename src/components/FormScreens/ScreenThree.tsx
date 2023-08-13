import { CHECKBOX_LIST } from '@utils/constants';

export function ScreenThree() {
  return (
    <fieldset className='flex flex-col justify-center items-center gap-4'>
      {CHECKBOX_LIST(true).map((checkbox) => (
        <label
          key={checkbox.label}
          className='pl-3 w-full relative flex items-center gap-4'
        >
          <input
            type='checkbox'
            name={checkbox.label}
            className='w-6 h-6 peer after:absolute after:rounded-lg after:top-0 after:left-0 after:w-full after:h-full after:appearance-none after:ring-1 after:ring-Light-gray after:checked:ring-Marine-blue'
          />
          <article className='p-3 pl-0 w-full flex items-center gap-4'>
            <span className='w-full text-sm text-Marine-blue font-medium'>
              {checkbox.label}
              <span className='w-full text-xs flex justify-between items-center text-Cool-gray'>{checkbox.description}</span>
            </span>
            <span className='text-xs text-Purplish-blue'>{checkbox.price}</span>
          </article>
        </label>
      ))}
    </fieldset>
  );
}
