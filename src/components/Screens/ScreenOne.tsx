import { INPUT_LIST } from '@/utils/constants';

export function ScreenOne() {
  return INPUT_LIST.map((data) => (
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
  ));
}
