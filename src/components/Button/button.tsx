import "./button.css";

export type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  return <button className='button' {...props} />;
}
