---
sidebar_label: 'Definition'
sidebar_position: 1
---

# Definition

All fields are derived from the `FieldDefinitionBase` type, which serves as the foundation for defining form fields.

```tsx
export type FieldDefinitionBase<T extends string, V, P, S> = {
  formKey: string; // Unique identifier for field registration with react-hook-form
  type: T; // Specifies the component type to render
  style: S; // Style classes specific to the field type
  fieldProps?: P; // Field-specific props, such as HTML attributes
  onChange?: (value: V) => void; // Function to handle value changes
  label?: string; // Helper text for the field
  disabled?: boolean; // Indicates if the field is disabled
  visibility?: 'visible' | 'hidden'; // Controls field visibility
  className?: string; // Additional classes for the field's root element
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >; // Validation rules for react-hook-form's Controller
};
```

# Field Categories

The form renderer supports three primary field categories:

- **Fields**
- **Layout & Spacers**
- **Typography**

## Fields

Fields are interactive components that require state management for data handling and user interaction. They are directly derived from `FieldDefinitionBase`.

```tsx
export type TextFieldDefinition = FieldDefinitionBase<
  'text', // Component type for rendering an input
  string, // Data type for the input value
  React.InputHTMLAttributes<HTMLInputElement>, // Input-specific props
  { input: string; label: string; error: string } // Style classes for input, label, and error
>;
```

## Layout & Spacers

These components provide structural layout within the form, such as flex or grid views. They do not require `formKey` or `onChange` as they lack interactive functionality. They are derived from `FieldDefinitionBase` by omitting unnecessary keys.

```tsx
export type LayoutAndSpacersBase<T extends string, P, S> = Omit<
  FieldDefinitionBase<T, undefined, P, S>,
  'formKey' | 'onChange' | 'label' | 'rules'
>;
```

## Typography

Typography fields are used for adding headings and descriptions within the form. They are derived from `LayoutAndSpacersBase`, further omitting the `disabled` key.

```tsx
export type TypographyBase<T extends string, P, S> = Omit<
  LayoutAndSpacersBase<T, P, S>,
  'disabled'
>;
```

## Non-Interactive Fields

`Layout & Spacers` and `Typography` are Non-interactive fields, they enhance form structure and readability without requiring user input.

### Layout & Spacers

- **Container**: Groups fields with custom styles like flex or grid layouts for organized presentation.
- **Divider**: Adds a horizontal line to visually separate sections within the form.

### Typography

- **Heading**: Supports `h1` through `h6` elements for section titles and emphasis.
- **Paragraph**: Represents a `p` element for descriptive text or instructions.

This documentation provides a comprehensive overview of the field types and their respective roles within the form renderer, ensuring clarity and ease of use for developers.
