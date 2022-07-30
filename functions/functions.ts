// 1. Box handler
// eslint-disable-next-line no-unused-vars
export const boxHandler = (x: any): { next: (f: any) => any; done: (f: any) => any } => ({
  next: (f: any) => boxHandler(f(x)),
  done: (f: any) => f(x)
});
// const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
// const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

// const getDiscountPrice = (price, discount) =>
//     boxHandler(getMoney(price))
//         .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
//         .done((res) => res);

// getDiscountPrice('$6.00', '20%'); // 4.8

// 2. Check if a value is a function
export const isFunction = (v: any): boolean =>
  ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(
    Object.prototype.toString.call(v)
  );
// isFunction(function () {}); // true
// isFunction(function* () {}); // true
// isFunction(async function () {}); // true

// 3. Check if a value is a generator function
export const isGeneratorFunction = (v: any): boolean =>
  Object.prototype.toString.call(v) === '[object GeneratorFunction]';
// isGeneratorFunction(function () {}); // false
// isGeneratorFunction(function* () {}); // true

// 4. Check if a value is an async function
export const isAsyncFunction = (v: any): boolean => Object.prototype.toString.call(v) === '[object AsyncFunction]';
// isAsyncFunction(function () {}); // false
// isAsyncFunction(function* () {}); // false
// isAsyncFunction(async function () {}); // true

// 5. Compose functions from left to right
export const pipe =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduce((y, f) => f(y), x);
// const lowercase = (str) => str.toLowerCase();
// const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// const reverse = (str) => str.split('').reverse().join('');

// const fn = pipe(lowercase, capitalize, reverse);

// We will execute `lowercase`, `capitalize` and `reverse` in order
// fn('Hello World') === 'dlrow olleH';

// 6. Compose functions from right to left
export const compose =
  (...fns: any[]) =>
  (x: any) =>
    fns.reduceRight((y, f) => f(y), x);
// const lowercase = (str) => str.toLowerCase();
// const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// const reverse = (str) => str.split('').reverse().join('');

// const fn = compose(reverse, capitalize, lowercase);

// // We will execute `lowercase`, `capitalize` and `reverse` in order
// fn('Hello World') === 'dlrow olleH';

// 7. Curry a function
export const curry = (fn: any, ...args: any[]): any =>
  fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// const sum = (a, b, c) => a + b + c;
// curry(sum)(1)(2)(3); // 6
// curry(sum)(1, 2, 3); // 6
// curry(sum, 1)(2, 3); // 6
// curry(sum, 1)(2)(3); // 6
// curry(sum, 1, 2)(3); // 6
// curry(sum, 1, 2, 3); // 6

// 8. Memoize a function
export const memoize = (fn: any) =>
  (
    (cache = Object.create(null)) =>
    (arg: any) =>
      cache[arg] || (cache[arg] = fn(arg))
  )();
// Calculate Fibonacci numbers
// const fibo = memoize((n: number) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)));
// fibo(1); // 1
// fibo(2); // 1
// fibo(3); // 2
// fibo(4); // 3
// fibo(5); // 5
// fibo(6); // 8
