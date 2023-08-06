/*
 *Тесты:
 * 1. Введено не число
 * 2. Введенное число меньше 1 или больше 12
 * 3. Значение не введено (пусто)
 * 4. Введено число от 1 до 12 и получен месяц
 */
import { getMonthByNum } from "../../utils/getMonthByNum.js";
discribe("test for getMonthByName function", () => {
  it("input NaN", () => {
    expect(getMonthByNum("string")).toBe("неизвестно");
  }),
    it("input number >1", () => {
      expect(getMonthByNum(-12)).toBe("неизвестно");
    }),
    it("input number >1", () => {
      expect(getMonthByNum(135)).toBe("неизвестно");
    }),
    it("input empty", () => {
      expect(getMonthByNum()).toBe("неизвестно");
    }),
    it("input correct number", () => {
      expect(getMonthByNum(2)).toBe("февраль");
    });
});
