'use client';

import { UserInformation } from '@/types/FormTypes';
import { initialState, formReducer } from '@/actions/reducer';
import { createContext, useContext, ReactNode, useReducer } from 'react';

interface ContextProps {
  globalState: UserInformation;
  dispatcher: ({}) => void;
}

export const Context = createContext<ContextProps>({
  globalState: initialState,
  dispatcher: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return <Context.Provider value={{ globalState: state, dispatcher: dispatch }}>{children}</Context.Provider>;
};

export const useGlobalContext = () => useContext(Context);
