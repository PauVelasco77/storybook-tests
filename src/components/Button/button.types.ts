export const BUTTON_VARIANTS = {
  filled: "button--filled",
  outlined: "button--outlined",
  text: "button--text",
  elevated: "button--elevated",
  tonal: "button--tonal",
} as const;

export type ButtonVariantType = keyof typeof BUTTON_VARIANTS;

export const BUTTON_COLORS = {
  primary: "button--primary",
  secondary: "button--secondary",
  tertiary: "button--tertiary",
  error: "button--error",
} as const;

export type ButtonColorType = keyof typeof BUTTON_COLORS;
