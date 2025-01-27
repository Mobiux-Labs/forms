---
sidebar_label: 'Architecture'
sidebar_position: 3
---

# Architecture

Mobiux Labs Form simplifies form management in React applications with three core components: `FormProvider`, `FormRenderer`, and `FormFields`. This architecture supports client-side rendering only.

## Core Components

- **FormProvider**: Manages global form state, shares `react-hook-form` methods, and applies consistent styles. Place it at the application's root.

- **FormRenderer**: Renders forms using `react-hook-form`. It identifies forms with `formName` and handles submissions with `onSubmit`. Supports custom styling.

- **FormFields**: Defines and renders fields, associating them with forms via `formName`.

### Example

```tsx
<FormProvider>
  <FormRenderer
    formName='myForm'
    onSubmit={handleSubmit}
  >
    <FormFields
      formName='myForm'
      definitions={fieldDefinitionsOne}
    />
    <FormFields
      formName='myForm'
      definitions={fieldDefinitionsTwo}
    />
    <button type='submit'> Submit </button>
  </FormRenderer>
</FormProvider>
```

## Conclusion

Mobiux Labs Form offers a streamlined, flexible approach to form management in React, leveraging React context and `react-hook-form` for efficient form creation and styling.
