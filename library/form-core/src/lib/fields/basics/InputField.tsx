import { Controller, useFormContext } from 'react-hook-form';
import { errorResolver } from '../../utils';
import { FieldProps, InputFieldDefinition } from '../../types/fields';

export type InputFieldTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'range'
  | 'hidden';

const InputField = (props: FieldProps<InputFieldDefinition>) => {
  const { styles, field, methods } = props || {};
  const {
    formState: { errors },
  } = methods || { formState: {} };
  const {
    formKey,
    label,
    onChange,
    type,
    fieldProps,
    style,
    disabled,
    visibility,
    className,
    rules,
  } = field || {};
  const { control } = useFormContext();

  const isStylesLoaded = Boolean(styles);
  const errorMessage = errorResolver(errors, formKey);

  return isStylesLoaded ? (
    <Controller
      name={formKey}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <div
            style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
            className={className}
          >
            {label && (
              <label
                htmlFor={formKey}
                className={styles?.[style?.label]}
              >
                {label}
              </label>
            )}
            <input
              className={styles?.[style?.input]}
              type={type}
              id={formKey}
              onChange={({ target: { value } }) => {
                field.onChange(value);
                if (typeof onChange == 'function') onChange(value);
              }}
              value={field.value}
              disabled={disabled || field.disabled}
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
        );
      }}
    />
  ) : undefined;
};

export default InputField;
