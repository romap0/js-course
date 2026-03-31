import { describe, it, expect } from "vitest";
import { formatPrice } from "./index.js";

describe("Задание 5: Форматирование цены", () => {
  it('возвращает "Бесплатно" для нулевой цены', () => {
    expect(formatPrice(0)).toBe("Бесплатно");
  });

  it("форматирует положительную цену", () => {
    expect(formatPrice(100)).toBe("100 ₽");
    expect(formatPrice(49.99)).toBe("49.99 ₽");
  });

  it("форматирует большую цену", () => {
    expect(formatPrice(10000)).toBe("10000 ₽");
  });
});
