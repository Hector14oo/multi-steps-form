'use client';

import { useGlobalContext } from '@/context/GlobalContext';

import { STEP_LIST } from '@/utils/constants';

import { Form } from '@/components/Form';
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ThanksScreen } from '@/components/Screens';

export default function Home() {
  const { globalState } = useGlobalContext();
  return (
    <main className='lg:p-4 w-full h-full lg:w-[1024px] lg:min-h-[512px] lg:h-auto flex flex-col lg:grid lg:grid-cols-[25%_1fr] lg:grid-rows-[650px] lg:relative overflow-hidden items-center lg:items-start gap-4 lg:bg-White lg:rounded-xl before:w-full before:h-1/5 before:absolute before:bg-[url("/images/bg-sidebar-mobile.svg")] before:bg-cover before:z-[-1] lg:before:bg-none lg:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <section className='lg:w-full lg:h-full rounded-xl overflow-hidden pointer-events-none'>
        <ol className='mt-8 mb-[18px] lg:m-0 lg:pt-8 lg:h-full flex lg:flex-col justify-center lg:justify-start items-center gap-8 lg:bg-[url("/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-cover'>
          {STEP_LIST.map((step, i) => {
            return (
              <li
                key={step.label}
                className='lg:pl-8 w-full flex gap-4 items-center'
              >
                <span className={`w-8 md:w-10 h-8 md:h-10 flex justify-center items-center md:text-lg ${i === globalState.step - 1 ? 'bg-Light-blue  text-Marine-blue' : 'text-White border-White border'}  rounded-full`}>{step.value}</span>
                <span className='hidden lg:flex flex-col text-White'>
                  <span className='text-Light-gray opacity-50'>{step.label}</span>
                  <span>{step.description}</span>
                </span>
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
