export const LOGIN_FORM_FIELDS_IDS = {
  email: "emailInput",
  password: "passwordInput",
} as const;

export type LoginFormFieldsIdsType =
  (typeof LOGIN_FORM_FIELDS_IDS)[keyof typeof LOGIN_FORM_FIELDS_IDS];

interface FormElements
  extends HTMLFormControlsCollection,
    Record<LoginFormFieldsIdsType, HTMLInputElement> {}

export interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
