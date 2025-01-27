---
sidebar_label: 'Array'
sidebar_position: 4
---

# Array Field

The Array Field component is designed to handle dynamic arrays of form fields within a React form. It leverages the `useFieldArray` hook from `react-hook-form` to manage the addition and removal of fields, providing a flexible and customizable way to handle complex form structures.

## Features

- Dynamically add or remove fields within an array.
- Customizable rendering for add and remove buttons.
- Supports nested field definitions for complex form structures.
- Integrates seamlessly with the `FormFields` component for rendering child fields.
- Style customization through `ArrayFieldStyleProps`.

## Usage

To use the Array Field component, define the field properties and styles as shown below:

```tsx
{
  formKey: 'members', // Unique identifier for the field
  type: 'array',
  style: {
    container: 'array-container',
    label: 'label-sm',
    error: 'error-text',
    addBtn: 'array-add-btn',
    removeBtn: 'array-remove-btn',
    title: 'array-title',
    header: 'array-header',
  },
  className: 'mt-2 p-3 border border-[#00000030] rounded-md', // optional
  fieldProps: {
    title: 'Member', // optional
    renderAddButton: (
      <div className='flex justify-center items-center'>
        Add
      </div>
    ), // optional
    renderRemoveButton: (
        <div className='flex justify-center items-center'>
        Add
      </div>
    ), // optional
    fields: [
      {
        formKey: 'name',
        type: 'input',
        label: 'Name', // optional
        className: 'mt-1', // optional
        rules: { required: 'This is required' }, // optional
        style: {
          input: 'input-md',
          label: 'label-sm',
          error: 'error-text',
        },
      },
      {
        formKey: 'email',
        type: 'input',
        label: 'Email', // optional
        className: 'mt-1', // optional
        style: {
          input: 'input-md',
          label: 'label-sm',
          error: 'error-text',
        },
      },
      {
        formKey: 'password',
        type: 'input',
        label: 'Password', // optional
        style: {
          input: 'input-md',
          label: 'label-sm',
          error: 'error-text',
        },
      },
    ],
  },
  label: 'Array Field Label', // optional
  disabled: false, // optional
  visibility: 'visible', // optional
}
```
