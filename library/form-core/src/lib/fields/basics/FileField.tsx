import { Controller } from 'react-hook-form';
import { errorResolver } from '../../utils';
import { FieldProps, FileFieldDefinition } from '../../types/fields';

const FileField = (props: FieldProps<FileFieldDefinition>) => {
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
              type={'file'}
              id={formKey}
              onChange={({ target: { files } }) => {
                if (!files) return;
                field.onChange(files);
                if (typeof onChange == 'function') onChange(files);
              }}
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

export default FileField;
