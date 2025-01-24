---
sidebar_label: 'Custom Field'
sidebar_position: 5
---

# Custom Field

## Key Considerations

When creating a custom field, keep the following in mind:

- **Custom Field Type**: Define a `CustomField` type extending `FieldDefinitionBase`. Use `FieldProps<CustomField>` for the props type.
- **FieldProps Overview**: `FieldProps` is a generic type that provides the necessary properties for rendering a field. It includes:

  - `field`: The field definition with type-specific data.
  - `styles`: An object containing style classes defined in `FormRenderer`.
  - `methods`: Methods returned from the `useForm` hook, facilitating form state management.
  - `formName`: The name of the form.

- **Implementation Essentials**:
  - Pass `className` to the root element.
  - Handle `visibility` and `disabled` states.
  - Apply `styles` to elements like labels, errors, and inputs.
  - Properly manage `fieldProps`.

Ensure these elements are correctly implemented for seamless integration with Mobiux Labs forms.

## Example

Below is an example of implementing a custom color field:

```tsx
import {
  errorResolver,
  FieldDefinitionBase,
  FieldProps,
} from '@mobiux-labs/form-core';
import React from 'react';

export type ColorFieldDefinition = FieldDefinitionBase<
  'color',
  string,
  React.ReactNode,
  { input: string; label: string; error: string }
>;

const CustomColorField = (props: FieldProps<ColorFieldDefinition>) => {
  const { styles, field, methods, formName } = props || {};
  const {
    formKey,
    label,
    onChange,
    fieldProps = {},
    style,
    disabled,
    visibility,
    className,
  } = field || {};

  const isStylesLoaded = !!styles;
  const errorMessage = errorResolver(methods?.formState?.errors, formKey);

  return isStylesLoaded ? (
    <div
      style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
      className={className}
    >
      <label className={styles?.[style.label]}>{label}</label>
      <input
        className={styles?.[style.input]}
        type='color'
        id={formKey}
        {...methods?.register(formKey, {
          onChange: ({ target: { value } }: any) => {
            if (typeof onChange === 'function') onChange(value);
          },
        })}
        disabled={disabled}
        {...fieldProps}
      />
      {!!errorMessage && (
        <label
          htmlFor={formKey}
          className={styles?.[style.error]}
        >
          {errorMessage}
        </label>
      )}
    </div>
  ) : null;
};

export default CustomColorField;
```

## Registering a Custom Field

### Basic Registration

To register a custom field, use `FieldRegistry.register`. Ensure registration occurs before the `FormField` component renders. It's best to place this at the top of your form component file, outside the component.

```tsx
import React from 'react';
import { FieldRegistry } from '@mobiux-labs/form-core';
import CustomColorField from './CustomColorField';

// Register your custom components here
FieldRegistry.register('color', CustomColorField);

const MyComponent = () => {
  return <FormRenderer>{/* Form content */}</FormRenderer>;
};
```

For applications with forms across multiple pages, consider registering the custom component at a higher level in your component hierarchy.

### Conditional Registration

To avoid errors from re-registering an existing field type, conditionally register the component:

```tsx
import React from 'react';
import { FieldRegistry } from '@mobiux-labs/form-core';
import CustomColorField from './CustomColorField';

const MyComponent = () => {
  if (!FieldRegistry.isRegistered('color')) {
    FieldRegistry.register('color', CustomColorField);
  }

  return <FormRenderer>{/* Form content */}</FormRenderer>;
};
```

By adhering to these guidelines, you can effectively manage custom field registration, ensuring smooth integration and avoiding potential errors.
