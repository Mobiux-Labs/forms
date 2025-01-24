---
sidebar_label: 'Quick Start Guide: Login Form'
sidebar_position: 2
---

# Quick Start Guide: Login Form

This section demonstrates a basic implementation of a login form with the following fields:

- Username
- Password

The form is designed to render text and password fields with styles, without any validation or complex functionality.

## Step 1: Set Up Context

Wrap the `FormProvider` context at the root of your application.

```tsx
// layout.tsx

<FormProvider>{children}</FormProvider>
```

## Step 2: Define Styles and Fields

Define the styles and field configurations for the form.

```tsx
const styles = {
  'input-md': 'w-full rounded-md p-2 bg-[#44444430] text-[#000000]',
  'label-sm': 'w-full pb-2 text-[#00000080]',
  'error-text': 'text-red-400 text-sm',
};

const fieldDefinitions = [
  {
    formKey: 'username',
    label: 'Username',
    type: 'text',
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
  {
    formKey: 'password',
    label: 'Password',
    type: 'password',
    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
  },
];
```

## Step 3: Render the Form

Pass the data to the components using `FormRenderer` and `FormFields`.

```tsx
<FormRenderer
  formName='myForm'
  onSubmit={handleSubmit}
  styles={styles}
>
  <FormFields
    formName='myForm'
    definitions={fieldDefinitions}
  />
</FormRenderer>
```

This setup provides a simple, styled login form without additional validation logic.
