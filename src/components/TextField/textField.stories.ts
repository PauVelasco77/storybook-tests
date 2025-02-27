import type {Meta, StoryObj} from "@storybook/react";

import TextField from "./textField";

const meta = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
    id: "name",
    errorText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque veniam, harum praesentium facere perferendis ut eveniet adipisci reiciendis sed! Ipsum dolor magnam officia consectetur quos sint quibusdam, quaerat expedita!",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    id: "password",
  },
};
