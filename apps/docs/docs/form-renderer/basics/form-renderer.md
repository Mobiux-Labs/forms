---
sidebar_label: 'Form Renderer'
sidebar_position: 2
---

# Form Renderer

The `FormRenderer` initializes the form environment using `react-hook-form`, integrates with the global context, and acts as a wrapper for multiple `FormFields` to manage form state and submission.

## Key Responsibilities

- **Form Setup**: Initializes and manages form state using `react-hook-form`.
- **Context Integration**: Stores form-specific states and methods in the global context via `FormProvider`.
- **Wrapper Component**: Encapsulates `FormFields`, which render the actual form elements.

## Core Props

- **`formName: string`**: Unique identifier for the form in the context.
- **`onSubmit: SubmitHandler<FieldValue<any>>`**: Function to handle form submission.
- **`validationSchema?: any`**: Optional schema for form validation.
- **`styles: { [key: string]: string }`**: Style classes for the form.
- **`className?: string`**: Additional class names for styling.
- **`defaultValues?: { [key: string]: string }`**: Default values for form fields.
- **`disabled?: boolean`**: Disables form fields if set to true.

## Usage

The `FormRenderer` should be used within a `FormProvider` to ensure proper context management and can contain multiple `FormFields`.

### Example

```tsx
import React from 'react';
import { FormRenderer } from '@mobiux-labs/form-core';

const MyForm = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormRenderer
      formName='myForm'
      onSubmit={handleSubmit}
      styles={{ input: 'input-class', button: 'button-class' }}
      defaultValues={{ name: '', email: '' }}
    >
      {/* FormFields components goes here. You can have multiple FormField. */}
    </FormRenderer>
  );
};

export default MyForm;
```

## Conclusion

The `FormRenderer` is essential for preparing the form environment and managing form state, serving as a wrapper for `FormFields` to render form elements effectively.
