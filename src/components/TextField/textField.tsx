import cx from "classnames";
import "./textField.css";

export type TextFieldProps = React.ComponentPropsWithoutRef<"input">;

export default function TextField(props: TextFieldProps) {
  const textFieldClassNames = cx("text-field", "body-lg", props.className);

  return <input className={textFieldClassNames} {...props} />;
}
