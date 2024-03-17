import { classNames } from "../utils/ClassNames";
import React, { PropsWithChildren } from "react";
import { DefaultValues, FieldValues } from "react-hook-form";

export type FormProps<TFieldValues extends FieldValues> =
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > & {
    description?: string;
    defaultValues?: DefaultValues<any>;
  };

export const Form = <TFieldValues extends FieldValues>(
  props: PropsWithChildren<FormProps<TFieldValues>>
) => {
  const { title, description, onSubmit, className, children, ...otherProps } =
    props;

  return (
    <form
      className={classNames(
        "tw-space-y-8 tw-divide-y tw-divide-gray-200 tw-max-w-5xl",
        className ?? ""
      )}
      {...otherProps}
    >
      <div className="tw-space-y-8 tw-divide-y tw-divide-gray-200 tw-w-full">
        <div>
          <div>
            {title ? (
              <h3 className="tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">
                {title}
              </h3>
            ) : null}

            <p className="tw-mt-1 tw-text-sm tw-text-gray-500">{description}</p>
          </div>
          <div className="tw-mt-4 tw-flex tw-flex-col tw-gap-6">{children}</div>
        </div>
      </div>
    </form>
  );
};
