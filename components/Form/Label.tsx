import React from "react";
import { useFormContext } from "react-hook-form";
import classNames from "classnames";
import { showError, showSuccess } from "@/utils/form-helpers";

type LabelType = {
  checked?: boolean;
  children?: any;
  className?: string;
  feedBack?: string;
  floatLabel?: boolean;
  floatLabelClass?: string;
  htmlFor: string;
  name: string;
  text?: string;
};

export function Label({
  checked,
  children,
  className = "text-xs",
  feedBack = "FEEDBACK.ALL",
  floatLabel,
  floatLabelClass = "bg-gray-100 text-gray-600 peer-focus:bg-gray-100 peer-focus:text-gray-600 -translate-y-7 peer-focus:-translate-y-7",
  htmlFor,
  name,
  text,
}: LabelType) {
  const {
    formState: { dirtyFields, errors },
  } = useFormContext();

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <label
      htmlFor={htmlFor || name}
      className={classNames(
        {
          "absolute text-sm text-gray-600 duration-300 transform p-2 scale-75 top-2 left-2 z-10 origin-[0] peer-focus:left-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75":
            floatLabel,
        },
        { "pointer-events-none": checked },
        {
          "block mb-1.5 cursor-pointer text-secondary-700 font-normal ":
            !floatLabel,
        },
        { [className]: !floatLabel },
        { [floatLabelClass]: floatLabel },
        { "text-success-600": showSuccess(isValid, feedBack) },
        { "text-secondary-400": !hasErrors && !isValid },
        { "text-danger-500": showError(hasErrors, feedBack) }
      )}
    >
      {text}
      {children}
    </label>
  );
}

type HelperLabelType = {
  checked?: boolean;

  helperLabelClassName?: string;
  htmlFor: string;
  name: string;
  text?: string;
  title?: string;
};

export const HelperLabel = ({
  checked,
  helperLabelClassName,
  htmlFor,
  name,
  text,
  title,
}: HelperLabelType) => {
  return (
    <div className="ml-2 pt-2 text-sm font-Inter">
      {title && (
        <label
          htmlFor={htmlFor || name}
          className={classNames(
            "font-semibold text-secondary-800 ",
            { "pointer-events-none": checked },
            helperLabelClassName
          )}
        >
          {title}
        </label>
      )}
      {text && (
        <p
          id={htmlFor || name}
          className="text-xs font-normal text-secondary-600 "
        >
          {text}
        </p>
      )}
    </div>
  );
};
