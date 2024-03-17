import { FormError, FormServerSideErrors } from "../components/FormError";
import { FormLabel } from "../components/FormLabel";
import { AccentColor } from "../types/types";
import { classNames } from "../utils/ClassNames";
import React, { CSSProperties, ReactComponentElement } from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

export type InputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /**
   * Component used for the label.
   *
   * Example:
   *
   * LabelComponent={<FormLabel>Name</FormLabel>}
   */
  LabelComponent?: ReactComponentElement<typeof FormLabel>;
  name: Path<TFieldValues>;
  control?: Control<TFieldValues, TName>;
  containerStyle?: CSSProperties;
  containerClasses?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  accentColor?: AccentColor;
  errors?: { [key: string]: string[] };
  showErrors?: boolean;
};

export const Input = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: InputProps<TFieldValues, TName>
) => {
  const { type = "text", ...otherProps } = props;

  if (props.control) {
    return (
      <Controller
        name={props.name}
        control={props.control}
        render={({ field, fieldState }) => {
          return (
            <Component
              field={field}
              fieldState={fieldState}
              type={type}
              {...otherProps}
            ></Component>
          );
        }}
      ></Controller>
    );
  }

  return <Component type={type} {...otherProps} />;
};

type ComponentProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = {
  field?: ControllerRenderProps<
    TFieldValues,
    (string | undefined) & Path<TFieldValues>
  >;
  fieldState?: ControllerFieldState;
} & InputProps<TFieldValues, TName>;

const Component = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: ComponentProps<TFieldValues, TName>
) => {
  const {
    field,
    fieldState,
    LabelComponent,
    containerStyle,
    containerClasses,
    iconLeft,
    iconRight,
    accentColor = "primary",
    errors,
    name,
    showErrors = true,
    ...otherProps
  } = props;
  return (
    <div
      style={containerStyle}
      className={classNames(
        "tw-flex tw-flex-1 tw-flex-col tw-gap-1",
        containerClasses ?? ""
      )}
    >
      {LabelComponent ? LabelComponent : null}
      <div
        className={`tw-border-b-2 tw-border-gray-300 tw-flex tw-items-center tw-bg-white focus-within:tw-border-b-2 focus-within:tw-border-${accentColor}-500`}
      >
        {iconLeft ? <div className="tw-pl-2">{iconLeft}</div> : null}

        <input
          {...otherProps}
          name={field?.name ?? name}
          ref={field?.ref ?? otherProps.ref}
          type={otherProps.type}
          defaultValue={
            otherProps.defaultValue || otherProps.control?._defaultValues[name]
          }
          onChange={(event) => {
            if (otherProps.value !== undefined) return;
            otherProps.onChange && otherProps.onChange(event);

            if (otherProps.type === "number") {
              field?.onChange && field?.onChange(parseInt(event.target.value));
              return;
            }

            field?.onChange && field?.onChange(event.target.value);
          }}
          onBlur={(event) => {
            field?.onBlur && field?.onBlur();
            otherProps.onBlur && otherProps.onBlur(event);
          }}
          className="tw-block tw-w-full tw-border-0 tw-border-transparent tw-bg-gray-50 focus:tw-ring-0 sm:tw-text-sm"
        />

        {iconRight}
      </div>

      {showErrors ? (
        <div className="errors">
          {fieldState?.error ? (
            <FormError message={fieldState.error.message}></FormError>
          ) : null}
          <FormServerSideErrors
            errors={errors}
            fieldKey={field?.name || name}
          ></FormServerSideErrors>
        </div>
      ) : null}
    </div>
  );
};
