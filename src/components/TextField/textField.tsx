import {forwardRef} from "react";
import cx from "classnames";
import "./textField.css";
import {TextFieldTypeType} from "./textField.types";

interface TextFieldProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  type: TextFieldTypeType;
  label: string;
  errorText?: string;
  hideLabel?: boolean;
  hideError?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      errorText,
      hideError = false,
      required = false,
      hideLabel = false,
      id,
      className,
      disabled,
      type,
      ...rest
    },
    ref
  ) => {
    const uniqueId = id || crypto.randomUUID();

    const textFieldClassNames = cx(
      "text-field",
      {
        "text-field--disabled": disabled,
        "text-field--error": errorText,
      },
      className
    );

    return (
      <div className={textFieldClassNames}>
        <div className='text-field__input-container'>
          <label
            className={cx("label-md", {"sr-only": hideLabel})}
            htmlFor={uniqueId}>
            {label}
            {required && <span className='text-field__required'>*</span>}
          </label>

          <input
            type={type}
            ref={ref}
            id={uniqueId}
            className='body-lg'
            aria-invalid={!!errorText}
            aria-describedby={errorText ? `${uniqueId}-description` : undefined}
            required={required}
            disabled={disabled}
            {...rest}
          />
        </div>

        {errorText && (
          <p
            id={`${uniqueId}-description`}
            className={cx("text-field__helper-text", "body-sm", {
              "text-field__helper-text--error": errorText,
              "sr-only": hideError,
            })}>
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
