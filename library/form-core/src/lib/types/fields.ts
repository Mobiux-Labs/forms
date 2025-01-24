import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { ContainerFieldDefinition } from '../fields/layout-and-space/ContainerField';
import { DividerFieldDefinition } from '../fields/layout-and-space/DividerField';
import { ParagraphFieldDefinition } from '../fields/typography/ParagraphField';
import { HeadingFieldDefinition } from '../fields/typography/HeadingField';
import {
  ArrayFieldProps,
  ArrayFieldStyleProps,
} from '../fields/basics/ArrayFields';

// Exporting the generic FieldDefinition type
export type FieldDefinitionBase<T extends string, V, P, S> = {
  formKey: string; // A unique identifier for registering the field with react-hook-form
  type: T; // A string that determines which component to render for this field
  style: S; // An object representing the style classes specific to the field type
  fieldProps?: P; // Props specific to the field type, such as HTML attributes
  onChange?: (value: V) => void; // A required function to handle changes, receiving the field's value
  label?: string;
  disabled?: boolean;
  visibility?: 'visible' | 'hidden';
  className?: string;
  rules?: Omit<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
};

export type LayoutAndSpacersBase<T extends string, P, S> = Omit<
  FieldDefinitionBase<T, undefined, P, S>,
  'formKey' | 'onChange' | 'label' | 'rules'
>;

export type TypographyBase<T extends string, P, S> = Omit<
  LayoutAndSpacersBase<T, P, S>,
  'disabled'
>;

// Exporting specific implementations of FieldDefinition
export type InputFieldDefinition = FieldDefinitionBase<
  'input', // Field type for rendering an input component
  string, // Value type for the input field
  React.InputHTMLAttributes<HTMLInputElement>, // Props specific to an input element
  { input: string; label: string; error: string } // Style object for the input and label
>;

export type CheckboxFieldDefinition = FieldDefinitionBase<
  'checkbox', // Field type for rendering an input component
  boolean, // Value type for the checkbox field
  React.InputHTMLAttributes<HTMLInputElement>, // Props specific to an input element
  { input: string; label: string; error: string } // Style object for the input and label
>;

export type NumberFieldDefinition = FieldDefinitionBase<
  'number', // Field type for rendering a number input component
  number, // Value type for the number field
  React.InputHTMLAttributes<HTMLInputElement>, // Props specific to an input element
  { input: string; label: string; error: string } // Style object for the input and label
>;

export type ArrayFieldDefinition = FieldDefinitionBase<
  'array', // Field type for rendering array of fields component
  undefined, // Value type for the array field
  ArrayFieldProps, // Props specific to a array element
  ArrayFieldStyleProps // Style object for the select and label
> & { fieldProps: ArrayFieldProps };

export type FieldProps<T> = {
  field: T;
  styles: { [key: string]: string };
  methods: UseFormReturn;
  formName: string;
};

type LayoutAndSpacers = ContainerFieldDefinition | DividerFieldDefinition;

type Typography = HeadingFieldDefinition | ParagraphFieldDefinition;

// Union type that can be any of the specific field definitions
export type FieldDefinition =
  | InputFieldDefinition
  | CheckboxFieldDefinition
  | NumberFieldDefinition
  | ArrayFieldDefinition
  | LayoutAndSpacers
  | Typography;
