import { FieldProps, TypographyBase } from '../../types/fields';

type ParagraphFieldProps = { content: string };

type ParagraphStyleProps = {
  content: string;
};

export type ParagraphFieldDefinition = TypographyBase<
  'paragraph',
  ParagraphFieldProps,
  ParagraphStyleProps
>;

type Props = FieldProps<ParagraphFieldDefinition>;

const ParagraphField = (props: Props) => {
  const { styles, field } = props;
  const { style, fieldProps, visibility, className } = field;

  const isStylesLoaded = Boolean(styles);

  return isStylesLoaded ? (
    <p
      style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
      className={`${styles?.[style.content]} ${className}`}
    >
      {fieldProps?.content}
    </p>
  ) : null;
};

export default ParagraphField;
