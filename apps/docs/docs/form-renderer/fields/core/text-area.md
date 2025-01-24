---
sidebar_label: 'Textarea'
sidebar_position: 2
---

:::danger[Note]

This field is not available now, it is still in development stage

:::

# Text-Area Field

The Text-Area Field component is designed to render a multi-line text input within a form. It provides a flexible and customizable way to capture larger text inputs from users, such as comments or descriptions.

## Features

- **Multi-line Input**: Allows users to input multiple lines of text.
- **Customizable Styles**: Supports custom styling for the text-area and its label.
- **Validation Support**: Integrates with validation rules to ensure data integrity.
- **Event Handling**: Provides an `onChange` event to handle input changes.

## Usage

To use the Text-Area Field, define its properties in the field definition JSON. Below is an example of how to configure a text-area field:

```tsx
{
  "formKey": "description",
  "type": "text-area",
  "style": {
    "input": "text-area-input-class",
    "label": "text-area-label-class",
    "error": "text-area-error-class"
  },
  "fieldProps": {
    "rows": 5,
    "placeholder": "Enter your description here..."
  },
  "onChange": (value: string) => console.log(value),
  "label": "Description",
  "disabled": false,
  "visibility": "visible",
  "className": "custom-text-area-class",
  "rules": {
    "required": "Description is required",
    "maxLength": {
      "value": 500,
      "message": "Description cannot exceed 500 characters"
    }
  }
}
```

This configuration will render a text-area field with a label "Description", a placeholder, and validation rules to ensure the input is required and does not exceed 500 characters.
