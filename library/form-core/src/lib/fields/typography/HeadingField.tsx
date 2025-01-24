import { FieldProps, TypographyBase } from '../../types/fields';

type HeadingFieldProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
};

type HeadingStyleProps = {
  title: string;
};

export type HeadingFieldDefinition = TypographyBase<
  'heading',
  HeadingFieldProps,
  HeadingStyleProps
>;

type Props = FieldProps<HeadingFieldDefinition>;

const HeadingField = (props: Props) => {
  const { styles, field } = props;
  const { style, fieldProps, visibility, className } = field;
  const { variant, title } = fieldProps || {};

  const isStylesLoaded = Boolean(styles);

  const HeadingTag = variant || 'h1'; // Default to 'h1' if no variant is provided

  return isStylesLoaded ? (
    <HeadingTag
      style={{ display: visibility == 'hidden' ? 'none' : 'block' }}
      className={`${styles?.[style.title]} ${className}`}
    >
      {title}
    </HeadingTag>
  ) : null;
};

export default HeadingField;
