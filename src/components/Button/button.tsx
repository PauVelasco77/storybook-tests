import {ComponentPropsWithoutRef} from "react";
import Spinner from "../../assets/icons/Spinner/spinner";
import {
  ButtonColorType,
  ButtonVariantType,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
} from "./button.types";
import cx from "classnames";
import "./button.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
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
    "label-lg",
    BUTTON_VARIANTS[variant],
    BUTTON_COLORS[color],
    className,
    {"button--loading": isLoading}
  );
  const buttonContentClassNames = cx("button__content");
  const isDisabled = disabled || isLoading;

  return (
    <button className={buttonClassNames} disabled={isDisabled} {...props}>
      {isLoading && <Spinner className='button__loader' />}
      <div className={buttonContentClassNames}>{children}</div>
    </button>
  );
}
