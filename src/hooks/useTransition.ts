import { useState, useEffect } from 'react';
import { ConditionalExpression } from 'typescript';

export function useTransition(condition: boolean) {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (condition) setTransition(true);
  }, [condition]);

  const leaveTransition = () => setTransition(false);

  return { transition, leaveTransition };
}
