/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrayFields from './fields/basics/ArrayFields';
import CheckboxField from './fields/basics/CheckboxField';
import InputField from './fields/basics/InputField';
import ContainerField from './fields/layout-and-space/ContainerField';
import DividerField from './fields/layout-and-space/DividerField';
import HeadingField from './fields/typography/HeadingField';
import ParagraphField from './fields/typography/ParagraphField';
import { FieldDefinition, FieldProps } from './types/fields';

const fieldRegistry = new Map<string, React.ComponentType<any>>();

const setupField = (props: FieldProps<FieldDefinition>, Component: any) => {
  const { styles, methods, field, formName } = props;
  return (
    <Component
      field={field}
      styles={styles}
      methods={methods}
      formName={formName}
    />
  );
};

// Register components for specific field types
fieldRegistry.set('input', (props) => setupField(props, InputField));
fieldRegistry.set('checkbox', (props) => setupField(props, CheckboxField));
fieldRegistry.set('array', (props) => setupField(props, ArrayFields));

// Layout, spacers and typography components
fieldRegistry.set('container', (props) => setupField(props, ContainerField));
fieldRegistry.set('divider', (props) => setupField(props, DividerField));
fieldRegistry.set('paragraph', (props) => setupField(props, ParagraphField));
fieldRegistry.set('heading', (props) => setupField(props, HeadingField));

const registerField = (
  fieldType: string,
  Component: (props: FieldProps<any>) => React.ReactNode
) => {
  if (fieldType && Component) {
    if (!fieldRegistry.get(fieldType)) {
      fieldRegistry.set(fieldType, (props) => setupField(props, Component));
    } else {
      throw new Error(
        `Already registered the form field called '${fieldType}'`
      );
    }
  } else {
    throw new Error('Got invalid component');
  }
};

const isFieldRegistered = (fieldType: string) => {
  return !!fieldRegistry.get(fieldType);
};

export const FieldRegistry = {
  isRegistered: isFieldRegistered,
  register: registerField,
};

export default fieldRegistry;
