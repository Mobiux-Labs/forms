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
  const { styles, field, methods } = props || {};

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
      style={{ display: visibility == 'hidden' ? 'none' : 'block' }}
      className={className}
    >
      {/* Label */}
      <label className={styles?.[style.label]}>{label}</label>

      {/* Field Component */}
      <input
        className={styles?.[style.input]}
        type='color'
        id={formKey}
        {...methods?.register(formKey, {
          onChange: ({ target: { value } }) => {
            if (typeof onChange == 'function') onChange(value);
          },
        })}
        disabled={disabled || field.disabled}
        {...fieldProps}
      />

      {/* Error message */}
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
