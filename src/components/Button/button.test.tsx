import {screen} from "@testing-library/react";
import {test, expect, vi, describe, beforeEach} from "vitest";
import {composeStories} from "@storybook/react";
import {userEvent} from "@testing-library/user-event";

import * as stories from "./button.stories"; // 👈 Our stories imported here.

const onClickMock = vi.fn();

const {Base, Disabled, Loading} = composeStories(stories, {
  args: {
    onClick: onClickMock,
  },
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a Button component", () => {
  // 👇 BUTTON ONCLICK
  describe("When the button is clicked", () => {
    test("Then the action onClick should be called", async () => {
      await Base.run();
      const onClick = Base.args.onClick;

      const buttonElement = screen.getByRole("button");

      await userEvent.click(buttonElement);

      expect(onClick).toHaveBeenCalled();
    });
  });

  describe("When the button is disabled and clicked", () => {
    test("Then the action onClick should not be called", async () => {
      await Disabled.run();
      const onClick = Disabled.args.onClick;

      const buttonElement = screen.getByRole("button");

      await userEvent.click(buttonElement);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe("When the button is loading and clicked", () => {
    test("Then the action onClick should not be called", async () => {
      await Loading.run();
      const onClick = Loading.args.onClick;

      const buttonElement = screen.getByRole("button");

      await userEvent.click(buttonElement);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  // 👇 BUTTON LOADING
  describe("When the button is loading", () => {
    test("Then the component should have the button--loading className", async () => {
      const expectedClassName = "button--loading";

      await Loading.run();

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  // 👇 BUTTON VARIANTS
  describe("When the button variant is filled", () => {
    test("Then the component should have the button--filled className", async () => {
      const expectedClassName = "button--filled";

      await Base.run({args: {variant: "filled"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button variant is outlined", () => {
    test("Then the component should have the button--outlined className", async () => {
      const expectedClassName = "button--outlined";

      await Base.run({args: {variant: "outlined"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button variant is text", () => {
    test("Then the component should have the button--text className", async () => {
      const expectedClassName = "button--text";

      await Base.run({args: {variant: "text"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button variant is elevated", () => {
    test("Then the component should have the button--elevated className", async () => {
      const expectedClassName = "button--elevated";

      await Base.run({args: {variant: "elevated"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button variant is tonal", () => {
    test("Then the component should have the button--tonal className", async () => {
      const expectedClassName = "button--tonal";

      await Base.run({args: {variant: "tonal"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  // 👇 BUTTON COLORS
  describe("When the button color is primary", () => {
    test("Then the component should have the button--primary className", async () => {
      const expectedClassName = "button--primary";

      await Base.run({args: {color: "primary"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button color is secondary", () => {
    test("Then the component should have the button--secondary className", async () => {
      const expectedClassName = "button--secondary";

      await Base.run({args: {color: "secondary"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the button color is tertiary", () => {
    test("Then the component should have the button--tertiary className", async () => {
      const expectedClassName = "button--tertiary";

      await Base.run({args: {color: "tertiary"}});

      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveClass(expectedClassName);
    });
  });
});
