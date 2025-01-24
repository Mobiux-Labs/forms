import { LayoutAndSpacersBase, FieldProps } from '../../types/fields';

export type DividerFieldDefinition = Omit<
  LayoutAndSpacersBase<'divider', undefined, undefined>,
  'style'
>;

type Props = FieldProps<DividerFieldDefinition>;

const DividerField = (props: Props) => {
  const { field } = props;
  const { visibility, className } = field;

  return (
    <div
      className={className}
      style={{ display: visibility == 'hidden' ? 'none' : 'block' }}
    >
      <hr />
    </div>
  );
};

export default DividerField;
