import {screen} from "@testing-library/react";
import {expect, describe, test} from "vitest";
import {composeStories} from "@storybook/react";
import {userEvent} from "@testing-library/user-event";

import * as stories from "./textField.stories";
import {TEXT_FIELD_TYPES} from "./textField.types";

const {Text, Password} = composeStories(stories);

describe("Given a TextField component", () => {
  describe("When the user types something in the text input", () => {
    test("Then the input should render the text", async () => {
      const expectedText = "Hello, World!";
      const placeholder = Text.args.placeholder!;

      await Text.run();
      const inputElement = screen.getByPlaceholderText(placeholder);

      await userEvent.type(inputElement, expectedText);

      expect(inputElement).toHaveValue(expectedText);
    });
  });

  describe("When the field is required", () => {
    test("Then the input should show an asterisk character (*)", async () => {
      const asterisk = "*";
      Text.args.required = true;

      await Text.run();
      const asteriskElement = screen.getByText(asterisk);

      expect(asteriskElement).toBeInTheDocument();
    });
  });

  describe("When the field does not receive an id prop", () => {
    test("Then the input should generate a random id", async () => {
      Text.args.id = undefined;

      await Text.run();
      const inputElement = screen.getByRole("textbox");
      screen.debug();
      expect(inputElement).toHaveAttribute("id");
    });
  });

  describe("When the field is type text", () => {
    test("Then the input have type text", async () => {
      const type = TEXT_FIELD_TYPES.text;

      await Text.run();
      const inputElement = screen.getByRole("textbox");

      expect(inputElement).toHaveAttribute("type", type);
    });
  });

  describe("When the field is type password", () => {
    test("Then the input have type password", async () => {
      const expectedType = TEXT_FIELD_TYPES.password;
      const placeholder = Password.args.placeholder!;

      await Password.run();
      const inputElement = screen.getByPlaceholderText(placeholder);

      expect(inputElement).toHaveAttribute("type", expectedType);
    });
  });
});
