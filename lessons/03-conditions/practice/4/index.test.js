import { describe, it, expect } from "vitest";
import { canVote } from "./index.js";

describe("Задание 4: Право голоса", () => {
  it("возвращает true для совершеннолетнего гражданина", () => {
    expect(canVote(18, true)).toBe(true);
    expect(canVote(25, true)).toBe(true);
  });

  it("возвращает false без гражданства", () => {
    expect(canVote(20, false)).toBe(false);
    expect(canVote(40, false)).toBe(false);
  });

  it("возвращает false для несовершеннолетних", () => {
    expect(canVote(16, true)).toBe(false);
    expect(canVote(17, true)).toBe(false);
  });

  it("возвращает false для несовершеннолетних без гражданства", () => {
    expect(canVote(10, false)).toBe(false);
  });
});
