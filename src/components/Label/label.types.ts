export const LABEL_SIZES = {
  sm: "label--small",
  md: "label--medium",
  lg: "label--large",
} as const;

export type LabelSizeType = keyof typeof LABEL_SIZES;
