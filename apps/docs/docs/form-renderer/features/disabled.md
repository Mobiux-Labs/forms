---
sidebar_label: 'Disabled'
sidebar_position: 4
---

# Disabled

This documentation explains how to manage the disabled state of form fields using the `@mobiux-labs/form-core` package. The `disabled` property in the `FieldDefinition` type allows you to control whether a field is editable.

> A boolean that determines whether the field is disabled. When set to `true`, the field is not editable.

## How It Works

The library automatically handles the disabled state for any field type by applying the appropriate behavior based on the field's expected functionality. When the `disabled` property is set to `true`, the field becomes non-editable.

## Sample

Here's an example of how to define a field with the `disabled` property:

```tsx
const fieldDefinitions: FieldDefinition[] = [
  {
    formKey: 'username',
    label: 'Username',
    type: 'input',
    disabled: false, // Set to true to disable the field
    // You can pass the disabled value dynamically based on conditions
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
];
```

### Explanation

- **Disabled State**: The `disabled` property, when set to `true`, makes the field non-editable. This is useful for fields that should not be modified under certain conditions.
- **Dynamic Behavior**: The disabled state can be dynamically controlled based on form state or other conditions, allowing for flexible form interactions.

By utilizing the `disabled` property, you can create forms that adapt to user interactions and application logic, enhancing the user experience.

```

```
