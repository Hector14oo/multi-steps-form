import { ReactNode } from 'react';

export type FormType = {
  legend: string;
  description: string;
  children: ReactNode;
};

export type UserInformation = {
  userData: {
    name: undefined | string;
    email: undefined | string;
    number: undefined | string;
  };
  plan: { name: undefined | string; price: undefined | number };
  planType: boolean;
  addOns: [] | [{ name: undefined | string; price: undefined | number }];
  step: number;
  success: boolean;
  total: number;
};
