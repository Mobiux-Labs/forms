import { FieldErrors } from 'react-hook-form';

export const errorResolver = (
  errors: FieldErrors,
  path: string
): string | null => {
  if (!errors || !path) return null;

  const pathArray = path.split('.');
  let currentError: any = errors;

  for (const key of pathArray) {
    if (currentError[key]) {
      currentError = currentError[key];
    } else {
      return null;
    }
  }

  return currentError.message || null;
};
