---
sidebar_label: 'Button'
sidebar_position: 3
---

:::danger[Note]

This field is not available now, it is still in development stage

:::

# Button Field

The Button Field component is used to render a clickable button within a form. It is designed to trigger form submissions or other actions, providing a customizable and interactive element for users.

## Features

- **Customizable Styles**: Supports custom styling for the button to match the form's design.
- **Event Handling**: Provides an `onClick` event to handle button clicks.
- **Disabled State**: Can be configured to be disabled based on form state or other conditions.
- **Label Support**: Allows setting a label for the button to indicate its purpose.

## Usage

To use the Button Field, define its properties in the field definition JSON. Below is an example of how to configure a button field:

```tsx
{
  "formKey": "submitButton",
  "type": "button",
  "style": {
    "button": "button-class",
    "label": "button-label-class"
  },
  "fieldProps": {
    "type": "submit"
  },
  "onClick": () => console.log('Button clicked'),
  "label": "Submit",
  "disabled": false,
  "visibility": "visible",
  "className": "custom-button-class"
}
```
