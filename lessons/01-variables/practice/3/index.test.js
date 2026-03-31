import { describe, it, expect } from "vitest";
import { isAdult } from "./index.js";

describe("Задание 3: Совершеннолетие", () => {
  it("возвращает true для возраста >= 18", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(25)).toBe(true);
    expect(isAdult(100)).toBe(true);
  });

  it("возвращает false для возраста < 18", () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(0)).toBe(false);
    expect(isAdult(10)).toBe(false);
  });
});
