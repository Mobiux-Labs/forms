/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrayFields from './fields/basics/ArrayFields';
import CheckboxField from './fields/basics/CheckboxField';
import FileField from './fields/basics/FileField';
import InputField from './fields/basics/InputField';
import RadioField from './fields/basics/RadioField';
import TextareaField from './fields/basics/TextareaField';
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
fieldRegistry.set('text', (props) => setupField(props, InputField));
fieldRegistry.set('password', (props) => setupField(props, InputField));
fieldRegistry.set('email', (props) => setupField(props, InputField));
fieldRegistry.set('number', (props) => setupField(props, InputField));
fieldRegistry.set('tel', (props) => setupField(props, InputField));
fieldRegistry.set('url', (props) => setupField(props, InputField));
fieldRegistry.set('search', (props) => setupField(props, InputField));
fieldRegistry.set('date', (props) => setupField(props, InputField));
fieldRegistry.set('time', (props) => setupField(props, InputField));
fieldRegistry.set('datetime-local', (props) => setupField(props, InputField));
fieldRegistry.set('month', (props) => setupField(props, InputField));
fieldRegistry.set('week', (props) => setupField(props, InputField));
fieldRegistry.set('color', (props) => setupField(props, InputField));
fieldRegistry.set('range', (props) => setupField(props, InputField));
fieldRegistry.set('hidden', (props) => setupField(props, InputField));
fieldRegistry.set('file', (props) => setupField(props, FileField));
fieldRegistry.set('textarea', (props) => setupField(props, TextareaField));
fieldRegistry.set('checkbox', (props) => setupField(props, CheckboxField));
fieldRegistry.set('radio', (props) => setupField(props, RadioField));
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

export type FieldRegistryType = {
  isRegistered: (type: string) => boolean;
  register: (
    fieldType: string,
    Component: (props: FieldProps<any>) => React.ReactNode
  ) => void;
};

export const FieldRegistry = {
  isRegistered: isFieldRegistered,
  register: registerField,
};

export default fieldRegistry;
