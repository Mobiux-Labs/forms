import { Controller, useFormContext } from 'react-hook-form';
import { errorResolver } from '../../utils';
import { FieldProps, TextareaFieldDefinition } from '../../types/fields';

const DEFAULT_VALUE = '';

const TextareaField = (props: FieldProps<TextareaFieldDefinition>) => {
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
            <textarea
              className={styles?.[style?.input]}
              id={formKey}
              onChange={({ target: { value } }) => {
                field.onChange(value);
                if (typeof onChange == 'function') onChange(value);
              }}
              value={field.value || DEFAULT_VALUE}
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

export default TextareaField;
