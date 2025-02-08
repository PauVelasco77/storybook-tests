import {fireEvent, screen} from "@testing-library/react";
import {test, expect, vi, describe, beforeEach} from "vitest";
import {composeStories} from "@storybook/react";

import * as stories from "./button.stories"; // 👈 Our stories imported here.

const onClickMock = vi.fn();

const {Disabled, Primary, Loading} = composeStories(stories, {
  args: {
    onClick: onClickMock,
  },
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a Button component", () => {
  describe("When the button is clicked", () => {
    test("Then the action onClick should be called", async () => {
      await Primary.run();
      const buttonElement = screen.getByRole("button");

      fireEvent.click(buttonElement);

      expect(onClickMock).toHaveBeenCalled();
    });
  });

  describe("When the button is disabled and clicked", () => {
    test("Then the action onClick should not be called", async () => {
      await Disabled.run();
      const buttonElement = screen.getByRole("button");

      fireEvent.click(buttonElement);

      expect(onClickMock).not.toHaveBeenCalled();
    });
  });

  describe("When the button is loading and clicked", () => {
    test("Then the action onClick should not be called", async () => {
      await Loading.run();
      const buttonElement = screen.getByRole("button");

      fireEvent.click(buttonElement);

      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
});
