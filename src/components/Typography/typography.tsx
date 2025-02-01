import "./typography.css";

type VariantMapping = {
  h1: "h1";
  h2: "h2";
  h3: "h3";
  body: "p";
  caption: "p";
};

const VARIANT_ELEMENT_MAP: VariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  caption: "p",
};

type TypographyVariant = keyof typeof VARIANT_ELEMENT_MAP;
type TypographyColor = "base" | "textOnPrimary";

export type TypographyProps = Omit<
  React.ComponentPropsWithoutRef<"p">,
  "color"
> & {
  variant?: TypographyVariant;
  color?: TypographyColor;
  children: React.ReactNode;
};

export default function Typography({
  variant = "body",
  color = "base",
  className = "",
  children,
  ...rest
}: TypographyProps) {
  const Component = VARIANT_ELEMENT_MAP[variant];

  const baseStyles = "typography";
  const variantStyles = {
    h1: "typography-h1",
    h2: "typography-h2",
    h3: "typography-h3",
    body: "typography-body",
    caption: "typography-caption",
  }[variant];

  const colorStyles = {
    base: "typography-base-color",
    textOnPrimary: "typography-on-primary-color",
  }[color];

  const combinedClassNames =
    `${baseStyles} ${variantStyles} ${colorStyles} ${className}`.trim();

  return (
    <Component className={combinedClassNames} {...rest}>
      {children}
    </Component>
  );
}
