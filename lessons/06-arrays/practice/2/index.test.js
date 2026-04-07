import { describe, it, expect } from "vitest";
import { unique } from "./index.js";

describe("Задание 2: Уникальные элементы", () => {
  it("убирает дубликаты чисел", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("убирает дубликаты строк", () => {
    expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  it("возвращает пустой массив для пустого входа", () => {
    expect(unique([])).toEqual([]);
  });

  it("не меняет массив без дубликатов", () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("сохраняет порядок первого появления", () => {
    expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
  });
});
