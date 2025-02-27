import {ComponentPropsWithRef, useRef, useState} from "react";
import Button from "../Button/button";
import TextField from "../TextField/textField";
import {LOGIN_FORM_FIELDS_IDS, LoginFormElement} from "./loginForm.types";
import "./loginForm.css";

interface LoginFormProps
  extends Omit<ComponentPropsWithRef<"form">, "onSubmit"> {
  onSubmitLogin: (e: React.FormEvent<LoginFormElement>) => void;
}

export default function LoginForm({onSubmitLogin, ...props}: LoginFormProps) {
  const formRef = useRef<LoginFormElement>(null);
  const [errors, setErrors] = useState({
    [LOGIN_FORM_FIELDS_IDS.email]: "",
    [LOGIN_FORM_FIELDS_IDS.password]: "",
  });

  const handleSubmit = (e: React.FormEvent<LoginFormElement>) => {
    setErrors({
      emailInput: e.currentTarget.elements.emailInput?.validationMessage,
      passwordInput: e.currentTarget.elements.passwordInput?.validationMessage,
    });

    if (e.currentTarget.checkValidity()) return onSubmitLogin(e);

    return e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      [e.target.id]: "",
    });
  };

  return (
    <form
      className='login-form'
      ref={formRef}
      role='form'
      {...props}
      onSubmit={handleSubmit}>
      <h2 className='body-lg'>Login</h2>
      <TextField
        id={LOGIN_FORM_FIELDS_IDS.email}
        label='Email'
        type='email'
        autoComplete='email'
        required
        errorText={errors.emailInput}
        onChange={handleChange}
      />
      <TextField
        id={LOGIN_FORM_FIELDS_IDS.password}
        label='Password'
        type='password'
        minLength={10}
        autoComplete='current-password'
        required
        errorText={errors.passwordInput}
        onChange={handleChange}
      />
      <Button type='submit'>Login</Button>
    </form>
  );
}
