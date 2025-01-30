---
sidebar_label: 'Button'
sidebar_position: 3
---

# Button Field

The Button Field is a versatile component designed to handle user interactions within forms. It can be customized with various styles and properties to fit the needs of your application.

## Features

- **Customizable Styles**: Apply custom styles to the button using the `style` property.
- **Flexible Props**: Accepts standard HTML button attributes and custom properties.
- **Visibility Control**: Easily show or hide the button using the `visibility` property.
- **Event Handling**: Define custom behavior for button clicks with the `onClick` property.

## Usage

Below is an example of how to define a Button Field using the `ButtonFieldDefinition` interface.

```tsx
{
  type: 'button', // or 'submit', 'reset'
  style: { button: 'button-class' }, // optional
  fieldProps: { onClick: (event) => console.log(event) }, // optional
  label: 'Click me', // optional
  disabled: false, // optional
  visibility: 'visible', // optional
  className: 'custom-class', // optional
}
```

> **Note**: The `onClick` function inside `fieldProps` is used to handle button click events. Ensure that the function is defined to perform the desired action when the button is clicked.
