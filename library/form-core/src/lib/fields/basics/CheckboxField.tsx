import { Controller, useFormContext } from 'react-hook-form';
import { errorResolver } from '../../utils';
import { CheckboxFieldDefinition, FieldProps } from '../../types/fields';

const CheckboxField = (props: FieldProps<CheckboxFieldDefinition>) => {
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
            style={{ display: visibility == 'hidden' ? 'none' : 'block' }}
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
              {...fieldProps}
              id={formKey}
              onChange={({ target: { checked } }) => {
                field.onChange(checked);
                if (typeof onChange == 'function') onChange(checked);
              }}
              checked={field.value}
              disabled={disabled || field.disabled}
            />
            {!!errorMessage && <label htmlFor={formKey}>{errorMessage}</label>}
          </div>
        );
      }}
    />
  ) : undefined;
};

export default CheckboxField;
