'use client';
import { ReactNode, useEffect } from 'react';
import {
  useForm,
  FormProvider as RHFProvider,
  SubmitHandler,
  UseFormReturn,
  FieldValue,
  useWatch,
} from 'react-hook-form';
import { useFormContext } from './form-provider'; // Import the custom hook

interface FormProps<T> {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValue<any>>;
  formName: string; // Add a form name to identify the form in the context
  validationSchema?: any;
  styles: { [key: string]: string };
  className?: string;
  defaultValues?: { [key: string]: string };
  disabled?: boolean;
}

export const FormRenderer = <T,>({
  children,
  onSubmit,
  validationSchema,
  formName,
  styles,
  className,
  defaultValues,
  disabled,
}: FormProps<T>) => {
  const methods: UseFormReturn = useForm({
    resolver: validationSchema,
    defaultValues: defaultValues,
    disabled: disabled,
  });
  const formData = useWatch({ control: methods.control });
  const { setContext } = useFormContext(); // Use the custom hook to get the setContext function

  const handleSubmit: any = (data: T) => {
    onSubmit(data); // Call the original onSubmit function
  };

  useEffect(() => {
    setContext(formName, {
      styles: styles,
      methods: methods,
      formData: formData,
    });
  }, [formData]);

  return (
    <RHFProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={className}
      >
        {children}
      </form>
    </RHFProvider>
  );
};
