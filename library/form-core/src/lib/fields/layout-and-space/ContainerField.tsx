import {
  LayoutAndSpacersBase,
  FieldProps,
  FieldDefinition,
} from '../../types/fields';
import { FormFields } from '../../form-fields';

type ContainerFieldProps = {
  fields: FieldDefinition[];
  title?: string;
  description?: string;
};

type ContainerStyleProps = {
  container: string;
  title?: string;
  description?: string;
};

export type ContainerFieldDefinition = LayoutAndSpacersBase<
  'container',
  ContainerFieldProps,
  ContainerStyleProps
>;

type Props = FieldProps<ContainerFieldDefinition>;

const ContainerField = (props: Props) => {
  const { styles, formName, field } = props;
  const { style, fieldProps, visibility, disabled, className } = field;
  const { fields, title, description } = fieldProps || {};

  const withUpdatedDisabled = fields?.map((field) => ({
    ...field,
    disabled,
  }));

  const isStylesLoaded = Boolean(styles);

  return isStylesLoaded ? (
    <div
      style={{ display: visibility == 'hidden' ? 'none' : 'block' }}
      className={`${styles?.[style.container]} ${className}`}
    >
      {(title || description) && (
        <div>
          {title && <div className={styles?.[style.title || '']}>{title}</div>}
          {description && (
            <div className={styles?.[style.description || '']}>
              {description}
            </div>
          )}
        </div>
      )}
      {withUpdatedDisabled && (
        <FormFields
          formName={formName}
          definitions={withUpdatedDisabled}
        />
      )}
    </div>
  ) : null;
};

export default ContainerField;
