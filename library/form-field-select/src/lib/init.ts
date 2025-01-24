import { FieldRegistry } from '@mobiux-labs/form-core';
import SelectField from './renderer-select';

export const initialize = () => {
  if (!FieldRegistry.isRegistered('select')) {
    FieldRegistry.register('select', SelectField);
  }
};
