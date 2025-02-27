import {fireEvent, screen} from "@testing-library/react";
import {expect, describe, test, vi, beforeEach} from "vitest";
import {composeStories} from "@storybook/react";
import {userEvent} from "@testing-library/user-event";

import * as stories from "./loginForm.stories";

const onSubmitMock = vi.fn();

const {Base} = composeStories(stories);

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a LoginForm component", () => {
  describe("When the user fill the form and submit it", () => {
    test("Then the actionOnSubmit should be called", async () => {
      const email = "email@test.com";
      const password = "password";
      Base.args.onSubmitLogin = onSubmitMock;

      await Base.run();

      const emailElement = screen.getByLabelText(/email/i);
      const passwordElement = screen.getByLabelText(/password/i);
      const formElement = screen.getByRole("form");

      await userEvent.type(emailElement, email);
      await userEvent.type(passwordElement, password);
      fireEvent.submit(formElement);

      expect(onSubmitMock).toHaveBeenCalled();
    });
  });

  describe("When the user leave some of the fields empty", () => {
    test("Then the actionOnSubmit should not be called", async () => {
      Base.args.onSubmitLogin = onSubmitMock;

      await Base.run();

      const formElement = screen.getByRole("form");

      fireEvent.submit(formElement);

      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });

  describe("When the type an invalid email and submit the form", () => {
    test("Then the errorText should be displayed", async () => {
      const email = "wrongemail";
      const password = "password";
      Base.args.onSubmitLogin = onSubmitMock;

      await Base.run();

      const emailElement = screen.getByLabelText(/email/i);
      const passwordElement = screen.getByLabelText(/password/i);
      const formElement = screen.getByRole("form");

      await userEvent.type(emailElement, email);
      await userEvent.type(passwordElement, password);
      fireEvent.submit(formElement);

      const errorMessageElement = screen.getByRole("alert");

      expect(errorMessageElement).toBeInTheDocument();
    });
  });
});
