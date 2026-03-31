import { describe, it, expect } from "vitest";
import { getDiscount } from "./index.js";

describe("Задание 4: Расчёт скидки", () => {
  it("вычисляет 10% скидку", () => {
    expect(getDiscount(200, 10)).toBe(180);
  });

  it("вычисляет 25% скидку", () => {
    expect(getDiscount(100, 25)).toBe(75);
  });

  it("вычисляет 50% скидку", () => {
    expect(getDiscount(80, 50)).toBe(40);
  });

  it("возвращает исходную цену при 0% скидке", () => {
    expect(getDiscount(100, 0)).toBe(100);
  });

  it("возвращает 0 при 100% скидке", () => {
    expect(getDiscount(250, 100)).toBe(0);
  });
});
