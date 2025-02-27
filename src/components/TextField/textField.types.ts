export const TEXT_FIELD_TYPES = {
  text: "text",
  password: "password",
  email: "email",
} as const;

export type TextFieldTypeType = keyof typeof TEXT_FIELD_TYPES;
