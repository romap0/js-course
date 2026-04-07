import { describe, it, expect } from "vitest";
import { countChar } from "./index.js";

describe("Задание 2: Подсчёт символов", () => {
  it('считает "l" в "hello"', () => {
    expect(countChar("hello", "l")).toBe(2);
  });

  it("возвращает 0, если символа нет", () => {
    expect(countChar("hello", "z")).toBe(0);
  });

  it("считает все одинаковые символы", () => {
    expect(countChar("aaa", "a")).toBe(3);
  });

  it("работает с пустой строкой", () => {
    expect(countChar("", "a")).toBe(0);
  });

  it("учитывает регистр", () => {
    expect(countChar("Hello", "h")).toBe(0);
    expect(countChar("Hello", "H")).toBe(1);
  });
});
