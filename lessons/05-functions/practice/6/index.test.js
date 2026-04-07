import { describe, it, expect } from "vitest";
import { memoize } from "./index.js";

describe("Задание 6: Мемоизация", () => {
  it("возвращает правильный результат", () => {
    const double = (x) => x * 2;
    const memoDouble = memoize(double);
    expect(memoDouble(5)).toBe(10);
    expect(memoDouble(3)).toBe(6);
  });

  it("кэширует результат — fn не вызывается повторно", () => {
    let calls = 0;
    const expensive = (x) => {
      calls++;
      return x * x;
    };
    const memo = memoize(expensive);

    memo(4); // вызов fn
    memo(4); // из кэша
    memo(4); // из кэша
    expect(calls).toBe(1);
  });

  it("различает разные аргументы", () => {
    let calls = 0;
    const fn = (x) => {
      calls++;
      return x + 1;
    };
    const memo = memoize(fn);

    memo(1);
    memo(2);
    memo(1);
    expect(calls).toBe(2);
  });

  it("возвращает функцию", () => {
    expect(typeof memoize((x) => x)).toBe("function");
  });
});
