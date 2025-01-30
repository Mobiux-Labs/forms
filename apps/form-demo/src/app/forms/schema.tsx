import { ColorFieldDefinition } from './custom-fields/CustomColorField';
import React from 'react';
import { Add, Trash } from 'iconsax-react';
import { FieldDefinition, StateData } from '@mobiux-labs/form-core';
import { SelectFieldDefinition } from '@mobiux-labs/form-field-select';

type Props = StateData | undefined;

type SchemaType = (
  | FieldDefinition
  | SelectFieldDefinition
  | ColorFieldDefinition
)[];

export type ReturnType = {
  schema: SchemaType;
};

const formSchema: (prop: Props) => ReturnType = (props: Props) => {
  const { methods, formData } = props || {};

  const SELECT_FIELDS = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const schema: SchemaType = [
    {
      formKey: 'first_name',
      label: 'First Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      onChange: (value: string) => {
        const lastName = formData?.last_name || '';
        methods?.setValue('full_name', `${value} ${lastName}`);
      },
    },
    {
      formKey: 'last_name',
      label: 'Last Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      onChange: (value: string) => {
        const firstName = formData?.first_name || '';
        methods?.setValue('full_name', `${firstName} ${value}`);
      },
    },
    {
      formKey: 'full_name',
      label: 'Full Name',
      type: 'text',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
    },
    {
      formKey: 'temp_address',
      label: 'Temporary Address ',
      type: 'textarea',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      onChange: (value: string) => {
        if (formData?.same_as_temp) {
          methods?.setValue('perm_address', value);
        }
      },
    },
    {
      formKey: 'perm_address',
      label: 'Permanent Address ',
      type: 'textarea',
      style: { input: 'input-md', label: 'label-sm', error: 'error-text' },
      visibility: formData?.hide_perm_address ? 'hidden' : 'visible',
      rules: {
        required: formData?.make_perm_address_required
          ? 'This is required'
          : undefined,
        shouldUnregister: true,
      },
    },
    {
      type: 'container',
      style: {
        container: 'container-one',
        title: 'label-md',
        description: 'label-xs',
      },
      fieldProps: {
        fields: [
          {
            formKey: 'same_as_temp',
            label: 'Same as Temporary Address',
            type: 'checkbox',
            style: {
              input: 'input-checkbox',
              label: 'label-sm',
              error: 'error-text',
            },
            onChange: (value: boolean) => {
              if (value) {
                const tempAddress = methods?.getValues('temp_address');
                methods?.setValue('perm_address', tempAddress);
                methods?.setValue('hide_perm_address', false);
              }
            },
          },
          {
            formKey: 'hide_perm_address',
            label: 'Hide Permanent Address',
            type: 'checkbox',
            style: {
              input: 'input-checkbox',
              label: 'label-sm',
              error: 'error-text',
            },
            className: 'pt-2',
            onChange: (isHidden: boolean) => {
              methods?.setValue('same_as_temp', false);
              if (isHidden) {
                methods?.setValue('make_perm_address_required', false);
                methods?.unregister('perm_address');
              } else {
                methods?.register('perm_address');
                methods?.setValue('perm_address', '');
                methods?.clearErrors('perm_address');
              }
            },
          },
          {
            formKey: 'make_perm_address_required',
            label: 'Make Permanent Address Required',
            type: 'checkbox',
            style: {
              input: 'input-checkbox',
              label: 'label-sm',
              error: 'error-text',
            },
            className: 'pt-2',
            onChange: (makeRequired: boolean) => {
              if (makeRequired) {
                methods?.setValue('hide_perm_address', false);
              } else methods?.clearErrors('perm_address');
            },
          },
        ],
      },
    },
    {
      formKey: 'subscription',
      label: 'Subscription',
      type: 'radio',
      style: {
        input: 'input-checkbox',
        label: 'label-sm',
        error: 'error-text',
        optionLabel: 'label-xs',
      },
      fieldProps: {
        options: [
          {
            value: 'basic',
            label: 'Basic',
          },
          {
            value: 'standard',
            label: 'Standard',
          },
          {
            value: 'premium',
            label: 'Premium',
          },
        ],
      },
      className: 'pt-2',
    },
    {
      type: 'divider',
      className: 'my-2',
    },
    {
      formKey: 'color',
      label: 'Pick Color (Custom field)',
      type: 'custom_color',
      style: { input: 'input-color', label: 'label-sm', error: 'error-text' },
    },
    {
      type: 'divider',
      className: 'my-2',
    },
    {
      type: 'heading',
      fieldProps: {
        variant: 'h2',
        title: 'Select Field',
      },
      className: 'text-bold !pb-0',
      style: {
        title: 'label-sm',
      },
    },
    {
      type: 'paragraph',
      fieldProps: {
        content: 'Select uses react-select npm library',
      },
      className: 'text-bold !pb-0',
      style: {
        content: 'label-xs',
      },
    },
    {
      formKey: 'category',
      type: 'select',
      style: {
        select: 'select',
        option: 'select-option',
        label: 'label-sm',
        error: 'error-text',
      },
      fieldProps: {
        variant: 'async-creatable',
        isMulti: true,
        defaultOptions: SELECT_FIELDS,
        loadOptions: async function (value: string) {
          // Api call and return data, mostly for search feature
          return SELECT_FIELDS.filter((field) => field.label.includes(value));
        },
        onCreateOption: async (value: string) => {
          // console.log('create one with', value);
        },
      },
      className: 'pt-2',
      onChange: (value: string | string[] | undefined) => {
        // console.log('on change =>', value);
      },
    },
    {
      type: 'heading',
      fieldProps: {
        variant: 'h2',
        title: 'Array Field',
      },
      className: 'text-bold !pb-0',
      style: {
        title: 'label-sm',
      },
    },
    {
      type: 'paragraph',
      fieldProps: {
        content: 'Array field uses useFieldArray hook of react-hook-form',
      },
      className: 'text-bold !pb-0',
      style: {
        content: 'label-xs',
      },
    },
    {
      formKey: 'members',
      type: 'array',
      style: {
        container: 'array-container',
        label: 'label-sm',
        error: 'error-text',
        addBtn: 'array-add-btn',
        removeBtn: 'array-remove-btn',
        title: 'array-title',
        header: 'array-header',
      },
      className: 'mt-2 p-3 border border-[#00000030] rounded-md',
      fieldProps: {
        title: 'Memeber',
        renderAddButton: (
          <div className='flex justify-center items-center'>
            <Add size={18} /> Add
          </div>
        ),
        renderRemoveButton: <Trash size={18} />,
        fields: [
          {
            type: 'text',
            formKey: 'name',
            label: 'Name',
            className: 'mt-1',
            rules: { required: 'This is required' },
            style: {
              input: 'input-md',
              label: 'label-sm',
              error: 'error-text',
            },
          },
          {
            type: 'email',
            formKey: 'email',
            label: 'Email',
            className: 'mt-1',
            style: {
              input: 'input-md',
              label: 'label-sm',
              error: 'error-text',
            },
          },

          {
            formKey: 'password',
            label: 'Password',
            type: 'password',
            style: {
              input: 'input-md',
              label: 'label-sm',
              error: 'error-text',
            },
          },
        ],
      },
    },
  ];
  return {
    schema,
  };
};

export default formSchema;
