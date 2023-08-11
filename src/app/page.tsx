import { Form } from '@/components/Form';
import { ScreenOne } from '@/components/FormScreens';

import { STEP_LIST } from '@/utils/constants';

export default function Home() {
  const page = 1;
  return (
    <main className='w-full h-full flex flex-col items-center gap-4 bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat'>
      <section>
        <ol className='mt-8 mb-[18px] flex justify-center align-middle gap-8'>
          {STEP_LIST.map((step, i) => {
            return (
              <li
                key={step.label}
                className={`w-8 h-8 flex justify-center items-center ${i === 0 ? 'bg-Light-blue  text-Marine-blue' : ' text-White border-White border'}  rounded-full`}
              >
                {step.value}
              </li>
            );
          })}
        </ol>
      </section>
      {page === 1 && (
        <Form
          legend='Personal info'
          description='Please provide your name, email address, and phone number.'
          page={page}
        >
          <ScreenOne />
        </Form>
      )}
    </main>
  );
}
