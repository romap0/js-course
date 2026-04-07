import { describe, it, expect } from "vitest";
import { createAdder } from "./index.js";

describe("Задание 5: Каррирование сложения", () => {
  it("createAdder(5)(3) = 8", () => {
    expect(createAdder(5)(3)).toBe(8);
  });

  it("createAdder(0)(10) = 10", () => {
    expect(createAdder(0)(10)).toBe(10);
  });

  it("можно переиспользовать", () => {
    const add10 = createAdder(10);
    expect(add10(1)).toBe(11);
    expect(add10(20)).toBe(30);
    expect(add10(-5)).toBe(5);
  });

  it("возвращает функцию", () => {
    expect(typeof createAdder(1)).toBe("function");
  });
});
