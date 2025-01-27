---
sidebar_label: 'Checkbox'
sidebar_position: 5
---

# Checkbox Field

The Checkbox Field component is a flexible form element that allows users to toggle a boolean value. It integrates seamlessly with React Hook Form and TypeScript, offering customizable styles and properties for a tailored user experience.

## Features

- Supports boolean values for toggling.
- Customizable styles for input, label, and error messages.
- Optional label and onChange handler for enhanced functionality.
- Visibility control to show or hide the field.
- Integration with React Hook Form for form state management.

## Usage

To use the Checkbox Field, define a field object with the necessary properties. Below is an example of how to define a Checkbox Field using the `CheckboxFieldDefinition` type:

```tsx
{
  formKey: 'acceptTerms', // Unique identifier for the field
  type: 'checkbox', // Field type
  style: {
    input: 'checkbox-input-class', // optional
    label: 'checkbox-label-class', // optional
    error: 'checkbox-error-class', // optional
  },
  fieldProps: {
    checked: false, // optional
  },
  onChange: (value: boolean) => console.log(value), // optional
  label: 'Accept Terms and Conditions', // optional
  disabled: false, // optional
  visibility: 'visible', // optional
  className: 'custom-checkbox-class', // optional
  rules: {
    required: 'This field is required', // optional
  },
}
```
