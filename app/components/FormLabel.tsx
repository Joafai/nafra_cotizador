import React from "react";

export type FormLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  required?: boolean;
};

export const FormLabel = (props: FormLabelProps) => {
  const { required } = props;
  return (
    <label
      className="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
      {...props}
    >
      {props.children}
      {required ? <span className="tw-text-red-500"> (*)</span> : null}
    </label>
  );
};
