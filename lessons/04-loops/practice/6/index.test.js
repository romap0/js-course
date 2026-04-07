import { describe, it, expect } from "vitest";
import { isPowerOfTwo } from "./index.js";

describe("Задание 6: Степень двойки", () => {
  it("1 — степень двойки (2^0)", () => {
    expect(isPowerOfTwo(1)).toBe(true);
  });

  it("2 — степень двойки", () => {
    expect(isPowerOfTwo(2)).toBe(true);
  });

  it("8 — степень двойки", () => {
    expect(isPowerOfTwo(8)).toBe(true);
  });

  it("1024 — степень двойки", () => {
    expect(isPowerOfTwo(1024)).toBe(true);
  });

  it("10 — не степень двойки", () => {
    expect(isPowerOfTwo(10)).toBe(false);
  });

  it("3 — не степень двойки", () => {
    expect(isPowerOfTwo(3)).toBe(false);
  });

  it("0 — не степень двойки", () => {
    expect(isPowerOfTwo(0)).toBe(false);
  });
});
