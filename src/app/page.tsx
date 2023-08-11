const STEPS = [
  { value: '1', label: 'STEP 1', description: 'YOUR INFO' },
  { value: '2', label: 'STEP 2', description: 'SELECT PLAN' },
  { value: '3', label: 'STEP 3', description: 'ADD-ONS' },
  { value: '4', label: 'STEP 4', description: 'SUMMARY' },
];

const INPUTS = [
  { label: 'Name', type: 'text', name:'name', placeholder: 'Stephen King' },
  { label: 'Email Address', type: 'email', name:'email', placeholder: 'stephenking@lorem.com' },
  { label: 'Phone Number', type: 'number', name:'number', placeholder: '+57 313 111 1111' },
];

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col items-center gap-4 bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat'>
      <section>
        <ol className='mt-8 mb-[18px] flex justify-center align-middle gap-8'>
          {STEPS.map((step, i) => {
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
      <form
        action=''
        className='p-5 flex flex-col gap-3 w-11/12 bg-White rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]'
      >
        <legend className='mt-2 text-2xl font-bold text-Marine-blue'>
          Personal info
        </legend>
        <p className='mb-2 w-60 font-light text-Cool-gray'>
          Please provide your name, email address, and phone number.
        </p>

        {INPUTS.map((data) => (
          <label key={data.label} className='flex flex-col text-[13.75px] text-Marine-blue'>
            {data.label}
            <input
              type={data.type}
              name={data.name}
              placeholder={`e.g. ${data.placeholder}`}
              className='px-3 py-[10px] text-sm font-medium border border-Light-gray rounded-md'
            />
          </label>
        ))}

        <section className="p-4 w-full flex flex-row-reverse fixed bottom-0 left-0 bg-White">
          <button type='button' className="py-2 px-4 text-sm text-White bg-Marine-blue rounded-[4px]">Next Step</button>
        </section>
      </form>
    </main>
  );
}
