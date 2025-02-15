import {ComponentPropsWithoutRef} from "react";
import {LABEL_SIZES, LabelSizeType} from "./label.types";
import cx from "classnames";
import "./label.css";

interface LabelProps extends ComponentPropsWithoutRef<"label"> {
  size: LabelSizeType;
}

export default function Label({
  children,
  size,
  className,
  ...props
}: LabelProps) {
  const labelClassNames = cx("label", LABEL_SIZES[size], className);

  return (
    <label className={labelClassNames} {...props}>
      {children}
    </label>
  );
}
