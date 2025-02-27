import type {Meta, StoryObj} from "@storybook/react";

import LoginForm from "./loginForm";

const meta = {
  title: "LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onSubmitLogin: (e) => {
      e.preventDefault();
      const {emailInput, passwordInput} = e.currentTarget.elements;

      const email = emailInput.value;
      const password = passwordInput.value;
      window.alert(`Email: ${email}\nPassword: ${password}`);
    },
  },
};
