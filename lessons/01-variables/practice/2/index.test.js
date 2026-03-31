import { describe, it, expect } from "vitest";
import { getType } from "./index.js";

describe("Задание 2: Определение типа", () => {
  it("определяет тип числа", () => {
    expect(getType(42)).toBe("number");
    expect(getType(3.14)).toBe("number");
    expect(getType(NaN)).toBe("number");
  });

  it("определяет тип строки", () => {
    expect(getType("hello")).toBe("string");
    expect(getType("")).toBe("string");
  });

  it("определяет тип boolean", () => {
    expect(getType(true)).toBe("boolean");
    expect(getType(false)).toBe("boolean");
  });

  it("определяет тип undefined", () => {
    expect(getType(undefined)).toBe("undefined");
  });

  it("определяет тип null как object", () => {
    expect(getType(null)).toBe("object");
  });

  it("определяет тип bigint", () => {
    expect(getType(10n)).toBe("bigint");
  });
});
