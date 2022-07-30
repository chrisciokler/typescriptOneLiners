// 1. Cast a value as an array
export const castArray = <T, _>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);
// castArray(1); // [1]
// castArray([1, 2, 3]); // [1, 2, 3]

// 2. Check if an array is empty
export const isEmpty = <T, _>(arr: T[]): boolean => Array.isArray(arr) && !arr.length;
// isEmpty([]); // true
// isEmpty([1, 2, 3]); // false

// 3. Clone an array
export const clone = <T, _>(arr: T[]): T[] => [...arr];
// clone([1,2,3]); // [1,2,3]

// 4. Compare two arrays
export const isEqual = <T, _>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);
// isEqual([1, 2, 3], [1, 2, 3]); // true
// isEqual([1, 2, 3], [1, '2', 3]); // false

// 5. Compare two arrays regardless of order
export const isEqualWithoutOrder = <T, _>(a: T[], b: T[]): boolean =>
  JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
// isEqualWithoutOrder([1, 2, 3], [1, 2, 3]); // true
// isEqualWithoutOrder([1, 2, 3], [1, 3, 2]); // true
// isEqualWithoutOrder([1, 2, 3], [1, '2', 3]); // false

// 6. Convert an array of objects to a single object
export const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> =>
  arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
// toObject(
//     [
//         { id: '1', name: 'Alpha', gender: 'Male' },
//         { id: '2', name: 'Bravo', gender: 'Male' },
//         { id: '3', name: 'Charlie', gender: 'Female' },
//     ],
//     'id'
// );
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/

// 7. Convert an array of strings to numbers
export const toNumbers = (arr: string[]): number[] => arr.map(Number);
// toNumbers(['2', '3', '4']); // [2, 3, 4]

// 8. Count by the properties of an array of objects
export const countBy = <T extends Record<string, string>, K extends keyof T>(
  arr: T[],
  prop: K
): Record<string, number> =>
  arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>);
// countBy(
//   [
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' },
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' },
//     { branch: 'bmw', model: 'x7', year: '2020' }
//   ],
//   'branch'
// );
// { 'audi': 2, 'ford': 2, 'bmw': 1 }

// 9. Count the occurrences of a value in an array
export const countOccurrences = <T, _>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2

// 10. Count the occurrences of array elements
export const countOccurrencesElements = <T extends string | number>(arr: T[]): Record<T, number> =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {} as Record<T, number>);
// countOccurrencesElements([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }

// 11. Create an array of cumulative sum
export const accumulate = (arr: number[]): number[] =>
  arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
// accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]

// 12. Create an array of numbers in the given range
export const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map((i) => i + min);
// range(5, 10); // [5, 6, 7, 8, 9, 10]

// 13. Find the closest number from an array
export const closest = (arr: number[], n: number): number => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
// closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33

// 14. Find the index of the last matching item of an array
export const lastIndex = <T, _>(arr: T[], predicate: (a: T) => boolean): number =>
  arr.map((item) => predicate(item)).lastIndexOf(true);
// lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
// lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5

// 15. Find the index of the maximum item of an array
export const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
// indexOfMax([1, 3, 9, 7, 5]); // 2
// indexOfMax([1, 3, 7, 7, 5]); //

// 16. Find the index of the minimum item of an array
export const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
// indexOfMin([6, 4, 8, 2, 10]); // 3
// indexOfMin([6, 4, 2, 2, 10]); // 2

//  17. Find the length of the longest string in an array
export const findLongest = (words: string[]): number => Math.max(...words.map((el) => el.length));
// findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6

// 18. Find the maximum item of an array by given key
export const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
  arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T);
// const people = [
//   { name: 'Bar', age: 24 },
//   { name: 'Baz', age: 32 },
//   { name: 'Foo', age: 42 },
//   { name: 'Fuzz', age: 36 }
// ];
// maxBy(people, 'age'); // { name: 'Foo', age: 42 }

// 19. Find the maximum item of an array
export const max = (arr: number[]): number => Math.max(...arr);
// max([1, 3, 9, 7, 5]); // 9

// 20. Find the minimum item of an array by given key
export const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
  arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T);
//   const people = [
//     { name: 'Bar', age: 24 },
//     { name: 'Baz', age: 32 },
//     { name: 'Foo', age: 42 },
//     { name: 'Fuzz', age: 36 },
// ];
// minBy(people, 'age'); // { name: 'Bar', age: 24 }

// 21. Find the minimum item of an array
export const min = (arr: number[]): number => Math.min(...arr);
// min([1, 3, 9, 7, 5]); // 1

// 22. Get all arrays of consecutive elements
export const getConsecutiveArrays = <T, _>(arr: T[], size: number): T[][] =>
  size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));
// getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
// getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
// getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []

// 23. Get all n-th items of an array
export const getNthItems = <T, _>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);
// getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
// getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]

// 23. Get all subsets of an array
export const getSubsets = <T>(arr: T[]): T[][] =>
  arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][]);
// getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
// getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// 24. Get indices of a value in an array
export const indices = <T>(arr: T[], value: T): number[] =>
  arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[]);
//   indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
// indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []

// 25. Get the average of an array
export const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;
// average([1, 2, 3, 4, 5]); // 3

// 26. Get the intersection of arrays
export const getIntersection = <T, _>(a: T[], ...arr: T[][]): T[] =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
// getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
// getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]

// 27. Get the rank of an array of numbers
export const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
// ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
// ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
// ranking([80, 80, 80, 50]); // [1, 1, 1, 4]

// 28. Get the sum of an array of numbers
export const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
// sun([1, 2, 3, 4, 5]); // 15

// 29. Get the unique values of an array
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
// unique([1, 2, 3, 1, 4, 4, 5]); // [1, 2, 3, 4, 5]

// 30. Get union of arrays
export const union = <T, _>(...arr: T[][]): T[] => [...new Set(arr.flat())];
// union([1, 2], [2, 3], [3]); // [1, 2, 3]

// 31. Group an array of objects by a key
export const groupBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> =>
  arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as Record<string, T[]>);
// groupBy(
//   [
//     { branch: 'audi', model: 'q8', year: '2019' },
//     { branch: 'audi', model: 'rs7', year: '2020' },
//     { branch: 'ford', model: 'mustang', year: '2019' },
//     { branch: 'ford', model: 'explorer', year: '2020' },
//     { branch: 'bmw', model: 'x7', year: '2020' }
//   ],
//   'branch'
// );

/*
{
    audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
        { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' }
    ],
}
*/

// 32. Intersperse element between elements
export const intersperse = <T>(a: T[], s: T): T[] => [...Array(2 * a.length - 1)].map((_, i) => (i % 2 ? s : a[i / 2]));
// intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
// intersperse([<li>A</li>, <li>B</li>, <li>C</li>], <li>/</li>); // [<li>A</li>, <li>/</li>, <li>B</li>, <li>/</li>, <li>C</li>]

// 33. Merge two arrays
export const merge = <T, _>(a: T[], b: T[]): T[] => [...a, ...b];
// merge([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// 34. Partition an array based on a condition
// export const partition = <T, _>(arr: T[], criteria: (a: T) => boolean): T[][] =>
//   arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
// partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]

// 35. Remove duplicate values in an array
export const removeDuplicate = <T, _>(arr: T[]): T[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
// removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']); //  ['h', 'e', 'w', 'r', 'd']

// 36. Remove falsy values from array
export const removeFalsy = <T, _>(arr: T[]): T[] => arr.filter(Boolean);
// ['a string', true, 5, 'another string']

// 37. Repeat an array
export const repeat = <T, _>(arr: T[], n: number): T[] => Array(n).fill(arr).flat();
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]

// 38. Shuffle an array
export const shuffle = <T, _>(arr: T[]): T[] =>
  arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
// shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]

// 39. Sort an array of items by given key
export const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] =>
  arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
// const people = [
//   { name: 'Foo', age: 42 },
//   { name: 'Bar', age: 24 },
//   { name: 'Fuzz', age: 36 },
//   { name: 'Baz', age: 32 }
// ];
// sortBy(people, 'age');

//  [
//      { name: 'Bar', age: 24 },
//      { name: 'Baz', age: 32 },
//      { name: 'Fuzz', age: 36 },
//      { name: 'Foo', age: 42 },
//  ]

// 40. Sort an array of numbers
export const sort = (arr: number[]): number[] => arr.sort((a, b) => a - b);
// sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]

// 41. Split an array into chunks
export const chunk = <T>(arr: T[], size: number): T[][] =>
  arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][]);
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]

// 42. Swap the rows and columns of a matrix
export const transpose = <T>(matrix: T[][]): T[][] => matrix[0].map((col, i) => matrix.map((row) => row[i]));
// transpose([
//   // [
//   [1, 2, 3], //      [1, 4, 7],
//   [4, 5, 6], //      [2, 5, 8],
//   [7, 8, 9] //      [3, 6, 9],
// ]); //  ]

// 43. Swap two array items
export const swapItems = <T, _>(a: T[], i: number, j: number): T[] =>
  (a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
// swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
