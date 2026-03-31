import { describe, it, expect } from "vitest";
import { getDefault } from "./index.js";

describe("Задание 6: Значение по умолчанию", () => {
  it("возвращает defaultVal для null", () => {
    expect(getDefault(null, 5)).toBe(5);
  });

  it("возвращает defaultVal для undefined", () => {
    expect(getDefault(undefined, "fallback")).toBe("fallback");
  });

  it("НЕ заменяет 0", () => {
    expect(getDefault(0, 5)).toBe(0);
  });

  it("НЕ заменяет пустую строку", () => {
    expect(getDefault("", "fallback")).toBe("");
  });

  it("НЕ заменяет false", () => {
    expect(getDefault(false, true)).toBe(false);
  });

  it("возвращает value, если оно задано", () => {
    expect(getDefault(42, 0)).toBe(42);
    expect(getDefault("test", "default")).toBe("test");
  });
});
