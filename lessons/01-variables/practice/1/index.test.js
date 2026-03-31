import { describe, it, expect } from "vitest";
import { getGreeting } from "./index.js";

describe("Задание 1: Приветствие", () => {
  it("возвращает приветствие с именем", () => {
    expect(getGreeting("Анна")).toBe("Привет, Анна!");
  });

  it("работает с другими именами", () => {
    expect(getGreeting("Иван")).toBe("Привет, Иван!");
    expect(getGreeting("Мир")).toBe("Привет, Мир!");
  });

  it("работает с пустой строкой", () => {
    expect(getGreeting("")).toBe("Привет, !");
  });
});
