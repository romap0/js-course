import { describe, it, expect } from "vitest";
import { myMap } from "./index.js";

describe("Задание 3: Применение функции к каждому элементу", () => {
  it("удваивает числа", () => {
    expect(myMap([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  });

  it("переводит строки в верхний регистр", () => {
    expect(myMap(["a", "b"], (s) => s.toUpperCase())).toEqual(["A", "B"]);
  });

  it("возвращает пустой массив для пустого входа", () => {
    expect(myMap([], (x) => x)).toEqual([]);
  });

  it("не мутирует исходный массив", () => {
    const original = [1, 2, 3];
    myMap(original, (x) => x * 10);
    expect(original).toEqual([1, 2, 3]);
  });

  it("передаёт элемент в функцию", () => {
    expect(myMap([true, false], (x) => !x)).toEqual([false, true]);
  });
});
