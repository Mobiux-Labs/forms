---
sidebar_label: 'Radio'
sidebar_position: 6
---

# Radio Field

The Radio Field component is a versatile form element that allows users to select a single option from a predefined set of choices. It is designed to work seamlessly with React Hook Form and TypeScript, providing customizable styles and properties for a tailored user experience.

## Features

- Supports multiple options for selection.
- Customizable styles for input, label, error messages, and option labels.
- Optional label and onChange handler for enhanced functionality.
- Visibility control to show or hide the field.
- Integration with React Hook Form for form state management.

## Usage

To use the Radio Field, define a field object with the necessary properties. Below is an example of how to define a Radio Field using the `RadioFieldDefinition` type:

```tsx
{
    formKey: 'subscription', // Unique identifier for the field
    type: 'radio', // Field type
    style: {
        input: 'input-radio-class',
        label: 'label-class',
        error: 'error-class',
        optionLabel: 'option-label-class',
    },
    fieldProps: {
        options: [
            {
                value: 'basic',
                label: 'Basic',
            },
            {
                value: 'standard',
                label: 'Standard',
            },
            {
                value: 'premium',
                label: 'Premium',
            },
        ],
    },
    onChange: (value: boolean) => console.log(value), // optional
    label: 'Subscription Plan', // optional
    disabled: false, // optional
    visibility: 'visible', // optional
    className: 'custom-radio-class', // optional
    rules: {
        required: 'Please select a subscription plan', // optional
    }
}
```
