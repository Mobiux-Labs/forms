import { Controller } from 'react-hook-form';
import Select, { GroupBase, MultiValue, SingleValue } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { AsyncProps } from 'react-select/async';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import AsyncCreatableSelect from 'react-select/async-creatable';
import AsyncSelect from 'react-select/async';

import { SelectFieldDefinition } from './types';
import { errorResolver, FieldProps } from '@mobiux-labs/form-core';

// Define a type for the options used in the select components
type OptionType = {
  label: string;
  value: string;
};

// Create a union type for the props of all three components
type AdditionalField = {
  variant: 'normal' | 'async' | 'creatable' | 'async-creatable';
};

export type CustomSelectProps<
  Option = OptionType,
  IsMulti extends boolean = false | true,
  Group extends GroupBase<Option> = GroupBase<Option>
> =
  | (StateManagerProps<Option, IsMulti, Group> & AdditionalField)
  | (CreatableProps<Option, IsMulti, Group> & AdditionalField)
  | (AsyncProps<Option, IsMulti, Group> & AdditionalField);

type Props = FieldProps<SelectFieldDefinition>;

const SelectField = (props: Props) => {
  const { styles, field, methods } = props || {};
  const {
    control,
    formState: { errors },
  } = methods || { formState: {} };
  const {
    formKey,
    label,
    onChange,
    fieldProps,
    style,
    disabled,
    visibility,
    className,
    rules,
  } = field;

  const { variant, ...selectProps } = fieldProps || {};

  if (!variant) throw new Error('Variant not specified for select field');

  const isStylesLoaded = Boolean(styles);
  const errorMessage = errorResolver(errors, formKey);

  return isStylesLoaded ? (
    <Controller
      name={formKey}
      control={control}
      rules={rules}
      render={({ field }) => {
        const handleChange = (
          selection: MultiValue<OptionType> | SingleValue<OptionType>
        ) => {
          const isMultiSelect = fieldProps?.isMulti;
          let value: string | string[] | undefined;
          if (isMultiSelect) {
            value = (selection as MultiValue<OptionType>)?.map(
              ({ value }) => value
            );
          } else {
            value = (selection as SingleValue<OptionType>)?.value;
          }
          if (typeof onChange == 'function') onChange(value);
          field.onChange(value);
        };
        return (
          <div
            style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
            className={className}
          >
            {label && (
              <label
                htmlFor={formKey}
                className={styles?.[style?.label]}
              >
                {label}
              </label>
            )}
            {variant === 'normal' && (
              <Select
                {...selectProps}
                className={styles[style.select]}
                isDisabled={disabled || field.disabled}
                onChange={handleChange}
              />
            )}
            {variant === 'async' && (
              <AsyncSelect
                {...selectProps}
                className={styles[style.select]}
                isDisabled={disabled || field.disabled}
                onChange={handleChange}
              />
            )}
            {variant === 'creatable' && (
              <CreatableSelect
                {...selectProps}
                className={styles[style.select]}
                isDisabled={disabled || field.disabled}
                onChange={handleChange}
              />
            )}
            {variant === 'async-creatable' && (
              <AsyncCreatableSelect
                {...selectProps}
                className={styles[style.select]}
                isDisabled={disabled || field.disabled}
                onChange={handleChange}
              />
            )}

            {!!errorMessage && (
              <label
                htmlFor={formKey}
                className={styles?.[style.error]}
              >
                {errorMessage}
              </label>
            )}
          </div>
        );
      }}
    />
  ) : null;
};

export default SelectField;
