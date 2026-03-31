import { describe, it, expect } from "vitest";
import { sum } from "./index.js";

describe("Задание 1: Сумма двух чисел", () => {
  it("складывает два положительных числа", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("складывает отрицательные числа", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("складывает с нулём", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it("складывает дробные числа", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
