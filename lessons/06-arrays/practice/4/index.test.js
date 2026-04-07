import { describe, it, expect } from "vitest";
import { intersection } from "./index.js";

describe("Задание 4: Пересечение массивов", () => {
  it("находит общие элементы", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it("возвращает уникальные элементы", () => {
    expect(intersection([1, 1, 2], [2, 2, 3])).toEqual([2]);
  });

  it("возвращает пустой массив, если нет общих", () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });

  it("работает с пустыми массивами", () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
  });

  it("работает со строками", () => {
    expect(intersection(["a", "b", "c"], ["b", "c", "d"])).toEqual([
      "b",
      "c",
    ]);
  });
});
