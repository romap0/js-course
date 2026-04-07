import { describe, it, expect } from "vitest";
import { flatten } from "./index.js";

describe("Задание 6: Плоский массив", () => {
  it("разворачивает глубоко вложенный массив", () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it("разворачивает один уровень вложенности", () => {
    expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  it("не меняет плоский массив", () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("работает с пустым массивом", () => {
    expect(flatten([])).toEqual([]);
  });

  it("работает со смешанной вложенностью", () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
