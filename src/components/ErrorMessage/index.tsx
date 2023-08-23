import { useState, useEffect } from 'react';

interface Props {
  message: string;
}

export function ErrorMessage({message}: Props) {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  return (
    <div className={`my-4 p-4 ${hasRendered ? 'opacity-1 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0'} text-sm text-center rounded-lg bg-Strawberry-red shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-[opacity, transform] origin-top ease-out duration-200`}>
      <span className='text-White'>{message}</span>
    </div>
  );
}
