import {ComponentPropsWithoutRef} from "react";
import Spinner from "../../assets/icons/Spinner/spinner";
import cx from "classnames";
import "./button.css";
import {
  ButtonColorType,
  ButtonVariantType,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
} from "./button.types";

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
    BUTTON_VARIANTS[variant],
    BUTTON_COLORS[color],
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
