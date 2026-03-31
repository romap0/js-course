import { describe, it, expect } from "vitest";
import { isEqual } from "./index.js";

describe("Задание 2: Строгое равенство", () => {
  it("возвращает true для одинаковых чисел", () => {
    expect(isEqual(5, 5)).toBe(true);
  });

  it("возвращает false для числа и строки", () => {
    expect(isEqual(5, "5")).toBe(false);
  });

  it("возвращает true для одинаковых строк", () => {
    expect(isEqual("hello", "hello")).toBe(true);
  });

  it("возвращает false для разных типов", () => {
    expect(isEqual(0, false)).toBe(false);
    expect(isEqual("", false)).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
  });

  it("возвращает true для null === null", () => {
    expect(isEqual(null, null)).toBe(true);
  });
});
