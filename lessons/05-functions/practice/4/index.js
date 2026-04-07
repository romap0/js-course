/**
 * Задание 4: Композиция двух функций
 *
 * Верни новую функцию, которая сначала применяет g,
 * затем к результату применяет f.
 *
 * compose(f, g)(x) === f(g(x))
 *
 * @param {Function} f
 * @param {Function} g
 * @returns {Function}
 *
 * @example
 * const double = x => x * 2;
 * const inc = x => x + 1;
 * const doubleThenInc = compose(inc, double);
 * doubleThenInc(3) // 7  (3*2=6, 6+1=7)
 */
export function compose(f, g) {
  // Твой код здесь
}
