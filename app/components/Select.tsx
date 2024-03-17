import { FormError, FormServerSideErrors } from "../components/FormError";
import { FormLabel } from "../components/FormLabel";
import { classNames } from "../utils/ClassNames";
import { SelectBox, TagBox } from "devextreme-react";
import { ISelectBoxOptions } from "devextreme-react/select-box";
import { ITagBoxOptions } from "devextreme-react/tag-box";
import ArrayStore from "devextreme/data/array_store";
import React, { CSSProperties, ReactComponentElement } from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

type SelectBoxOptions = { multiple?: false } & ISelectBoxOptions;
type TagBoxOptions = { multiple: true } & ITagBoxOptions;

export type SelectProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = (SelectBoxOptions | TagBoxOptions) & {
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
  accentColor?: string;
  errors?: { [key: string]: string[] };
  showErrors?: boolean;
};

export const Select = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: SelectProps<TFieldValues, TName>
) => {
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
              {...props}
            ></Component>
          );
        }}
      ></Controller>
    );
  }

  return <Component {...props} />;
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
} & SelectProps<TFieldValues, TName>;

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
    name,
    control,
    containerClasses,
    containerStyle,
    searchEnabled = true,
    items,
    accentColor = "primary",
    errors,
    showErrors = true,
    ...otherProps
  } = props;

  const data = new ArrayStore({
    data: props.items,
    key: "id",
  });

  return (
    <div
      style={{ flex: 1, ...containerStyle }}
      className={classNames(
        `tw-flex tw-flex-col tw-gap-1 tw-border-t-transparent tw-border-l-transparent tw-border-r-transparent tw-border-b-solid tw-border-b-2 focus-within:tw-border-${accentColor}-500 tw-border-b-gray-300`,
        containerClasses ?? ""
      )}
    >
      {LabelComponent ? LabelComponent : null}
      {props.multiple !== true ? (
        <SelectBox
          searchEnabled={searchEnabled}
          dataSource={data}
          displayExpr="text"
          valueExpr="value"
          value={field?.value}
          {...(otherProps as ISelectBoxOptions)}
          onValueChange={(id: string) => {
            field?.onChange(id);
            props.onValueChange && props.onValueChange(id);
          }}
        ></SelectBox>
      ) : (
        <TagBox
          name={name}
          searchEnabled={searchEnabled}
          dataSource={data}
          displayExpr="text"
          valueExpr="value"
          value={field?.value}
          {...(otherProps as ITagBoxOptions)}
          onValueChange={(ids: string[]) => {
            field?.onChange(ids);
            props.onValueChange && props.onValueChange(ids);
          }}
        ></TagBox>
      )}
      {showErrors ? (
        <div className="errors">
          {fieldState?.error ? (
            <FormError message={fieldState.error.message}></FormError>
          ) : null}
          <FormServerSideErrors
            errors={errors}
            fieldKey={field?.name ?? name}
          ></FormServerSideErrors>
        </div>
      ) : null}
    </div>
  );
};
