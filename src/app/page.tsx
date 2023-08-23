'use client';

import { useGlobalContext } from '@/context/GlobalContext';

import { STEP_LIST } from '@/utils/constants';

import { Form } from '@/components/Form';
import { ScreenOne, ScreenTwo, ScreenThree, ScreenFour, ThanksScreen } from '@/components/Screens';
import { SpinnerLoading } from '@/components/LoadingSpinner';

export default function Home() {
  const { globalState } = useGlobalContext();
  return (
    <main className='lg:p-4 w-full h-full lg:w-[1024px] lg:min-h-[512px] lg:h-auto flex flex-col lg:grid lg:grid-cols-[25%_1fr] lg:grid-rows-[650px] lg:relative overflow-hidden items-center lg:items-start gap-4 lg:bg-White lg:rounded-xl before:w-full before:h-1/5 before:absolute before:bg-[url("/images/bg-sidebar-mobile.svg")] before:bg-cover before:z-[-1] lg:before:bg-none lg:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <SpinnerLoading />

      <section className='px-4 md:p-0 lg:w-full lg:h-full rounded-xl overflow-hidden pointer-events-none'>
        <ol className='mt-8 mb-[18px] lg:m-0 lg:pt-8 lg:h-full flex lg:flex-col justify-center lg:justify-start items-center gap-8 lg:bg-[url("/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-cover'>
          {STEP_LIST.map((step, i) => {
            return (
              <li
                key={step.label}
                className='lg:pl-8 w-full flex gap-4 items-center'
              >
                <span className={`w-8 font-medium antialiased lg:font-semibold md:w-10 h-8 md:h-10 flex justify-center items-center md:text-lg ${i === globalState.step - 1 ? 'bg-Light-blue  text-Marine-blue' : 'text-White ring-1 ring-White'} transition-colors ease-out duration-200 rounded-full`}>{step.value}</span>
                <span className={`hidden font-medium antialiased lg:flex flex-col text-White ${i === globalState.step - 1 ? 'opacity-100' : 'opacity-75'} transition-colors ease-out duration-200`}>
                  <span className='text-Light-gray opacity-50'>{step.label}</span>
                  <span>{step.description}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <section className='mb-5 p-5 lg:px-16 w-11/12 lg:w-full lg:h-full relative bg-White rounded-xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] lg:shadow-none'>
        {globalState.success ? (
          <ThanksScreen />
        ) : (
          <>
            {globalState.step === 1 && (
              <Form
                id={1}
                legend='Personal info'
                description='Please provide your name, email address, and phone number.'
              >
                <ScreenOne />
              </Form>
            )}

            {globalState.step === 2 && (
              <Form
                id={2}
                legend='Select your plan'
                description='You have the option of monthly or yearly billing.'
              >
                <ScreenTwo />
              </Form>
            )}

            {globalState.step === 3 && (
              <Form
                id={3}
                legend='Pick add-ons'
                description='Add-ons help enhance your gaming experience.'
              >
                <ScreenThree />
              </Form>
            )}

            {globalState.step === 4 && <ScreenFour />}
          </>
        )}
      </section>
    </main>
  );
}
