import {ComponentPropsWithoutRef} from "react";
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
  const baseStyles = ["button", VARIANTS[variant], COLORS[color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={baseStyles} disabled={disabled || isLoading} {...props}>
      <div className='button__content'>{children}</div>
    </button>
  );
}
