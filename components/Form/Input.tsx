"use client";
import React, { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";
import classNames from "classnames";
import { showError, showSuccess } from "@/utils/form-helpers";
import {
  HelpIcon,
  SuccessIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
} from "@/public/SvgIcons";

// import ToolTip from '@/components/form/Tooltip';

type InputType = {
  className?: string;
  Icon?: ReactNode;
  leadingIcon?: any;
  labelClassName?: string;
  hintText?: string;
  name: string;
  placeholder?: string;
  label?: string;
  floatLabel?: boolean;
  type?:
    | "text"
    | "password"
    | "email"
    | "search"
    | "color"
    | "date"
    | "url"
    | "phone"
    | "number";

  feedBack?: string;
};
const Input = ({
  className,
  feedBack = "FEEDBACK.ALL",
  floatLabel,
  hintText,
  Icon,
  label,
  labelClassName,
  leadingIcon,
  name,
  placeholder,
  type = "text",
}: InputType) => {
  const {
    register,
    formState: { dirtyFields, errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const PasswordIcon = showPassword ? (
    <HidePasswordIcon
      width="18px"
      height="18px"
      fill="#A9ABAD"
      onClick={handleShowPassword}
    />
  ) : (
    <ShowPasswordIcon
      width="18px"
      height="18px"
      fill="#A9ABAD"
      onClick={handleShowPassword}
    />
  );
  const isPasswordField = type === "password";
  const inputIcon = isPasswordField ? PasswordIcon : Icon;

  const hasErrors = !!errors?.[name];
  const isValid = !!dirtyFields?.[name] && !hasErrors;

  return (
    <>
      {label && !floatLabel && (
        <Label
          feedBack="FEEDBACK.NONE"
          className="text-base flex items-center gap-x-2"
          name={name}
          htmlFor={name}
          text={label}
        ></Label>
      )}
      <div className="relative z-0 mb-2 w-full group">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leadingIcon}
          </div>
        )}
        <input
          placeholder={placeholder ? placeholder : label}
          type={isPasswordField ? (showPassword ? "text" : "password") : type}
          id={name}
          {...register(name)}
          className={classNames(
            "block py-3.5 px-1 w-full text-base  border-secondary-100 border rounded-md focus:outline-none focus:ring-0 peer  bg-transparent text-gray-600 transition-shadow duration-300",
            className,
            { "pl-10 pr-8": leadingIcon },
            {
              " placeholder:text-transparent focus:placeholder:text-gray-600 border-secondary-300 appearance-none bg-gray-100 text-secondary-600 focus:ring-0 peer placeholder-opacity-0":
                floatLabel && !placeholder,
            },
            {
              errorClassName: showError(hasErrors, feedBack),
            },
            {
              successClassName: showSuccess(isValid, feedBack),
            },
            {
              focusClassName: !hasErrors && !isValid,
            },
            {
              " placeHolderClassName": placeholder && !floatLabel,
            }
          )}
        />
        {floatLabel && (
          <Label
            name={name}
            feedBack={feedBack}
            htmlFor={name}
            floatLabel={floatLabel}
            text={label}
            floatLabelClass={labelClassName}
          />
        )}

        {floatLabel && (
          <div
            className={classNames(
              "absolute right-0 flex items-center inset-y-0",
              { "pr-8": hasErrors },
              { hidden: isValid },
              { "pr-3": !isValid && !hasErrors }
            )}
          >
            {hasErrors && (
              <div
                className={classNames(
                  "absolute right-0 flex items-center pointer-events-none inset-y-0 pr-3"
                )}
              >
                <HelpIcon />
              </div>
            )}
          </div>
        )}

        {isValid &&
          (feedBack === "FEEDBACK.SUCCESS" || feedBack === "FEEDBACK.ALL") && (
            <div
              className={classNames(
                "absolute right-0 flex items-center pointer-events-none inset-y-0 pr-3"
              )}
            >
              <SuccessIcon />
            </div>
          )}

        {inputIcon && !isValid && (
          <div
            className={classNames(
              "absolute inset-y-0 right-0 flex items-center cursor-pointer",
              { "pr-3": !isValid && !hasErrors },
              {
                "pr-8": hasErrors,
              }
            )}
          >
            {inputIcon}
          </div>
        )}
      </div>
      {hintText && (
        <p className="pt-1 text-sm text-secondary-700">{hintText}</p>
      )}
      <ErrorMessage name={name} />
    </>
  );
};

export default Input;
