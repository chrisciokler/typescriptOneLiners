// 1. Check if the code is running in Jest
export const isRunningInJest: boolean = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
// isRunningInJest; // true

// 2. Check if the code is running in NodeJS
export const isNode: boolean =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
//  isNode; // true

// 3. Check if the code is running in the browser
export const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';
// isBrowser; // true

// 4. Clear all cookies
export const clearCookies = (): void =>
  document.cookie
    .split(';')
    .forEach(
      (c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );
// clearCookies();

// 5. Convert 3 digits color to 6 digits color
export const toFullHexColor = (color: string): string =>
  `#${(color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map((c) => `${c}${c}`)
    .join('')}`;
// toFullHexColor('123'); // '#112233'
// toFullHexColor('#123'); // '#112233'
// toFullHexColor('#abc'); // '#aabbcc'

// 6. Convert Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
// celsiusToFahrenheit(15); // 59
// celsiusToFahrenheit(0); // 32
// celsiusToFahrenheit(-20); // -4

// 7. Convert Fahrenheit to Celsius
export const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
// fahrenheitToCelsius(59); // 15

// 8. Convert Celsius to Kelvin
export const celsiusToKelvin = (celsius: number): number => celsius + 273.15;
// celsiusToKelvin(15); // 298.15
// celsiusToKelvin(0); // 273.15

// 9. Convert Fahrenheit to Kelvin
export const fahrenheitToKelvin = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9 + 273.15;
// fahrenheitToKelvin(59); // 298.15

// 10. Convert Kelvin to Celsius
export const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;
// kelvinToCelsius(298.15); // 15
// kelvinToCelsius(273.15); // 0

// 11. Convert Kelvin to Fahrenheit
export const kelvinToFahrenheit = (kelvin: number): number => (kelvin * 9) / 5 - 459.67;
// kelvinToFahrenheit(298.15); // 59
// kelvinToFahrenheit(273.15); // 32

// 12. Convert rgb color to hex
export const rgbToHex = (red: number, green: number, blue: number): string =>
  `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
// rgbToHex(0, 255, 255); // '#00ffff'

// 13. Convert hex color to rgb
export const hexToRgb = (hex: string): [number, number, number] => {
  const [r, g, b] = hex
    .slice(1)
    .split('')
    .map((c) => parseInt(c + c, 16));
  return [r, g, b];
}; // hexToRgb('#00ffff'); // [0, 255, 255]

// Convert URL parameters to object
export const getUrlParams = (query: string): Record<string, string> =>
  Array.from(new URLSearchParams(query)).reduce(
    (p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }),
    {} as Record<string, string>
  );
// getUrlParams(location.search); // Get the parameters of the current URL
// getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }
// Duplicate key
// getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }

// 14. Convert object to URL parameters
export const toUrlParams = (obj: Record<string, string | string[]>): string => {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([k, v]) => {
    if (Array.isArray(v)) {
      v.forEach((val) => params.append(k, val));
    } else {
      params.append(k, v);
    }
  }),
    params.toString();
  return params.toString();
};
// toUrlParams({ foo: "Foo", bar: "Bar" }); // "foo=Foo&bar=Bar"

// 15. Decode a JWT token
export const decodeJwt = (token: string): Record<string, string> => {
  const [, payload] = token.split('.');
  return JSON.parse(atob(payload));
};
// decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
// { sub: "1234567890", name: "John Doe", iat: 1516239022 }

// 16. Encode a JWT token
export const encodeJwt = (obj: Record<string, string>): string => {
  const payload = JSON.stringify(obj);
  const base64Payload = btoa(payload);
  const base64Header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  return `${base64Header}.${base64Payload}`;
};
// encodeJwt({ sub: "1234567890", name: "John Doe", iat: 1516239022 });
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"

// 17. Detect dark mode
export const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// isDarkMode; // true

// 18. Easing functions
export const linear = (t: number): number => t;

export const easeInQuad = (t: number): number => t * t;
export const easeOutQuad = (t: number): number => t * (2 - t);
export const easeInOutQuad = (t: number): number => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

export const easeInCubic = (t: number): number => t * t * t;
export const easeOutCubic = (t: number): number => --t * t * t + 1;
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

export const easeInQuart = (t: number): number => t * t * t * t;
export const easeOutQuart = (t: number): number => 1 - --t * t * t * t;
export const easeInOutQuart = (t: number): number => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t);

export const easeInQuint = (t: number): number => t * t * t * t * t;
export const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
export const easeInOutQuint = (t: number): number => (t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t);

export const easeInSine = (t: number): number => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
export const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t);
export const easeInOutSine = (t: number): number => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

export const easeInElastic = (t: number): number => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
export const easeOutElastic = (t: number): number => ((0.04 * t) / --t) * Math.sin(25 * t);
export const easeInOutElastic = (t: number): number =>
  (t -= 0.5) < 0 ? (0.02 + 0.01 / t) * Math.sin(50 * t) : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;

// 19. Emulate a dice throw
export const throwdice = (): number => ~~(Math.random() * 6) + 1;
// throwdice(); // 4
// throwdice(); // 1
// throwdice(); // 6

// 20. Emulate a coin flip
export const flipcoin = (): boolean => Math.random() < 0.5;
// flipcoin(); // true

// 21. Encode a URL
export const encode = (url: string): string =>
  encodeURIComponent(url)
    .replace(/!/g, '%21')
    .replace(/~/g, '%7E')
    .replace(/\*/g, '%2A')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/%20/g, '+');
// encode('https://www.google.com/'); // 'https%3A%2F%2Fwww.google.com%2F'

// 22. Decode a URL
export const decode = (url: string): string => decodeURIComponent(url.replace(/\+/g, '%20'));
// decode('https%3A%2F%2Fwww.google.com%2F'); // 'https://www.google.com/'

// 23. Get the current URL
export const getUrl = (): string => window.location.href;
// getUrl(); // 'https://www.google.com/'

// 24. Get the first defined and non null argument
export const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item));
// coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'

// 25. Get the value of a param from a URL
export const getParam = (url: string, param: string): string | null =>
  new URLSearchParams(new URL(url).search).get(param);
getParam('http://domain.com?message=hello', 'message'); // 'hello'

// 26. Get type of a variable in string
export const getTypeOf = (obj: any): string =>
  (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1];
// getTypeOf('hello world'); // String
// getTypeOf(1000); // Number
// getTypeOf(Infinity); // Number
// getTypeOf(true); // Boolean
// getTypeOf(Symbol()); // Symbol
// getTypeOf(null); // Null
// getTypeOf(undefined); // Undefined
// getTypeOf({}); // Object
// getTypeOf([]); // Array
// getTypeOf(/[a-z]/g); // RegExp
// getTypeOf(new Date(2021)); // Date
// getTypeOf(new Error()); // Error
// getTypeOf(function () {}); // Function
// getTypeOf((a, b) => a + b); // Function
// getTypeOf(async () => {}); // AsyncFunction
// getTypeOf(document); // HTMLDocument

// 27. Redirect the page to HTTPS if it is in HTTP
export const redirectHttps = (): string => (location.protocol === 'https:' ? '' : (location.protocol = 'https:'));

// 28. Run Promises in sequence
export const run = (promises: Promise<any>[]): Promise<any> =>
  promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
// run(promises).then((results) => {
//   // `results` is an array of promise results in the same order
// });

// 29. Run Promises in parallel
export const runParallel = (promises: Promise<any>[]): Promise<any> => Promise.all(promises);
// runParallel(promises).then((results) => {
//   // `results` is an array of promise results in the same order
// });

// 30. Run Promises in parallel and return the results in the same order
export const runParallelOrder = (promises: Promise<any>[]): Promise<any> =>
  Promise.all(promises).then((results) => results.reduce((p, c) => [...p, c], []));
// runParallelOrder(promises).then((results) => {
//   // `results` is an array of promise results in the same order
// });

// 31. Wait for an amount of time
export const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
// wait(1000).then(() => console.log('done'));

// 32. Add an ordinal suffix to a number
export const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;
// addOrdinal(1); // '1st'
// addOrdinal(2); // '2nd'
// addOrdinal(3); // '3rd'
// addOrdinal(11); // '11th'
// addOrdinal(12); // '13th'
// addOrdinal(13); // '13th'

// 33. Convert a number to equivalent characters
export const toChars = (n: number): string =>
  `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
//   toChars(0); // A
// toChars(1); // B
// toChars(25); // Z

// toChars(26); // AA
// toChars(27); // AB
// toChars(51); // AZ
