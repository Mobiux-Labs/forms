---
sidebar_label: 'Visibility'
sidebar_position: 3
---

# Visibility

This documentation explains how to manage the visibility of form fields using the `@mobiux-labs/form-core` package. The `visibility` property in the `FieldDefinition` type allows you to control whether a field is displayed or hidden.

> A string that determines the field's visibility. It can be set to `'visible'` or `'hidden'`.

## How it works

To control the visibility of a field, the following style is added to the top-level container of each fields:

```tsx
<div
  style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
  className={className}
>
  {/* Field content goes here */}
</div>
```

## Sample

Here's an example of how to define a field with the `visibility` property:

```tsx
const fieldDefinitions: FieldDefinition[] = [
  {
    formKey: 'username',
    label: 'Username',
    type: 'input',
    visibility: 'visible', // Set to 'hidden' to hide the field
    // You can pass the visibility value dynamically based on conditions
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
];
```

### Explanation

- **Visibility Control**: The `visibility` property is used to toggle the display of the field. If set to `'hidden'`, the field is not rendered in the DOM.
- **Dynamic Behavior**: The visibility can be dynamically controlled based on form state or other conditions, allowing for flexible form interactions.

By utilizing the `visibility` property, you can create forms that adapt to user interactions and application logic, enhancing the user experience.
