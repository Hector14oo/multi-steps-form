import { INPUT_LIST } from '@/utils/constants';
import { useGlobalContext } from '@/context/GlobalContext';

export function ScreenOne() {
  const { globalState } = useGlobalContext();
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
        className='px-3 py-[10px] relative text-sm md:text-lg font-medium ring-1 ring-Light-gray hover:ring-Purplish-blue outline-Purplish-blue  rounded-md invalid:ring-Strawberry-red invalid:outline-Strawberry-red transition-[--tw-ring-color] ease-out duration-200'
        onChange={(e) => {
          e.target.classList.replace('ring-Strawberry-red', 'ring-Light-gray');
          e.target.classList.replace('outline-Strawberry-red', 'outline-Marine-blue');
        }}
      />
    </label>
  ));
}
