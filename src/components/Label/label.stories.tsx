import type {Meta, StoryObj} from "@storybook/react";

import Label from "./label";

const meta = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {type: "radio"},
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: "I am a small label",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "I am a medium label",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "I am a large label",
    size: "lg",
  },
};
