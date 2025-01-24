---
sidebar_label: 'Form Provider'
sidebar_position: 1
---

# Form Provider

The `FormProvider` is a core component in Mobiux Labs Forms, managing form states, methods, and styles through a centralized React context.

## Key Responsibilities

- **Dedicated Form State**: Each form renderer has its own space for storing states and methods.
- **Global State Management**: Maintains consistent form behavior across the application.
- **Method Sharing**: Provides `react-hook-form` methods for efficient form operations.
- **Style Management**: Ensures uniform styling across forms.

## Core Functions

- **`getContext(formName: string): StateData | undefined`**: Retrieves the state and methods for a specific form.
- **`setContext(formName: string, state: StateData): void`**: Updates the state and methods for a specific form.

## Usage

Wrap `FormProvider` around your application's root to enable form state management.

### Example

```tsx
// App.tsx

import { FormProvider } from '@mobiux-labs/form-core';

function App() {
  return <FormProvider>{/* Your application components */}</FormProvider>;
}

export default App;
```

### Using getContext

Here's how you can use getContext to access a form's state and methods:

```tsx
import React from 'react';
import { useFormContext } from '@mobiux-labs/form-core';

const MyFormComponent = () => {
  const { getContext } = useFormContext();
  const formName = 'myForm';
  const formState = getContext(formName);

  const { methods, styles, formData } = formState | {};
  // Use methods, styles, and formData as needed

  return <div>Form Component</div>;
};

export default MyFormComponent;
```

## Conclusion

The `FormProvider` offers a robust solution for managing form states and methods, ensuring each form renderer has dedicated storage while maintaining global consistency.
