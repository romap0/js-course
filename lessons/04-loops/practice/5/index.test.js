import { describe, it, expect } from "vitest";
import { findIndex } from "./index.js";

describe("Задание 5: Поиск элемента", () => {
  it("находит элемент в середине массива", () => {
    expect(findIndex([1, 2, 3], 2)).toBe(1);
  });

  it("находит элемент в начале массива", () => {
    expect(findIndex([10, 20, 30], 10)).toBe(0);
  });

  it("находит элемент в конце массива", () => {
    expect(findIndex(["a", "b", "c"], "c")).toBe(2);
  });

  it("возвращает -1, если элемент не найден", () => {
    expect(findIndex([1, 2, 3], 5)).toBe(-1);
  });

  it("возвращает -1 для пустого массива", () => {
    expect(findIndex([], 1)).toBe(-1);
  });

  it("находит первое вхождение", () => {
    expect(findIndex([1, 2, 2, 3], 2)).toBe(1);
  });
});
