import React from 'react';
import { FieldDefinitionBase, FieldProps } from '../../types/fields';
import { errorResolver } from '../../utils';
import { Controller } from 'react-hook-form';

type RadioFieldType = {
  options: ({
    value: string;
    label: string;
  } & React.InputHTMLAttributes<HTMLInputElement>)[];
};

export type RadioFieldDefinition = FieldDefinitionBase<
  'radio', // Field type for rendering an input component
  'on' | 'off' | string, // Value type for the checkbox field
  RadioFieldType, // Props specific to an input element
  { input: string; label: string; error: string; optionLabel: string } // Style object for the input and label
>;

const DEFAULT_VALUE = '';

const RadioField = (props: FieldProps<RadioFieldDefinition>) => {
  const { styles, field, methods } = props || {};
  const {
    formState: { errors },
  } = methods || { formState: {} };
  const {
    formKey,
    label,
    onChange,
    fieldProps,
    style,
    disabled,
    visibility,
    className,
    rules,
  } = field || {};

  const { options } = fieldProps || {};

  const isStylesLoaded = Boolean(styles);
  const errorMessage = errorResolver(errors, formKey);

  return isStylesLoaded ? (
    <Controller
      name={formKey}
      control={methods.control}
      rules={rules}
      render={({ field }) => {
        return (
          <div
            style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
            className={className}
          >
            {label && <label className={styles?.[style?.label]}>{label}</label>}
            {options &&
              options?.map(
                (
                  { label: optionLabel, value, ...otherOptions },
                  key: number
                ) => {
                  const id = formKey + value;
                  return (
                    <div key={key}>
                      <input
                        className={styles?.[style?.input]}
                        type={'radio'}
                        {...otherOptions}
                        name={formKey}
                        id={id}
                        value={value || DEFAULT_VALUE}
                        onChange={({ target: { value } }) => {
                          field.onChange(value);
                          if (typeof onChange == 'function') onChange(value);
                        }}
                        disabled={disabled || field.disabled}
                      />
                      {optionLabel && (
                        <label
                          htmlFor={id}
                          className={styles?.[style?.optionLabel]}
                        >
                          {optionLabel}
                        </label>
                      )}
                    </div>
                  );
                }
              )}
            {!!errorMessage && <label htmlFor={formKey}>{errorMessage}</label>}
          </div>
        );
      }}
    />
  ) : undefined;
};

export default RadioField;
