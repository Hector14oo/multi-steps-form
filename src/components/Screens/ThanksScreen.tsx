import { useGlobalContext } from '@/context/GlobalContext';
import { useTransition } from '@/hooks/useTransition';

import { ThanksSVG } from '@public/images/ThanksSVG';

export function ThanksScreen() {
  const { globalState } = useGlobalContext();
  const { transition } = useTransition(globalState.success);

  return (
    <section className={`w-full h-full p-6 lg:px-16 flex flex-col justify-center items-center text-center gap-3 ${transition ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-out duration-200`}>
      <i>
        <ThanksSVG />
      </i>
      <h1 className='mt-2 text-2xl md:text-4xl font-bold text-Marine-blue'>Thank you!</h1>
      <p className='mb-2 md:text-xl font-light text-Cool-gray'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please fell free to email us at support@loremgaming.com.</p>
    </section>
  );
}
