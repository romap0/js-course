import { describe, it, expect } from "vitest";
import { isEven } from "./index.js";

describe("Задание 3: Чётное ли число?", () => {
  it("возвращает true для чётных чисел", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(100)).toBe(true);
  });

  it("возвращает false для нечётных чисел", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  it("работает с отрицательными числами", () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(-3)).toBe(false);
  });
});
