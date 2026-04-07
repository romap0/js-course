import { describe, it, expect } from "vitest";
import { chunk } from "./index.js";

describe("Задание 5: Разбиение на чанки", () => {
  it("разбивает на чанки по 2", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("разбивает на чанки равного размера", () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  it("разбивает на чанки по 1", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  it("возвращает пустой массив для пустого входа", () => {
    expect(chunk([], 2)).toEqual([]);
  });

  it("размер чанка больше массива", () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
  });
});
