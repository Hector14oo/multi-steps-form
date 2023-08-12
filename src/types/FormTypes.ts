import { ReactNode } from 'react';

export type FormType = {
  legend: string;
  description: string;
  page: number;
  children: ReactNode;
};
