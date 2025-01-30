---
sidebar_label: 'File'
sidebar_position: 7
---

# File Field

The File Field component is a form field used for uploading files in a React application. It leverages the React Hook Form library to manage form state and validation, providing a seamless experience for handling file inputs.

> **Note**: This is a very basic file field. It does not support drag-and-drop features or any advanced functionalities. It functions similarly to a standard `<input type="file">`. If you require a more feature-rich file input, consider building a custom field. Refer to the [Custom Field Documentation](/docs/form-renderer/features/custom-field) for guidance, or check if a new extendable package for files has been added in the [Extended Documentation](/docs/category/extended).

## Features

- **File Upload**: Allows users to select and upload files.
- **Customizable Styles**: Supports custom styles for input, label, and error messages.
- **Validation**: Integrates with `react-hook-form` for validation rules and error handling.
- **Visibility Control**: Can be hidden or shown based on the `visibility` property.
- **Disabled State**: Supports disabling the file input field.

## Usage

To use the `FileField` component, define a field definition object with the necessary properties.

```tsx
{
  formKey: 'upload', // Unique identifier for the field
  type: 'file', // Field type for rendering a file input component
  style: { input: 'input-class', label: 'label-class', error: 'error-class' }, // optional
  fieldProps: { accept: '.jpg,.png', multiple: true }, // optional, HTML attributes for the input element
  onChange: (files) => console.log(files), // optional, function to handle file changes
  label: 'Upload File', // optional
  disabled: false, // optional
  visibility: 'visible', // optional
  className: 'file-field-container', // optional
  rules: { required: 'File is required' }, // optional, validation rules
}
```
