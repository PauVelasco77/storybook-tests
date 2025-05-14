import { screen } from '@testing-library/react';
import { test, expect, vi, describe } from 'vitest';
import { composeStories } from '@storybook/react';
import { userEvent } from '@testing-library/user-event';

import * as stories from './button.stories';

const onClickMock = vi.fn();

const { Default, Disabled } = composeStories(stories, {
  args: {
    onClick: onClickMock,
  },
  beforeEach: () => {
    vi.clearAllMocks();
  },
});

describe('Given a Button component', () => {
  describe('When the button is clicked', () => {
    test('Then the action onClick should be called', async () => {
      await Default.run();
      const onClick = Default.args.onClick;

      const buttonElement = screen.getByRole('button');

      await userEvent.click(buttonElement);

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('When the button is disabled and clicked', () => {
    test('Then the action onClick should not be called', async () => {
      await Disabled.run();
      const onClick = Disabled.args.onClick;

      const buttonElement = screen.getByRole('button');

      await userEvent.click(buttonElement);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('When the button is disabled', () => {
    test('Then the component should have the disabled attribute', async () => {
      await Disabled.run();
      const buttonElement = screen.getByRole('button');

      expect(buttonElement).toBeDisabled();
      expect(buttonElement.className).toContain('disabled:opacity-50');
    });
  });

  describe('When the button receives a text as children prop', () => {
    test('Then the button should render the children prop', async () => {
      await Default.run();
      const buttonElement = screen.getByRole('button');

      const children = screen.getByText(Default.args.children as string);

      expect(buttonElement).toBeInTheDocument();
      expect(children).toBeInTheDocument();
    });
  });
});
