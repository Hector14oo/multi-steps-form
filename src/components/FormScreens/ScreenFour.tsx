import Link from 'next/link';

export function ScreenFour() {
  return (
    <article className='flex flex-col gap-4'>
      <main className='p-4 w-full flex flex-col gap-4 bg-Alabaster rounded-lg'>
        <section className='w-full flex justify-between items-center'>
          <span className='flex flex-col text-sm font-medium text-Marine-blue'>
            Arcade (Monthly)
            <Link
              href={'#'}
              className='text-sm font-normal text-Cool-gray underline'
            >
              Change
            </Link>
          </span>
          <span className='text-sm font-medium text-Marine-blue'>$90/yr</span>
        </section>

        <hr className='text-Light-gray' />

        <ul>
          <li className='flex justify-between text-sm font-normal text-Cool-gray'>
            Online service <span className='text-Marine-blue'>+$10/yr</span>
          </li>
          <li className='flex justify-between text-sm font-normal text-Cool-gray'>
            Larger storage <span className='text-Marine-blue'>+$20/yr</span>
          </li>
        </ul>
      </main>

      <footer className='px-4'>
        <h3 className='w-full flex justify-between text-sm text-Cool-gray'>Total (per year) <span className='text-base font-medium text-Purplish-blue'>$120/yr</span></h3>
      </footer>
    </article>
  );
}
