export const TEXT_FIELD_TYPES = {
  text: "text",
  password: "password",
  email: "email",
  number: "number",
  tel: "tel",
  url: "url",
  search: "search",
  date: "date",
  time: "time",
  "datetime-local": "datetime-local",
  month: "month",
  week: "week",
} as const;

export type TextFieldTypeType = keyof typeof TEXT_FIELD_TYPES;
