import {fireEvent, screen} from "@testing-library/react";
import {test, expect, vi} from "vitest";
import {composeStories} from "@storybook/react";

import * as stories from "./button.stories"; // 👈 Our stories imported here.

const {Disabled} = composeStories(stories);

test("Check if the action onClick is called", async () => {
  const onClickMock = vi.fn();

  await Disabled.run({
    args: {
      onClick: onClickMock,
      children: "Submit",
      type: "button",
    },
  });
  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  expect(onClickMock).toHaveBeenCalled();
});

test("Check if the action onClick is not called", async () => {
  const onClickMock = vi.fn();

  await Disabled.run({
    args: {
      onClick: onClickMock,
      children: "Submit",
      type: "button",
      disabled: true,
    },
  });
  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  expect(onClickMock).not.toHaveBeenCalled();
});
