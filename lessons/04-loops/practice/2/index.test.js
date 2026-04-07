import { describe, it, expect } from "vitest";
import { factorial } from "./index.js";

describe("Задание 2: Факториал", () => {
  it("0! = 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("1! = 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("5! = 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("10! = 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });
});
