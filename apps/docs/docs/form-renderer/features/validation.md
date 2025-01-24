---
sidebar_label: 'Validation'
sidebar_position: 2
---

# Validation

To implement validation rules in your form using the `@mobiux-labs/form-core` package, simply add these rules to the `rules` parameter of each `FieldDefinition`. The validation rules are integrated with `react-hook-form` and support various constraints, including:

- `required`: Ensures the field is not left empty.
- `min`: Sets a minimum value for numeric fields.
- `max`: Sets a maximum value for numeric fields.
- `minLength`: Specifies the minimum number of characters for text fields.
- `maxLength`: Specifies the maximum number of characters for text fields.
- `pattern`: Validates the field value against a regular expression.
- `validate`: Allows custom validation logic through a function.

By specifying these rules in the `rules` parameter, you can easily enforce the desired validation constraints for each field in your form.

## Simple Example

Here's an example of a `FieldDefinition` with various validation rules added to the `rules` prop:

```json
{
  "formKey": "full_name",
  "label": "Full Name",
  "type": "text",
  "rules": {
    "required": "This field is required",
    "minLength": {
      "value": 3,
      "message": "Full Name must be at least 3 characters long"
    },
    "maxLength": {
      "value": 50,
      "message": "Full Name cannot exceed 50 characters"
    },
    "pattern": {
      "value": "^[A-Za-z ]+$",
      "message": "Full Name can only contain letters and spaces"
    }
  },
  "style": {
    "input": "input-md",
    "label": "label-sm",
    "error": "error-text"
  }
}
```

You can adjust these rules and messages according to your form's requirements.

## Dynamic Example

Below is an example of how to set up a form with validation rules dynamically:

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
      formKey: 'full_name',
      label: 'Full Name',
      type: 'text',
      rules: {
        // Dynamically set the 'required' rule based on the value of 'make_full_name_required'
        required: formData?.make_full_name_required
          ? 'This field is required' // Error message if the field is required
          : undefined, // No validation if the field is not required
      },
      style: {
        input: 'input-md',
        label: 'label-sm',
        error: 'error-text',
      },
    },
    {
      formKey: 'make_full_name_required',
      label: 'Make full name required',
      type: 'checkbox',
      style: {
        input: 'input-md',
        label: 'label-sm',
        error: 'error-text',
      },
    },
  ];

  return (
    <FormRenderer
      formName={FORM_NAME}
      onSubmit={handleSubmit}
      styles={{
        'input-md': 'w-full rounded-md p-2 bg-[#44444430] text-[#000000]',
        'label-md': 'w-full pb-3 text-md text-[#00000080]',
        'error-text': 'text-red-400 text-sm',
      }}
      defaultValues={{ full_name: '' }}
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

## Key Points

- **Validation Rules**: The `rules` property in `FieldDefinition` allows you to specify validation constraints. In this example, the `full_name` field is marked as `required` with a custom error message.
- **Styling**: Custom styles are applied to inputs, labels, and error messages using the `styles` prop in `FormRenderer`.
- **Form Context**: The `useFormContext` hook provides access to form methods and data, enabling dynamic form validation.

This setup ensures that your form fields are validated according to the specified rules, providing immediate feedback to users and improving the overall form experience.
