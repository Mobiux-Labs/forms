---
sidebar_label: 'Input'
sidebar_position: 1
---

# Input Field

The `InputField` component provides a versatile way to capture various types of single-line data input from users. It supports a wide range of input types, allowing developers to customize the input experience to meet specific application needs.

## Supported Input Types

- **text**: A standard input field for entering single-line text data.
- **password**: An input field for entering passwords, obscuring the text for privacy.
- **email**: An input field for entering email addresses, with built-in validation.
- **number**: An input field for entering numeric values, with optional min and max attributes.
- **tel**: An input field for entering telephone numbers.
- **url**: An input field for entering URLs, with built-in validation.
- **search**: An input field designed for search queries.
- **date**: An input field for selecting dates.
- **time**: An input field for selecting times.
- **datetime-local**: An input field for selecting both date and time, without a time zone.
- **month**: An input field for selecting a month and year.
- **week**: An input field for selecting a week and year.
- **color**: An input field for selecting a color, providing a color picker interface.
- **range**: An input field for selecting a value from a specified range, displayed as a slider.
- **hidden**: An input field that is not displayed to the user, used for storing data.

:::danger[Warning]

Input types like **checkbox**, **radio**, and **file** are not supported as they do need different kind of implementation

See,

- [Checkbox](https://mobiux-labs.github.io/forms/docs/form-renderer/fields/core/checkbox)
- [Radio](https://mobiux-labs.github.io/forms/docs/form-renderer/fields/core/radio)

:::

## Features

- **Diverse Input Types**: Supports multiple input types for different data entry needs.
- **Customizable Styles**: Allows for custom styling to match the application's design.
- **Validation Support**: Integrates with validation rules to ensure data integrity.
- **Event Handling**: Provides onChange event handling for dynamic interactions.

## Usage

To use the `Input Field`, define its properties in the field definition JSON. Below is an example of how to configure a text input field:

```tsx
{
  "formKey": "username",
  "type": "input",
  "style": {
    "input": "input-text-class",
    "label": "input-label-class",
    "error": "input-error-class"
  },
  "fieldProps": {
    "type": "text",
    "placeholder": "Enter your username"
  },
  "onChange": (value: string) => console.log(value),
  "label": "Username",
  "disabled": false,
  "visibility": "visible",
  "className": "custom-input-class",
  "rules": {
    "required": "Username is required"
  }
}
```

If you have any further questions or need additional examples, feel free to ask!
