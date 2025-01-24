import { FieldDefinitionBase } from '@mobiux-labs/form-core';
import { CustomSelectProps } from './select-field';

export type SelectFieldDefinition = FieldDefinitionBase<
  'select', // Field type for rendering a select component
  string | string[] | undefined, // Value type for the select field, allowing multiple selections
  CustomSelectProps, // Props specific to a select element
  { select: string; option: string; label: string; error: string } // Style object for the select and label
>;
