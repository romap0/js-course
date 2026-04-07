import { describe, it, expect } from "vitest";
import { compose } from "./index.js";

describe("Задание 4: Композиция двух функций", () => {
  const double = (x) => x * 2;
  const inc = (x) => x + 1;
  const square = (x) => x * x;

  it("compose(inc, double)(3) = 7", () => {
    expect(compose(inc, double)(3)).toBe(7);
  });

  it("compose(double, inc)(3) = 8", () => {
    expect(compose(double, inc)(3)).toBe(8);
  });

  it("compose(square, inc)(4) = 25", () => {
    expect(compose(square, inc)(4)).toBe(25);
  });

  it("возвращает функцию", () => {
    expect(typeof compose(inc, double)).toBe("function");
  });
});
