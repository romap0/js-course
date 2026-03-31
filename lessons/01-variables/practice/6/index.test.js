import { describe, it, expect } from "vitest";
import { getValueOrDefault } from "./index.js";

describe("Задание 6: Значение по умолчанию", () => {
  it("возвращает defaultValue для undefined", () => {
    expect(getValueOrDefault(undefined, 10)).toBe(10);
  });

  it("возвращает defaultValue для null", () => {
    expect(getValueOrDefault(null, "тест")).toBe("тест");
  });

  it("НЕ заменяет 0 на default", () => {
    expect(getValueOrDefault(0, 10)).toBe(0);
  });

  it("НЕ заменяет пустую строку на default", () => {
    expect(getValueOrDefault("", "default")).toBe("");
  });

  it("НЕ заменяет false на default", () => {
    expect(getValueOrDefault(false, true)).toBe(false);
  });

  it("возвращает value, если оно задано", () => {
    expect(getValueOrDefault("привет", "default")).toBe("привет");
    expect(getValueOrDefault(42, 0)).toBe(42);
  });
});
