import { describe, it, expect } from "vitest";
import { groupBy } from "./index.js";

describe("Задание 3: Группировка", () => {
  it("группирует по чёт/нечёт", () => {
    expect(
      groupBy([1, 2, 3, 4, 5], (x) => (x % 2 === 0 ? "even" : "odd")),
    ).toEqual({ odd: [1, 3, 5], even: [2, 4] });
  });

  it("группирует строки по длине", () => {
    expect(groupBy(["one", "two", "three"], (s) => s.length)).toEqual({
      3: ["one", "two"],
      5: ["three"],
    });
  });

  it("возвращает пустой объект для пустого массива", () => {
    expect(groupBy([], (x) => x)).toEqual({});
  });

  it("группирует по первой букве", () => {
    expect(groupBy(["apple", "avocado", "banana"], (s) => s[0])).toEqual({
      a: ["apple", "avocado"],
      b: ["banana"],
    });
  });
});
