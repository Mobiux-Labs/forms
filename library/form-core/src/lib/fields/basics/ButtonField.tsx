import { visibilityResolver } from '../../utils';
import { ButtonFieldDefinition, FieldProps } from '../../types/fields';

const ButtonField = (props: FieldProps<ButtonFieldDefinition>) => {
  const { styles, field, formName } = props || {};
  const { type, visibility, style, disabled, label, className, fieldProps } =
    field || {};

  const isStylesLoaded = Boolean(styles);
  const { style: fieldStyle, ...otherFieldProps } = fieldProps || {};

  return isStylesLoaded ? (
    <button
      type={type}
      form={formName}
      className={`${styles?.[style?.button || '']} ${className}`}
      style={{ ...fieldStyle, ...visibilityResolver(visibility) }}
      disabled={disabled}
      {...otherFieldProps}
    >
      {label}
    </button>
  ) : undefined;
};

export default ButtonField;
