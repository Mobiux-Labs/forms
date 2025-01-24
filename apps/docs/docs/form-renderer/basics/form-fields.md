---
sidebar_label: 'Form Fields'
sidebar_position: 3
---

# Form Fields

`FormFields` is a flexible component in Mobiux Labs Forms that creates form elements from specified field definitions, integrating smoothly with the form's context.

## Key Responsibilities

- **Dynamic Rendering**: Renders form elements based on provided field definitions.
- **Context Integration**: Utilizes form context to access form-specific states and methods.

## Core Component

- **`FormFields`**: Main component for rendering fields.
  - **Props**:
    - **`definitions: FieldDefinition[]`**: Array of field definitions to render.
    - **`formName: string`**: Identifier for the form in the context.

## Usage

The `FormFields` component should be used within a `FormRenderer` to ensure proper context management and rendering of form elements.

### Example

```tsx
import React from 'react';
import { FormRenderer, FormFields } from '@mobiux-labs/form-core';

const fieldDefinitions = [
  {
    formKey: 'username',
    label: 'Username',
    type: 'text',
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
  {
    formKey: 'password',
    label: 'Password',
    type: 'password',
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
];

const MyForm = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormRenderer
      formName='myForm'
      onSubmit={handleSubmit}
      styles={{ input: 'input-class', button: 'button-class' }}
      defaultValues={{ username: '', password: '' }}
    >
      <FormFields
        definitions={fieldDefinitions}
        formName='myForm'
      />
    </FormRenderer>
  );
};

export default MyForm;
```

:::tip[Tip]
When using multiple `FormFields` within the same `FormRenderer`, ensure that the `formName` prop is consistent across all `FormFields` components. This consistency is crucial for maintaining a unified form context and ensuring that all fields are correctly managed and submitted together.
:::

## Conclusion

`FormFields` provides a flexible and extensible way to render form elements based on dynamic field definitions, ensuring seamless integration with the form context.
