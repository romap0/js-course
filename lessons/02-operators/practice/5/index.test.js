import { describe, it, expect } from "vitest";
import { isInRange } from "./index.js";

describe("Задание 5: Число в диапазоне?", () => {
  it("возвращает true, если число в диапазоне", () => {
    expect(isInRange(5, 1, 10)).toBe(true);
  });

  it("возвращает true на границах диапазона", () => {
    expect(isInRange(1, 1, 10)).toBe(true);
    expect(isInRange(10, 1, 10)).toBe(true);
  });

  it("возвращает false, если число меньше min", () => {
    expect(isInRange(0, 1, 10)).toBe(false);
  });

  it("возвращает false, если число больше max", () => {
    expect(isInRange(11, 1, 10)).toBe(false);
  });

  it("работает с отрицательными числами", () => {
    expect(isInRange(-5, -10, 0)).toBe(true);
    expect(isInRange(-11, -10, 0)).toBe(false);
  });
});
