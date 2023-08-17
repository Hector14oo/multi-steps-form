import { ThanksSVG } from '@public/images/ThanksSVG';

export function ThanksScreen() {
  return (
    <section className='p-6 h-96 flex flex-col justify-center items-center text-center gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'>
      <i>
        <ThanksSVG />
      </i>
      <h1 className='mt-2 text-2xl md:text-4xl font-bold text-Marine-blue'>Thank you!</h1>
      <p className='mb-2 md:text-xl font-light text-Cool-gray'>
        Thanks for confirming your subscription!
        We hope you have fun using our
        platform. If you ever need support,
        please fell free to email us at 
        support@loremgaming.com.
      </p>
    </section>
  );
}
