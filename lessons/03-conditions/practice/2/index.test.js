import { describe, it, expect } from "vitest";
import { getGrade } from "./index.js";

describe("Задание 2: Оценка по баллам", () => {
  it('возвращает "A" для 90–100', () => {
    expect(getGrade(90)).toBe("A");
    expect(getGrade(95)).toBe("A");
    expect(getGrade(100)).toBe("A");
  });

  it('возвращает "B" для 70–89', () => {
    expect(getGrade(70)).toBe("B");
    expect(getGrade(80)).toBe("B");
    expect(getGrade(89)).toBe("B");
  });

  it('возвращает "C" для 50–69', () => {
    expect(getGrade(50)).toBe("C");
    expect(getGrade(60)).toBe("C");
    expect(getGrade(69)).toBe("C");
  });

  it('возвращает "D" для 30–49', () => {
    expect(getGrade(30)).toBe("D");
    expect(getGrade(45)).toBe("D");
    expect(getGrade(49)).toBe("D");
  });

  it('возвращает "F" для 0–29', () => {
    expect(getGrade(0)).toBe("F");
    expect(getGrade(15)).toBe("F");
    expect(getGrade(29)).toBe("F");
  });
});
