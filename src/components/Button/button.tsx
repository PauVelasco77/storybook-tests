import {ButtonHTMLAttributes} from "react";
import {Loader2} from "lucide-react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({
  isLoading,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button ${isLoading ? "button__loading" : ""} ${
        className || ""
      }`}
      disabled={disabled || isLoading}
      {...props}>
      {isLoading && <Loader2 className='button--loader' />}
      <span className={isLoading ? "button--hidden-content" : ""}>
        {children}
      </span>
    </button>
  );
}
