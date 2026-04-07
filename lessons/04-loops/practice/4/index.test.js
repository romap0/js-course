import { describe, it, expect } from "vitest";
import { fizzBuzz } from "./index.js";

describe("Задание 4: FizzBuzz", () => {
  it("возвращает массив для n=5", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  it("возвращает FizzBuzz для числа 15", () => {
    const result = fizzBuzz(15);
    expect(result[14]).toBe("FizzBuzz");
  });

  it("правильно обрабатывает первые 15 элементов", () => {
    expect(fizzBuzz(15)).toEqual([
      "1", "2", "Fizz", "4", "Buzz",
      "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz",
    ]);
  });

  it("возвращает массив для n=1", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });
});
