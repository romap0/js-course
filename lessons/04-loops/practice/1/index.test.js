import { describe, it, expect } from "vitest";
import { sumTo } from "./index.js";

describe("Задание 1: Сумма чисел от 1 до N", () => {
  it("считает сумму от 1 до 5", () => {
    expect(sumTo(5)).toBe(15);
  });

  it("считает сумму от 1 до 1", () => {
    expect(sumTo(1)).toBe(1);
  });

  it("считает сумму от 1 до 10", () => {
    expect(sumTo(10)).toBe(55);
  });

  it("считает сумму от 1 до 100", () => {
    expect(sumTo(100)).toBe(5050);
  });
});
