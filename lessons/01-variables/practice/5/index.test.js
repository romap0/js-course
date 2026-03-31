import { describe, it, expect } from "vitest";
import { createMessage } from "./index.js";

describe("Задание 5: Создание сообщения", () => {
  it("создаёт сообщение с именем и возрастом", () => {
    expect(createMessage("Иван", 25)).toBe("Иван — 25 лет");
  });

  it("работает с другими данными", () => {
    expect(createMessage("Анна", 30)).toBe("Анна — 30 лет");
    expect(createMessage("Боб", 0)).toBe("Боб — 0 лет");
  });
});
