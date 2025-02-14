import {ComponentPropsWithoutRef} from "react";
import Spinner from "../../assets/icons/Spinner/spinner";
import cx from "classnames";
import "./button.css";

// Define button variants and their corresponding styles
const VARIANTS = {
  filled: "button--filled",
  outlined: "button--outlined",
  text: "button--text",
  elevated: "button--elevated",
  tonal: "button--tonal",
} as const;

type ButtonVariant = keyof typeof VARIANTS;

const COLORS = {
  primary: "button--primary",
  secondary: "button--secondary",
  tertiary: "button--tertiary",
  error: "button--error",
} as const;

type ButtonColors = keyof typeof COLORS;

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColors;
}

export default function Button({
  isLoading = false,
  children,
  className = "",
  disabled,
  variant = "filled",
  color = "primary",
  ...props
}: ButtonProps) {
  const buttonClassNames = cx(
    "button",
    VARIANTS[variant],
    COLORS[color],
    className
  );
  const buttonContentClassNames = cx("button__content", {
    "button__content--loading": isLoading,
  });

  return (
    <button className={buttonClassNames} disabled={disabled} {...props}>
      {isLoading && <Spinner className='button__loader' />}
      <div className={buttonContentClassNames}>{children}</div>
    </button>
  );
}
