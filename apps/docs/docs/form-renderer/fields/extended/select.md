---
sidebar_label: 'Select'
sidebar_position: 2
---

# Select Field

The Select Field component is a versatile field type for rendering dropdowns in forms. It leverages the `react-select` library to provide a rich set of features, including support for asynchronous loading, creatable options, and more.

## Installation

To use the form rendering library with the select field component, you need to install the specific npm package. Run the following command to install the select field package:

```bash
npm install @mobiux-labs/form-field-select
```

## Setup

To set up the select field component in your React application, follow these steps:

1. **Initialize the SelectField**: Import the `SelectField` from the package and call the `init` function to initialize it in your application. It's recommended to place this initialization outside of any component, preferably at the top level of your component hierarchy, such as in your main application file.

   ```tsx
   import SelectField from '@mobiux-labs/form-field-select';

   // Initialize the SelectField component
   SelectField.init();
   ```

By placing the initialization at the top level, you ensure that the SelectField is properly set up before any components that use it are rendered.

## Dependencies

The Select Field relies on the following libraries:

- `react-select`: A flexible and customizable select input control for React.
- `@mobiux-labs/form-core`: The core library that provides essential form functionalities.

Ensure these dependencies are installed in your project to use the Select Field component.

## Features

- **Normal select**: Standard dropdown selection.
- **Async select**: Load options asynchronously.
- **Creatable select**: Allow users to create new options.
- **Async-creatable select**: Combine asynchronous loading with creatable options.
- **Multi-select support**: Select multiple options.
- **Custom styling**: Apply custom styles to the select component.

## Usage

To use the Select Field, define the field in your form configuration with the desired variant and options.

### Field Definitions

#### Normal Select

```tsx
{
  "formKey": "category",
  "type": "select",
  "style": {
    "select": "select",
    "option": "select-option",
    "label": "label-sm",
    "error": "error-text"
  },
  "fieldProps": {
    "variant": "normal",
    "options": [
      { "value": "chocolate", "label": "Chocolate" },
      { "value": "strawberry", "label": "Strawberry" },
      { "value": "vanilla", "label": "Vanilla" }
    ],
  },
  "className": "pt-2", // Optional
  "onChange": (value) => {} // Optional
}
```

#### Async Select

```tsx
{
  "formKey": "category",
  "type": "select",
  "style": {
    "select": "select",
    "option": "select-option",
    "label": "label-sm",
    "error": "error-text"
  },
  "fieldProps": {
    "variant": "async",
    "defaultOptions": [
      { "value": "chocolate", "label": "Chocolate" },
      { "value": "strawberry", "label": "Strawberry" },
      { "value": "vanilla", "label": "Vanilla" }
    ]
    "loadOptions": async (value: string) => {
      // Api call and return data, mostly for search feature
      // console.log('value', value);
      return []; // return list of { "value": "", "label": "" }
    },
  },
  "className": "pt-2", // Optional
  "onChange": (value) => {} // Optional
}
```

#### Creatable Select

```tsx
{
  "formKey": "category",
  "type": "select",
  "style": {
    "select": "select",
    "option": "select-option",
    "label": "label-sm",
    "error": "error-text"
  },
  "fieldProps": {
    "variant": "creatable",
    "options": [
      { "value": "chocolate", "label": "Chocolate" },
      { "value": "strawberry", "label": "Strawberry" },
      { "value": "vanilla", "label": "Vanilla" }
    ],
    "onCreateOption": async (value: string) => {
      // console.log('create one with', value);
    },
  },
  "className": "pt-2", // Optional
  "onChange": (value) => {} // Optional
}
```

#### Async-Creatable Select

```tsx
{
  "formKey": "category",
  "type": "select",
  "style": {
    "select": "select",
    "option": "select-option",
    "label": "label-sm",
    "error": "error-text"
  },
  "fieldProps": {
    "variant": "async-creatable",
    "isMulti": true, // Optional
    "defaultOptions": [
      { "value": "chocolate", "label": "Chocolate" },
      { "value": "strawberry", "label": "Strawberry" },
      { "value": "vanilla", "label": "Vanilla" }
    ],
    "loadOptions": async (value: string) => {
      // Api call and return data, mostly for search feature
      // console.log('value', value);
      return []; // return list of { "value": "", "label": "" }
    },
    "onCreateOption": async (value: string) => {
      // console.log('create one with', value);
    },
  },
  "className": "pt-2", // Optional
  "onChange": (value) => {} // Optional
}
```

## Type

To use the Select Field type definition in your application, you need to import the `SelectFieldDefinition` from the `@mobiux-labs/form-field-select` package. This import statement allows you to define the structure and properties of a Select Field within your form schemas.

```typescript
import SelectFieldDefinition from '@mobiux-labs/form-field-select';
```

```typescript
const schema: (FieldDefinition | SelectFieldDefinition)[] = [...];
```

By using the Select Field, you can enhance your forms with powerful dropdown capabilities, tailored to your application's needs.
