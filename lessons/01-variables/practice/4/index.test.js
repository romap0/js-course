import { describe, it, expect } from "vitest";
import { convertToNumber } from "./index.js";

describe("Задание 4: Преобразование в число", () => {
  it("преобразует целое число", () => {
    expect(convertToNumber("42")).toBe(42);
  });

  it("преобразует дробное число", () => {
    expect(convertToNumber("3.14")).toBe(3.14);
  });

  it("преобразует отрицательное число", () => {
    expect(convertToNumber("-10")).toBe(-10);
  });

  it("возвращает NaN для нечисловой строки", () => {
    expect(convertToNumber("hello")).toBeNaN();
  });

  it("преобразует пустую строку в 0", () => {
    expect(convertToNumber("")).toBe(0);
  });
});
