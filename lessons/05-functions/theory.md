# Урок 5. Функции

Функция — это блок кода, который можно вызывать многократно. Функции помогают избежать дублирования и делают код читаемым.

## Объявление функции (Function Declaration)

```js
function greet(name) {
  return `Привет, ${name}!`;
}

greet("Анна"); // "Привет, Анна!"
```

Такие функции **поднимаются (hoisting)** — их можно вызывать до объявления.

## Функциональное выражение (Function Expression)

```js
const greet = function (name) {
  return `Привет, ${name}!`;
};
```

В отличие от declaration, **нельзя вызвать до объявления**.

## Стрелочные функции (Arrow Functions)

Короткий синтаксис, появившийся в ES6:

```js
// Полная форма
const sum = (a, b) => {
  return a + b;
};

// Краткая форма (если тело — одно выражение)
const sum = (a, b) => a + b;

// Один параметр — скобки можно опустить
const double = n => n * 2;
```

```
Сравнение синтаксисов:

function add(a, b) { return a + b; }    // declaration
const add = function(a, b) { return a + b; };  // expression
const add = (a, b) => a + b;            // arrow (краткая)
const add = (a, b) => { return a + b; }; // arrow (полная)
```

## Параметры по умолчанию

```js
function greet(name = "мир") {
  return `Привет, ${name}!`;
}

greet();       // "Привет, мир!"
greet("Анна"); // "Привет, Анна!"
```

## Rest-параметры

Собирают «оставшиеся» аргументы в массив:

```js
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

sum(1, 2, 3); // 6
```

## Возврат значений

Функция **возвращает `undefined`**, если не указан `return`.

```js
function log(msg) {
  console.log(msg);
  // return undefined; — неявно
}
```

Можно возвращать что угодно: число, строку, массив, объект, другую функцию.

## Функция как значение

В JavaScript функции — это значения. Их можно передавать как аргументы и возвращать из других функций:

```js
function apply(fn, value) {
  return fn(value);
}

const double = n => n * 2;
apply(double, 5); // 10
```

## Область видимости

Переменные, объявленные внутри функции, **не видны снаружи**:

```js
function test() {
  const secret = 42;
  return secret;
}

console.log(secret); // ReferenceError: secret is not defined
```

## Практические задания

| # | Задание | Файл |
|---|---------|------|
| 1 | Возведение в степень | `practice/1/index.js` |
| 2 | Подсчёт символов | `practice/2/index.js` |
| 3 | Применение функции | `practice/3/index.js` |
| 4 | Композиция функций | `practice/4/index.js` |
| 5 | Каррирование сложения | `practice/5/index.js` |
| 6 | Мемоизация | `practice/6/index.js` |
