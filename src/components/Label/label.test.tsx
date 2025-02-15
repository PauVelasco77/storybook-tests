import {screen} from "@testing-library/react";
import {test, expect, vi, describe, beforeEach} from "vitest";
import {composeStories} from "@storybook/react";

import * as stories from "./label.stories"; // 👈 Our stories imported here.

const onClickMock = vi.fn();

const {Large, Medium, Small} = composeStories(stories, {
  args: {
    onClick: onClickMock,
  },
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a Label component", () => {
  describe("When the prop size is sm", () => {
    test("Then the component should have the label--small className", async () => {
      await Small.run();
      const labelText = Small.args.children?.toString() as string;
      const expectedClassName = "label--small";

      const labelElement = screen.getByText(labelText);

      expect(labelElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the prop size is md", () => {
    test("Then the component should have the label--medium className", async () => {
      await Medium.run();
      const labelText = Medium.args.children?.toString() as string;
      const expectedClassName = "label--medium";

      const labelElement = screen.getByText(labelText);

      expect(labelElement).toHaveClass(expectedClassName);
    });
  });

  describe("When the prop size is lg", () => {
    test("Then the component should have the label--large className", async () => {
      await Large.run();
      const labelText = Large.args.children?.toString() as string;
      const expectedClassName = "label--large";

      const labelElement = screen.getByText(labelText);

      expect(labelElement).toHaveClass(expectedClassName);
    });
  });
});
