import { FieldRegistryType } from '@mobiux-labs/form-core';
import SelectField from './select-field';

export const initialize = (fieldRegistry: FieldRegistryType) => {
  if (!fieldRegistry.isRegistered('select')) {
    fieldRegistry.register('select', SelectField);
  }
};
