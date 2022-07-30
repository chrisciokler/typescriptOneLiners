// 1. Capitalize a string
export const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// capitalize('hello world'); // 'Hello world'

// 2. Check if a path is relative
export const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path);
// isRelative('/foo/bar/baz'); // false
// isRelative('C:\\foo\\bar\\baz'); // false
// isRelative('foo/bar/baz.txt'); // true
// isRelative('foo.md'); // true

// 3. Check if a string consists of a repeated character sequence
export const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;
// consistsRepeatedSubstring('aa'); // true
// consistsRepeatedSubstring('aaa'); // true
// consistsRepeatedSubstring('ababab'); // true
// consistsRepeatedSubstring('abc'); // false

// 4. Check if a URL is absolute
export const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
// isAbsoluteUrl('https://1loc.dev'); // true
// isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
// isAbsoluteUrl('1loc.dev'); // false
// isAbsoluteUrl('//1loc.dev'); // false

// 5. Check if two strings are anagram
export const areAnagram = (str1: string, str2: string): boolean =>
  str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
// areAnagram('listen', 'silent'); // true
// areAnagram('they see', 'the eyes'); // true
// areAnagram('node', 'deno'); // true

// 6. Convert a base64 encoded string to an uint8 array
export const base64ToUint8 = (str: string): Uint8Array => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
// base64ToUint8('SGVsbG8gV29ybGQ='); // Uint8Array [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]

// 7. Convert a letter to associate emoji
export const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
// letterToEmoji('a'); // 🇦
// letterToEmoji('b'); // 🇧

// 8. Convert a string to camelCase
export const toCamelCase = (str: string): string =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
// toCamelCase('background-color'); // backgroundColor
// toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
// toCamelCase('_hello_world'); // HelloWorld
// toCamelCase('hello_world'); // helloWorld

// 9. Convert a string to PascalCase
export const toPascalCase = (str: string): string =>
  (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
// toPascalCase('hello world'); // 'HelloWorld'
// toPascalCase('hello.world'); // 'HelloWorld'
// toPascalCase('foo_bar-baz'); // FooBarBaz

// 10. Convert a string to URL slug
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
// slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'

// 11. Convert a Windows file path to Unix path
export const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
// toUnixPath('./foo/bar/baz'); // foo/bar/baz
// toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz

// 12. Convert an uint8 array to a base64 encoded string
export const uint8ToBase64 = (arr: Uint8Array): string => Buffer.from(arr).toString('base64');
// uint8ToBase64(Uint8Array.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100])); // 'SGVsbG8gV29ybGQ='

// 13. Convert camelCase to kebab-case and vice versa
export const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);
// kebabToCamel('background-color'); // 'backgroundColor'

export const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
// camelToKebab('backgroundColor'); // 'background-color'

// 14. Convert snake_case to camelCase
export const snakeToCamel = (str: string): string =>
  str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
// snakeToCamel('HELLO_world'); // 'helloWorld'

// 15. Count the occurrences of a character in a string
export const countOccurrences = (str: string, char: string): number => [...str].filter((item) => item === char).length;
// countOccurrences('a.b.c.d.e', '.'); // 4

// 16. Format a string
export const format = (str: string, ...vals: string[]): string =>
  vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
// const template = 'My name is {0} and I am {1} years old';

// format(template, 'John', '30');
// // My name is John and I am 30 years old

// format(template, 'Jane', '20');
// // My name is Jane and I am 20 years old

// 17. Generate a hash of a string
export const hash = (str: string): number =>
  str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0);
// hash('hello'); // 99162322

// 18. Get the base URL without any parameters
export const baseUrl = (url: string): string => url.split('?')[0];
// baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'

// 19. Get the number of a character in a string
export const characterCount = (str: string, char: string): number => str.split(char).length - 1;
// characterCount('192.168.1.1', '.'); // 3
// characterCount('star wars', 's'); // 2

// 20. Replace the first given number of characters of a string with another character
export const mask = (str: string, num: number, mask: string): string =>
  `${str}`.slice(num).padStart(`${str}`.length, mask);
// mask('1234567890', 3, '*'); // ***4567890

// 21. Uppercase the first character of each word in a string
export const uppercaseWords = (str: string): string => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
// uppercaseWords('hello world'); // 'Hello World'
