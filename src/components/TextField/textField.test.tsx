import {screen} from "@testing-library/react";
import {it, expect} from "vitest";
import {composeStories} from "@storybook/react";
import userEvent from "@testing-library/user-event";

import * as stories from "./textField.stories"; // 👈 Our stories imported here.

const {Text} = composeStories(stories);

it("Check if the typed text is shown", async () => {
  const placeholder = "Enter your name";
  const text = "Hello, World!";

  await Text.run({
    args: {
      placeholder,
      type: "text",
    },
  });

  const inputElement = screen.getByRole("textbox");

  await userEvent.type(inputElement, text);

  expect(inputElement).toHaveValue(text);
});
