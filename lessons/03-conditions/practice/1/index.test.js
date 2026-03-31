import { describe, it, expect } from "vitest";
import { getAbsoluteValue } from "./index.js";

describe("Задание 1: Модуль числа", () => {
  it("возвращает положительное число без изменений", () => {
    expect(getAbsoluteValue(5)).toBe(5);
    expect(getAbsoluteValue(100)).toBe(100);
  });

  it("возвращает модуль отрицательного числа", () => {
    expect(getAbsoluteValue(-3)).toBe(3);
    expect(getAbsoluteValue(-100)).toBe(100);
  });

  it("возвращает 0 для нуля", () => {
    expect(getAbsoluteValue(0)).toBe(0);
  });

  it("работает с дробными числами", () => {
    expect(getAbsoluteValue(-2.5)).toBe(2.5);
  });
});
