import type {Meta, StoryObj} from "@storybook/react";

import TextField from "./textField";

const meta = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    placeholder: "Enter your name",
    type: "text",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
  },
};
