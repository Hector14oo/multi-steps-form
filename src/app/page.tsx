import { STEP_LIST } from '@/utils/constants';

import { StepOne } from '@/components/Form';

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col items-center gap-4 bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat'>
      <section>
        <ol className='mt-8 mb-[18px] flex justify-center align-middle gap-8'>
          {STEP_LIST.map((step, i) => {
            return (
              <li key={step.label} className={`w-8 h-8 flex justify-center items-center ${i === 0 ? 'bg-Light-blue  text-Marine-blue' : ' text-White border-White border'}  rounded-full`}>
                {step.value}
              </li>
            );
          })}
        </ol>
      </section>

      {true && <StepOne />}
    </main>
  );
}
