import { describe, it, expect } from "vitest";
import { power } from "./index.js";

describe("Задание 1: Возведение в степень", () => {
  it("2^3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  it("5^0 = 1", () => {
    expect(power(5, 0)).toBe(1);
  });

  it("3^2 = 9", () => {
    expect(power(3, 2)).toBe(9);
  });

  it("10^4 = 10000", () => {
    expect(power(10, 4)).toBe(10000);
  });

  it("7^1 = 7", () => {
    expect(power(7, 1)).toBe(7);
  });

  it("0^5 = 0", () => {
    expect(power(0, 5)).toBe(0);
  });
});
