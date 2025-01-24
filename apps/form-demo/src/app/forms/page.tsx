'use client';
import React from 'react';
import formSchema, { ReturnType } from './schema';
import {
  FieldRegistry,
  FormRenderer,
  FormFields,
  useFormContext,
} from '@mobiux-labs/form-core';
import CustomColorField from './custom-fields/CustomColorField';
import SelectField from '@mobiux-labs/form-field-select';

// Initialize the SelectField component
SelectField.init(FieldRegistry);

FieldRegistry.register('color', CustomColorField);

const FormsPage = () => {
  const FORM_NAME = 'demo_form';
  const { getContext } = useFormContext();
  const formState = getContext(FORM_NAME);

  const formData: ReturnType = formSchema(formState);

  const [submitData, setSubmitData] = React.useState(null);

  const handleSubmit = (data: any) => {
    setSubmitData(data);
  };

  return (
    <div className='py-10 px-5 w-full max-w-4xl mx-auto '>
      <h1 className='text-4xl text-semibold'>Form Demo</h1>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2'>
        <FormRenderer
          formName={FORM_NAME}
          onSubmit={handleSubmit}
          styles={{
            'input-md': `w-full rounded-md p-2 bg-[#44444430] text-[#000000]`,
            'input-checkbox': 'ml-2',
            'input-color': 'ml-2',
            'label-xs': 'w-full pb-4 text-xs text-[#00000080]',
            'label-md': 'w-full pb-3 text-md text-[#00000080]',
            'label-sm': 'w-full pb-2 text-[#00000080]',
            'error-text': 'text-red-400 text-sm',
            select: `w-full rounded-md bg-[#44444430] text-[#000000]`,
            'select-option': 'bg-red-400',
            'array-title': 'font-bold text-[#00000080]',
            'array-container': 'grid grid-cols-1 gap-5',
            'array-add-btn':
              'mt-2 px-2 py-1 border border-[#00000035] block text-sm rounded-md ml-auto',
            'array-remove-btn':
              'ml-2 px-2 py-1 text-red-600 rounded-md text-md',
            'array-header': 'flex justify-between items-center mb-3',
            'container-one': 'rounded-md p-3 border border-[#00000050]',
          }}
          className='flex flex-col gap-2'
          defaultValues={
            {
              first_name: 'John',
              members: [{}],
            } as any
          }
        >
          <FormFields
            formName={FORM_NAME}
            definitions={formData.schema}
          />

          <button
            className='w-full py-2 px-4 bg-green-700 text-white rounded-md'
            type='submit'
          >
            Submit
          </button>
          <button
            className='w-full py-2 px-4 border border-green-700 rounded-md'
            type='reset'
            onClick={() => {
              formState?.methods?.reset();
              setSubmitData(null);
            }}
          >
            Reset
          </button>
        </FormRenderer>
        <div className='p-5 w-full max-w-md mx-auto'>
          <div className='sticky top-5 left-0'>
            <div>
              <h4 className='w-full mb-2 px-3 py-1 bg-slate-200'>
                {' '}
                State data{' '}
              </h4>
              {formState?.formData && (
                <pre>{JSON.stringify(formState?.formData, null, 2)}</pre>
              )}
            </div>

            {submitData && (
              <div className='mt-5'>
                <h4 className='w-full mb-2 px-3 py-1 bg-green-200'>
                  Submited data
                </h4>
                <pre>{JSON.stringify(submitData, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;
