import React from 'react';
import { useFieldArray } from 'react-hook-form';
import {
  ArrayFieldDefinition,
  FieldDefinition,
  FieldProps,
} from '../../types/fields';
import { FormFields } from '../../form-fields';

export type ArrayFieldStyleProps = {
  container: string;
  addBtn: string;
  removeBtn: string;
  title: string;
  label: string;
  error: string;
  header?: string;
};

export type ArrayFieldProps = {
  fields: FieldDefinition[];
  title?: string;
  renderAddButton?: React.ReactNode;
  renderRemoveButton?: React.ReactNode;
};

const ArrayFields = (props: FieldProps<ArrayFieldDefinition>) => {
  const { styles, field, methods, formName } = props || {};
  const {
    control,
    formState: { errors },
  } = methods || { formState: {} };
  const { formKey, label, fieldProps, style, disabled, visibility, className } =
    field || {};

  const {
    fields,
    title,
    renderAddButton = '+',
    renderRemoveButton = '-',
  } = fieldProps;

  const isStylesLoaded = Boolean(styles);
  const error = errors?.[formKey];

  const array = useFieldArray({ control, name: formKey });

  return isStylesLoaded ? (
    <div
      className={className}
      style={{ display: visibility === 'hidden' ? 'none' : 'block' }}
    >
      {label && (
        <label
          htmlFor={formKey}
          className={styles?.[style?.label]}
        >
          {label}
        </label>
      )}

      <div className={styles?.[style?.container]}>
        {Array.isArray(array.fields) &&
          array.fields?.map((field: Record<'id', string>, index: number) => {
            const withArrayKeys = fields?.map((field: FieldDefinition) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const fieldFormKey = (field as any).formKey;
              if (!fieldFormKey) return { ...field, disabled };
              return {
                ...field,
                formKey: `${formKey}.${index}.${fieldFormKey}`,
                disabled,
              };
            });
            return (
              <div key={field.id}>
                <div className={styles?.[style.header || '']}>
                  <span className={styles?.[style.title]}>
                    {title} {index + 1}
                  </span>
                  <button
                    className={styles?.[style.removeBtn]}
                    type='button'
                    disabled={disabled}
                    onClick={() => array.remove(index)}
                  >
                    {renderRemoveButton}
                  </button>
                </div>
                <FormFields
                  formName={formName}
                  definitions={withArrayKeys}
                />
              </div>
            );
          })}
      </div>
      <button
        className={styles?.[style.addBtn]}
        type='button'
        disabled={disabled}
        onClick={() => array.append({})}
      >
        {renderAddButton}
      </button>

      {!!error && (
        <label
          htmlFor={formKey}
          className={styles?.[style.error]}
        >
          {error?.message?.toString()}
        </label>
      )}
    </div>
  ) : null;
};

export default ArrayFields;
