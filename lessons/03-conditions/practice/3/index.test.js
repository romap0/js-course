import { describe, it, expect } from "vitest";
import { getSeasonName } from "./index.js";

describe("Задание 3: Название сезона", () => {
  it('возвращает "Зима" для 12, 1, 2', () => {
    expect(getSeasonName(12)).toBe("Зима");
    expect(getSeasonName(1)).toBe("Зима");
    expect(getSeasonName(2)).toBe("Зима");
  });

  it('возвращает "Весна" для 3, 4, 5', () => {
    expect(getSeasonName(3)).toBe("Весна");
    expect(getSeasonName(4)).toBe("Весна");
    expect(getSeasonName(5)).toBe("Весна");
  });

  it('возвращает "Лето" для 6, 7, 8', () => {
    expect(getSeasonName(6)).toBe("Лето");
    expect(getSeasonName(7)).toBe("Лето");
    expect(getSeasonName(8)).toBe("Лето");
  });

  it('возвращает "Осень" для 9, 10, 11', () => {
    expect(getSeasonName(9)).toBe("Осень");
    expect(getSeasonName(10)).toBe("Осень");
    expect(getSeasonName(11)).toBe("Осень");
  });

  it('возвращает "Неверный месяц" для невалидных значений', () => {
    expect(getSeasonName(0)).toBe("Неверный месяц");
    expect(getSeasonName(13)).toBe("Неверный месяц");
    expect(getSeasonName(-1)).toBe("Неверный месяц");
  });
});
