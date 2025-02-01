import "./textField.css";

export type TextFieldProps = React.ComponentPropsWithoutRef<"input">;

export default function TextField(props: TextFieldProps) {
  return <input className='text-field' {...props} />;
}
