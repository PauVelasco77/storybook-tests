/// <reference types="vitest/config" />

import {expect} from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";

// Directly extend the expect function with matchers
expect.extend(matchers);
