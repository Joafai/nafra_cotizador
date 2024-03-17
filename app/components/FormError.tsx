import React from "react";

export type FormErrorProps = {
  message?: string;
};

export const FormError = (props: FormErrorProps) => {
  if (!props.message) return null;

  return (
    <p className="tw-mt-2 tw-bg-red-100 tw-font-semibold tw-text-red-700 tw-text-sm tw-px-4 tw-py-2 tw-border-l-4 tw-border-red-700">
      {props.message}
    </p>
  );
};

export type FormServerSideErrorsProps = {
  errors?: { [key: string]: string[] | string };
  fieldKey?: string;
};

export const FormServerSideErrors: React.FC<FormServerSideErrorsProps> = (
  props
) => {
  const { errors, fieldKey } = props;

  if (!errors || fieldKey === undefined) return null;

  const lowercasedKey = fieldKey.toLowerCase();
  if (!errors[lowercasedKey]) return null;

  if (typeof errors[lowercasedKey] === "string")
    return (
      <FormError
        key={fieldKey}
        message={errors[lowercasedKey] as string}
      ></FormError>
    );

  return (
    <>
      {(errors[lowercasedKey] as string[]).map((error, index) => (
        <FormError key={`${fieldKey}-${index}`} message={error}></FormError>
      ))}
    </>
  );
};
