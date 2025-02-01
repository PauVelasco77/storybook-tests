import type {Meta, StoryObj} from "@storybook/react";

import Typography from "./typography";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "This is an h1",
    variant: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "This is an h2",
    variant: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "This is an h3",
    variant: "h3",
  },
};

export const Body: Story = {
  args: {
    children: "This is body text",
    variant: "body",
  },
};

export const Caption: Story = {
  args: {
    children: "This is a caption",
    variant: "caption",
  },
};
