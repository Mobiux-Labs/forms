/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormContext } from './form-provider'; // Import the custom hook for form context
import { FieldDefinition, FieldDefinitionBase } from './types/fields'; // Import the type for field definitions
import fieldRegistry from './field-registry';

interface FormFieldProps {
  definitions: (
    | FieldDefinition // For defined components in the library
    | FieldDefinitionBase<string, any, any, any>
  )[]; // For custom components // Array of field definitions
  formName: string; // Name to identify the form in the context
}

export const FormFields: React.FC<FormFieldProps> = ({
  definitions: fieldDefinitions,
  formName,
}) => {
  const { getContext } = useFormContext(); // Get the getContext function from the custom hook
  const form = getContext(formName); // Retrieve the form data from the context using the form name

  return fieldDefinitions?.map((field, index) => {
    // Retrieve the component from the registry using the field type
    const Component = fieldRegistry.get(field.type);

    if (!Component)
      throw new Error(`Component not found for field type '${field.type}'`);

    return (
      <Component
        styles={form?.styles}
        methods={form?.methods}
        key={index}
        field={field}
        formName={formName}
      />
    );
  });
};
