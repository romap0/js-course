import { describe, it, expect } from "vitest";
import { sumArray } from "./index.js";

describe("Задание 1: Сумма массива", () => {
  it("считает сумму положительных чисел", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it("считает сумму с отрицательными числами", () => {
    expect(sumArray([10, -5, 5])).toBe(10);
  });

  it("возвращает 0 для пустого массива", () => {
    expect(sumArray([])).toBe(0);
  });

  it("работает с одним элементом", () => {
    expect(sumArray([42])).toBe(42);
  });
});
