---
sidebar_label: 'Dependent Field'
sidebar_position: 1
---

# Dependent Field

This example demonstrates how to manage dependent fields using `FormRenderer` and `FormFields` from the `@mobiux-labs/form-core` package. The form dynamically updates the `full_name` field based on changes to the `first_name` and `last_name` fields.

```tsx
import {
  FormRenderer,
  FormFields,
  FieldDefinition,
  useFormContext,
} from '@mobiux-labs/form-core';

const MyForm = () => {
  const FORM_NAME = 'myForm';

  const { getContext } = useFormContext();
  const { methods, formData } = getContext ? getContext(FORM_NAME) || {} : {};

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  const fieldDefinitions: FieldDefinition[] = [
    {
      formKey: 'first_name',
      label: 'First Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      onChange: (value: string) => {
        const lastName = formData?.last_name || '';
        methods?.setValue('full_name', `${value} ${lastName}`);
      },
    },
    {
      formKey: 'last_name',
      label: 'Last Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      onChange: (value: string) => {
        const firstName = formData?.first_name || '';
        methods?.setValue('full_name', `${firstName} ${value}`);
      },
    },
    {
      formKey: 'full_name',
      label: 'Full Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
    },
  ];

  return (
    <FormRenderer
      formName={FORM_NAME}
      onSubmit={handleSubmit}
      styles={{
        'input-md': `w-full rounded-md p-2 bg-[#44444430] text-[#000000]`,
        'label-md': 'w-full pb-3 text-md text-[#00000080]',
        'error-text': 'text-red-400 text-sm',
      }}
      defaultValues={{ first_name: '', last_name: '', full_name: '' }}
    >
      <FormFields
        formName={FORM_NAME}
        definitions={fieldDefinitions}
      />
    </FormRenderer>
  );
};

export default MyForm;
```

## Explanation

- **Form Context**: The `useFormContext` hook is used to access the form's context, which provides methods and form data.
- **Dynamic Updates**: The `onChange` handlers for `first_name` and `last_name` update the `full_name` field by combining their values.
- **Field Definitions**: Each field is defined with a `formKey`, `label`, `type`, and `style`. The `onChange` function is used to handle dependencies.

This approach allows you to create forms where fields can dynamically interact with each other, providing a more responsive user experience.
