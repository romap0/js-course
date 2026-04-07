/**
 * Задание 6: Мемоизация
 *
 * Верни новую функцию, которая кэширует результаты вызовов.
 * Если функция уже вызывалась с таким аргументом —
 * верни результат из кэша, не вызывая fn повторно.
 *
 * Считай, что fn принимает один примитивный аргумент.
 *
 * @param {Function} fn — функция для мемоизации
 * @returns {Function}
 *
 * @example
 * let calls = 0;
 * const double = (x) => { calls++; return x * 2; };
 * const memoDouble = memoize(double);
 *
 * memoDouble(5); // 10, calls === 1
 * memoDouble(5); // 10, calls === 1 (из кэша!)
 * memoDouble(3); // 6,  calls === 2
 */
export function memoize(fn) {
  // Твой код здесь
}
