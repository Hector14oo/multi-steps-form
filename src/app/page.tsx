'use client';

import { useGlobalContext } from '@/context/GlobalContext';

import { STEP_LIST } from '@/utils/constants';

import { Form } from '@/components/Form';
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ThanksScreen } from '@/components/Screens';

export default function Home() {
  const { globalState } = useGlobalContext();
  return (
    <main className='w-full h-full overflow-y-scroll flex flex-col items-center gap-4 before:w-full before:h-1/5 before:absolute before:bg-[url("/images/bg-sidebar-mobile.svg")] before:bg-cover before:z-[-1]'>
      <section>
        <ol className='mt-8 mb-[18px] flex justify-center align-middle gap-8'>
          {STEP_LIST.map((step, i) => {
            return (
              <li
                key={step.label}
                className={`w-8 md:w-10 h-8 md:h-10 md:text-xl flex justify-center items-center ${i === globalState.step - 1 ? 'bg-Light-blue  text-Marine-blue' : 'text-White border-White border'}  rounded-full`}
              >
                {step.value}
              </li>
            );
          })}
        </ol>
      </section>

      {globalState.success ? (
        <ThanksScreen />
      ) : (
        <>
          {globalState.step === 1 && (
            <Form
              legend='Personal info'
              description='Please provide your name, email address, and phone number.'
            >
              <ScreenOne />
            </Form>
          )}

          {globalState.step === 2 && (
            <Form
              legend='Select your plan'
              description='You have the option of monthly or yearly billing.'
            >
              <ScreenTwo />
            </Form>
          )}

          {globalState.step === 3 && (
            <Form
              legend='Pick add-ons'
              description='Add-ons help enhance your gaming experience.'
            >
              <ScreenThree />
            </Form>
          )}

          {globalState.step === 4 && <ScreenFour />}
        </>
      )}
    </main>
  );
}
