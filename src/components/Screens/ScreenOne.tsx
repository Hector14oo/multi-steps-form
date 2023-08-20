import { INPUT_LIST } from '@/utils/constants';

export function ScreenOne() {
  return INPUT_LIST.map((data) => (
    <label
      key={data.label}
      className='flex flex-col text-[13.75px] md:text-base text-Marine-blue'
    >
      {data.label}
      <input
        type={data.type}
        name={data.name}
        placeholder={`e.g. ${data.placeholder}`}
        className='px-3 py-[10px] relative text-sm md:text-lg font-medium ring-1 ring-Light-gray outline-Marine-blue rounded-md invalid:ring-Strawberry-red invalid:outline-Strawberry-red'
        onChange={(e) => {
          e.target.classList.replace('ring-Strawberry-red', 'ring-Light-gray');
          e.target.classList.replace('outline-Strawberry-red', 'outline-Marine-blue');
        }}
      />
    </label>
  ));
}
