import { describe, it, expect } from "vitest";
import { reverseString } from "./index.js";

describe("Задание 3: Разворот строки", () => {
  it('разворачивает "hello"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it('разворачивает "abc"', () => {
    expect(reverseString("abc")).toBe("cba");
  });

  it("возвращает пустую строку", () => {
    expect(reverseString("")).toBe("");
  });

  it("разворачивает один символ", () => {
    expect(reverseString("a")).toBe("a");
  });

  it("разворачивает палиндром", () => {
    expect(reverseString("abba")).toBe("abba");
  });
});
