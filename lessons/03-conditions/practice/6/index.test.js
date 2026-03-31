import { describe, it, expect } from "vitest";
import { getTicketPrice } from "./index.js";

describe("Задание 6: Цена билета", () => {
  it("возвращает 0 для детей 0–6 лет", () => {
    expect(getTicketPrice(0)).toBe(0);
    expect(getTicketPrice(3)).toBe(0);
    expect(getTicketPrice(6)).toBe(0);
  });

  it("возвращает 50 для детей 7–17 лет", () => {
    expect(getTicketPrice(7)).toBe(50);
    expect(getTicketPrice(12)).toBe(50);
    expect(getTicketPrice(17)).toBe(50);
  });

  it("возвращает 100 для взрослых 18–64 лет", () => {
    expect(getTicketPrice(18)).toBe(100);
    expect(getTicketPrice(30)).toBe(100);
    expect(getTicketPrice(64)).toBe(100);
  });

  it("возвращает 40 для пенсионеров 65+ лет", () => {
    expect(getTicketPrice(65)).toBe(40);
    expect(getTicketPrice(70)).toBe(40);
    expect(getTicketPrice(90)).toBe(40);
  });
});
