import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

/**
 * Avatar component that displays a user's profile picture or fallback initials
 */
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default avatar with image
 */
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * Avatar with fallback when image fails to load
 */
export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://broken-link.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

/**
 * Avatar with custom size (smaller)
 */
export const Small: Story = {
  render: () => (
    <Avatar className="size-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * Avatar with custom size (larger)
 */
export const Large: Story = {
  render: () => (
    <Avatar className="size-16">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * Avatar with custom background color for fallback
 */
export const CustomFallbackColor: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://broken-link.jpg" alt="User" />
      <AvatarFallback className="bg-primary text-primary-foreground">
        JD
      </AvatarFallback>
    </Avatar>
  ),
};

/**
 * Avatar with custom border
 */
export const WithBorder: Story = {
  render: () => (
    <Avatar className="border-primary border-2">
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};
