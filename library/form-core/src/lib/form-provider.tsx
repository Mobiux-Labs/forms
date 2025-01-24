'use client';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
};

export type StateData = {
  styles: { [key: string]: string };
  methods: UseFormReturn;
  formData: { [key: string]: string };
};

type State = {
  [name: string]: StateData;
};

type ValueTypes = {
  getContext: (name: string) => StateData | undefined;
  setContext: (name: string, state: StateData) => void;
};

// Create a Context for the form
const FormContext = React.createContext<ValueTypes | undefined>(undefined);

// FormProvider component to manage form state
export const FormProvider: React.FC<Props> = ({ children }) => {
  const [formState, setFormState] = React.useState<State>({});

  const getContext = (formName: string) => {
    return formState ? formState[formName] : undefined;
  };

  const setContext = (formName: string, state: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [formName]: state,
    }));
  };

  return (
    <FormContext.Provider value={{ getContext, setContext }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use form context
export const useFormContext = (): ValueTypes => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
