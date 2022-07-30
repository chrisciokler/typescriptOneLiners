
# OneLiners

**OneLiners are short snippets of code that are used in many places in the codebase. This is a collection of 150+ one-liners written in typescript.**

## Table of content <a name="table"></a>

- [Array one liners](#array)
- [Date one liners](#date)
- [Functions one liners](#function)
- [Math one liners](#math)
- [Misc one liners](#misc)
- [Objects one liners](#object)
- [String one liners](#string)

<br/>
<br/>

:pray: Hope you like :+1: this post, let's get down to business. :rocket:

<br/>
<br/>
<br/>

## Array one liners [:point_up:](#table) <a name="array"></a>

---

<br/>
<br/>

### 1. Cast a value as an array [](#cast-array)

```typescript
export const castArray = <T, _>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);
// castArray(1); // [1]
// castArray([1, 2, 3]); // [1, 2, 3]
```

### 2. Check if an array is empty

```typescript
export const isEmpty = <T, _>(arr: T[]): boolean => Array.isArray(arr) && !arr.length;
// isEmpty([]); // true
// isEmpty([1, 2, 3]); // false
```

### 3. Clone an array

```typescript
export const clone = <T, _>(arr: T[]): T[] => [...arr];
// clone([1,2,3]); // [1,2,3]
```

### 4. Compare two arrays

```typescript
export const isEqual = <T, _>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);
// isEqual([1, 2, 3], [1, 2, 3]); // true
// isEqual([1, 2, 3], [1, '2', 3]); // false
```

### 5. Compare two arrays regardless of order

```typescript
export const isEqualWithoutOrder = <T, _>(a: T[], b: T[]): boolean =>
JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
// isEqualWithoutOrder([1, 2, 3], [1, 2, 3]); // true
// isEqualWithoutOrder([1, 2, 3], [1, 3, 2]); // true
// isEqualWithoutOrder([1, 2, 3], [1, '2', 3]); // false
```

### 6. Convert an array of objects to a single object

```typescript
export const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> =>
arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});
// toObject(
// [
// { id: '1', name: 'Alpha', gender: 'Male' },
// { id: '2', name: 'Bravo', gender: 'Male' },
// { id: '3', name: 'Charlie', gender: 'Female' },
// ],
// 'id'
// );
{
'1': { id: '1', name: 'Alpha', gender: 'Male' },
'2': { id: '2', name: 'Bravo', gender: 'Male' },
'3': { id: '3', name: 'Charlie', gender: 'Female' },
}
```

### 7. Convert an array of strings to numbers

```typescript
export const toNumbers = (arr: string[]): number[] => arr.map(Number);
// toNumbers(['2', '3', '4']); // [2, 3, 4]
```

### 8. Count by the properties of an array of objects

```typescript
export const countBy = <T extends Record<string, string>, K extends keyof T>(
  arr: T[],
  prop: K
): Record<string, number> =>
  arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>);
// countBy(
// [
// { branch: 'audi', model: 'q8', year: '2019' },
// { branch: 'audi', model: 'rs7', year: '2020' },
// { branch: 'ford', model: 'mustang', year: '2019' },
// { branch: 'ford', model: 'explorer', year: '2020' },
// { branch: 'bmw', model: 'x7', year: '2020' }
// ],
// 'branch'
// );
// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```

### 9. Count the occurrences of a value in an array

```typescript
export const countOccurrences = <T, _>(arr: T[], val: T): number => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
```

### 10. Count the occurrences of array elements

```typescript
export const countOccurrencesElements = <T extends string | number>(arr: T[]): Record<T, number> =>
  arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {} as Record<T, number>);
// countOccurrencesElements([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
```

### 11. Create an array of cumulative sum

```typescript
export const accumulate = (arr: number[]): number[] =>
  arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
// accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
```

### 12. Create an array of numbers in the given range

```typescript
export const range = (min: number, max: number): number[] => [...Array(max - min + 1).keys()].map((i) => i + min);
// range(5, 10); // [5, 6, 7, 8, 9, 10]
```

### 13. Find the closest number from an array

```typescript
export const closest = (arr: number[], n: number): number => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];
// closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50); // 33
```

### 14. Find the index of the last matching item of an array

```typescript
export const lastIndex = <T, _>(arr: T[], predicate: (a: T) => boolean): number =>
arr.map((item) => predicate(item)).lastIndexOf(true);
// lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4
// lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], (i) => i > 6); // 5
```

### 15. Find the index of the maximum item of an array

```typescript
export const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
// indexOfMax([1, 3, 9, 7, 5]); // 2
// indexOfMax([1, 3, 7, 7, 5]); //
```

### 16. Find the index of the minimum item of an array

```typescript
export const indexOfMin = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
// indexOfMin([6, 4, 8, 2, 10]); // 3
// indexOfMin([6, 4, 2, 2, 10]); // 2
```

### 17. Find the length of the longest string in an array

```typescript
export const findLongest = (words: string[]): number => Math.max(...words.map((el) => el.length));
// findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
```

### 18. Find the maximum item of an array by given key

```typescript
export const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
  arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T);
// const people = [
// { name: 'Bar', age: 24 },
// { name: 'Baz', age: 32 },
// { name: 'Foo', age: 42 },
// { name: 'Fuzz', age: 36 }
// ];
// maxBy(people, 'age'); // { name: 'Foo', age: 42 }
```

### 19. Find the maximum item of an array

```typescript
export const max = (arr: number[]): number => Math.max(...arr);
// max([1, 3, 9, 7, 5]); // 9
```

### 20. Find the minimum item of an array by given key

```typescript
export const minBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
  arr.reduce((a, b) => (a[key] < b[key] ? a : b), {} as T);
// const people = [
// { name: 'Bar', age: 24 },
// { name: 'Baz', age: 32 },
// { name: 'Foo', age: 42 },
// { name: 'Fuzz', age: 36 },
// ];
// minBy(people, 'age'); // { name: 'Bar', age: 24 }
```

### 21. Find the minimum item of an array

```typescript
export const min = (arr: number[]): number => Math.min(...arr);
// min([1, 3, 9, 7, 5]); // 1
```

### 22. Get all arrays of consecutive elements

```typescript
export const getConsecutiveArrays = <T, _>(arr: T[], size: number): T[][] =>
  size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));
// getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
// getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
// getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
```

### 23. Get all n-th items of an array

```typescript
export const getNthItems = <T, _>(arr: T[], nth: number): T[] => arr.filter((_, i) => i % nth === nth - 1);
// getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2); // [2, 4, 6, 8]
// getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [3, 6, 9]
```

### 24. Get indices of a value in an array

```typescript
export const indices = <T>(arr: T[], value: T): number[] =>
  arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[]);
// indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
// indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
```

### 25. Get the average of an array

```typescript
export const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;
// average([1, 2, 3, 4, 5]); // 3
```

### 26. Get the intersection of arrays

```typescript
export const getIntersection = <T, _>(a: T[], ...arr: T[][]): T[] =>
[...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
// getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
// getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]
```

### 27. Get the rank of an array of numbers

```typescript
export const ranking = (arr: number[]): number[] => arr.map((x, y, z) => z.filter((w) => w > x).length + 1);
// ranking([80, 65, 90, 50]); // [2, 3, 1, 4]
// ranking([80, 80, 70, 50]); // [1, 1, 3, 4]
// ranking([80, 80, 80, 50]); // [1, 1, 1, 4]
```

### 28. Get the sum of an array of numbers

```typescript
export const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
// sun([1, 2, 3, 4, 5]); // 15
```

### 29. Get the unique values of an array

```typescript
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
// unique([1, 2, 3, 1, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

### 30. Get union of arrays

```typescript
export const union = <T, _>(...arr: T[][]): T[] => [...new Set(arr.flat())];
// union([1, 2], [2, 3], [3]); // [1, 2, 3]
```

### 31. Group an array of objects by a key

```typescript
export const groupBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T[]> =>
  arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {} as Record<string, T[]>);
// groupBy(
// [
// { branch: 'audi', model: 'q8', year: '2019' },
// { branch: 'audi', model: 'rs7', year: '2020' },
// { branch: 'ford', model: 'mustang', year: '2019' },
// { branch: 'ford', model: 'explorer', year: '2020' },
// { branch: 'bmw', model: 'x7', year: '2020' }
// ],
// 'branch'
// );
{
// audi: [
// { branch: 'audi', model: 'q8', year: '2019' },
// { branch: 'audi', model: 'rs7', year: '2020' }
// ],
// bmw: [
// { branch: 'bmw', model: 'x7', year: '2020' }
// ],
// ford: [
// { branch: 'ford', model: 'mustang', year: '2019' },
// { branch: 'ford', model: 'explorer', year: '2020' }
// ],
// }
```

### 32. Intersperse element between elements

```typescript
export const intersperse = <T>(a: T[], s: T): T[] => [...Array(2 * a.length - 1)].map((_, i) => (i % 2 ? s : a[i / 2]));
// intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
// intersperse([<li>A</li>, <li>B</li>, <li>C</li>], <li>/</li>); // [<li>A</li>, <li>/</li>, <li>B</li>, <li>/</li>, <li>C</li>]
```

### 33. Merge two arrays

```typescript
export const merge = <T, _>(a: T[], b: T[]): T[] => [...a, ...b];
// merge([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
```

### 34. Partition an array based on a condition

```typescript
// export const partition = <T, _>(arr: T[], criteria: (a: T) => boolean): T[][] =>
// arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
// partition([1, 2, 3, 4, 5], (n) => n % 2); // [[1, 3, 5], [2, 4]]
```

### 35. Remove duplicate values in an array

```typescript
export const removeDuplicate = <T, _>(arr: T[]): T[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
// removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']); // ['h', 'e', 'w', 'r', 'd']
```

### 36. Remove falsy values from array

```typescript
export const removeFalsy = <T, _>(arr: T[]): T[] => arr.filter(Boolean);
// ['a string', true, 5, 'another string']
```

### 37. Repeat an array

```typescript
export const repeat = <T, _>(arr: T[], n: number): T[] => Array(n).fill(arr).flat();
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```

### 38. Shuffle an array

```typescript
export const shuffle = <T, _>(arr: T[]): T[] =>
arr
.map((a) => ({ sort: Math.random(), value: a }))
.sort((a, b) => a.sort - b.sort)
.map((a) => a.value);
// shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```

### 39. Sort an array of items by given key

```typescript
export const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] =>
  arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
// const people = [
// { name: 'Foo', age: 42 },
// { name: 'Bar', age: 24 },
// { name: 'Fuzz', age: 36 },
// { name: 'Baz', age: 32 }
// ];
// sortBy(people, 'age');

// [
// { name: 'Bar', age: 24 },
// { name: 'Baz', age: 32 },
// { name: 'Fuzz', age: 36 },
// { name: 'Foo', age: 42 },
// ]
```

### 40. Sort an array of numbers

```typescript
export const sort = (arr: number[]): number[] => arr.sort((a, b) => a - b);
// sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]
```

### 41. Split an array into chunks

```typescript
export const chunk = <T>(arr: T[], size: number): T[][] =>
  arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), [] as T[][]);
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]
```

### 42. Swap the rows and columns of a matrix

```typescript
export const transpose = <T>(matrix: T[][]): T[][] => matrix[0].map((col, i) => matrix.map((row) => row[i]));
// transpose([
// // [
// [1, 2, 3], // [1, 4, 7],
// [4, 5, 6], // [2, 5, 8],
// [7, 8, 9] // [3, 6, 9],
// ]); // ]
```

### 43. Swap two array items

```typescript
export const swapItems = <T, _>(a: T[], i: number, j: number): T[] =>
(a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)]) || a;
// swapItems([1, 2, 3, 4, 5], 1, 4); // [1, 5, 3, 4, 2]
```

### 44. Get all subsets of an array

```typescript
export const getSubsets = <T>(arr: T[]): T[][] =>
  arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][]);
// getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
// getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

<br/>
<br/>

## Date one liners [:point_up:](#table) <a name="date"></a>

---

<br/>
<br/>

### 1. Add AM PM suffix to an hour

```typescript
export const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
// suffixAmPm(0); // '12am'
// suffixAmPm(5); // '5am'
// suffixAmPm(12); // '12pm'
// suffixAmPm(15); // '3pm'
// suffixAmPm(23); // '11pm'
```

### 2. Calculate the number of difference days between two dates

```typescript
export const diffDays = (date: Date, otherDate: Date): number =>
Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24));
// diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839
```

### 3. Calculate the number of months between two dates

```typescript
export const monthDiff = (startDate: Date, endDate: Date): number =>
Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
// monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12
```

### 4. Compare two dates

```typescript
export const compare = (a: Date, b: Date): boolean => a.getTime() > b.getTime();
// compare(new Date('2020-03-30'), new Date('2020-01-01')); // true
```

### 5. Convert a date to YYYY-MM-DD format

```typescript
export const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);
// formatYmd(new Date()); // 2020-05-06
```

### 6. Convert a date to YYYY-MM-DD HH:MM:SS format

```typescript
export const formatYmdHis = (date: Date): string => date.toISOString().slice(0, 19);
// formatYmdHis(new Date()); // 2020-05-06T15:00:00.000Z
```

### 7. Convert seconds to hh:mm:ss format

```typescript
export const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8);
// formatSeconds(200); // 00:03:20
// formatSeconds(500); // 00:08:20
```

### 8. Extract year, month, day, hour, minute, second and millisecond from a date

```typescript
export const extract = (date: Date): string[] =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);
// extract(new Date()); // ['2020', '05', '06', '15', '00', '00', '00']
```

### 9. Format a date for the given locale

```typescript
export const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);
// format(new Date(), 'pt-BR'); // 06/05/2020
```

### 10. Get the current quarter of a date

```typescript
export const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3);
// getQuarter(new Date('2020-01-01')); // 1
```

### 11. Get the current timestamp in seconds

```typescript
export const tseconds = (): number => Math.floor(new Date().getTime() / 1000);
// ts(); // 1588888888
```

### 12. Get the day of the year from a date

```typescript
export const dayOfYear = (date: Date): number =>
Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
// dayOfYear(new Date(2020, 04, 16)); // 137
```

### 13. Get the first date in the month of a date

```typescript
export const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1);
// getFirstDate(new Date('2020-01-01')); // 2020-01-01
```

### 14. Get the last date in the month of a date

```typescript
export const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0);
// getLastDate(new Date('2020-02-01')); // 2020-02-29
```

### 15. Get the month name of a date

```typescript
export const getMonthName = (date: Date): string =>
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][date.getmonth()];
// getMonthName(new Date('2020-01-01')); // January
```

### 16.Get the number of days in given month

```typescript
export const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();
// daysInMonth(2, 2020); // 29
```

### 17. Get the timezone string

```typescript
export const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;
// getTimezone(); // 'Asia/Saigon'
```

### 18. Get the tomorrow date

```typescript
export const tomorrow: Date = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());
// tomorrow; // 2020-05-07
```

### 19. Get the total number of days in a year

```typescript
export const numberOfDays = (year: number): number => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365);
// numberOfDays(2020); // 366
```

### 20. Get the weekday of a date

```typescript
export const getWeekday = (date: Date): string =>
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getday()];
// getWeekday(new Date('2020-01-01')); // Sunday
```

### 21. Get the yesterday date

```typescript
export const yesterday: Date = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
// yesterday; // 2020-05-06
```

### 22. Initialize the current date but set time to midnight

```typescript
export const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0));
// midnightOfToday(); // 2020-05-06T00:00:00.000Z
```

### 23. Sort an array of dates

```typescript
export const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime());
// sortDescending([new Date('2020-01-01'), new Date('2020-01-02')]); // [new Date('2020-01-02'), new Date('2020-01-01')]
export const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime());
// sortAscending([new Date('2020-01-01'), new Date('2020-01-02')]); // [new Date('2020-01-01'), new Date('2020-01-02')]
```

<br/>
<br/>

## Functions one liners [:point_up:](#table) <a name="function"></a>

---

<br/>
<br/>

### 1. Box handler

```typescript
export const boxHandler = (x: any): { next: (f: any) => any; done: (f: any) => any } => ({
  next: (f: any) => boxHandler(f(x)),
  done: (f: any) => f(x)
});
// const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
// const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

// const getDiscountPrice = (price, discount) =>
// boxHandler(getMoney(price))
// .done((cents) => boxHandler(getPercent(discount)).next((save) => cents - cents * save))
// .done((res) => res);

// getDiscountPrice('$6.00', '20%'); // 4.8
```

### 2. Check if a value is a function

```typescript
export const isFunction = (v: any): boolean =>
  ['[object Function]', '[object GeneratorFunction]', '[object AsyncFunction]', '[object Promise]'].includes(
    Object.prototype.toString.call(v)
  );
// isFunction(function () {}); // true
// isFunction(function* () {}); // true
// isFunction(async function () {}); // true
```

### 3. Check if a value is a generator function

```typescript
export const isGeneratorFunction = (v: any): boolean =>
  Object.prototype.toString.call(v) === '[object GeneratorFunction]';
// isGeneratorFunction(function () {}); // false
// isGeneratorFunction(function* () {}); // true
```

### 4. Check if a value is an async function

```typescript
export const isAsyncFunction = (v: any): boolean => Object.prototype.toString.call(v) === '[object AsyncFunction]';
// isAsyncFunction(function () {}); // false
// isAsyncFunction(function* () {}); // false
// isAsyncFunction(async function () {}); // true
```

### 5. Compose functions from left to right

```typescript
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
```

### 6. Compose functions from right to left

```typescript
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
```

### 7. Curry a function

```typescript
export const curry = (fn: any, ...args: any[]): any =>
  fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// const sum = (a, b, c) => a + b + c;
// curry(sum)(1)(2)(3); // 6
// curry(sum)(1, 2, 3); // 6
// curry(sum, 1)(2, 3); // 6
// curry(sum, 1)(2)(3); // 6
// curry(sum, 1, 2)(3); // 6
// curry(sum, 1, 2, 3); // 6
```

### 8. Memoize a function

```typescript
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
```

<br/>
<br/>

## Math one liners [:point_up:](#table) <a name="math"></a>

---

<br/>
<br/>

### 1. Calculate the angle of a line defined by two points

```typescript
interface Point {
x: number;
y: number;
}

export const radiansAngle = (p1: Point, p2: Point): number => Math.atan2(p2.y - p1.y, p2.x - p1.x);
// radiansAngle({ x: 0, y: 0 }, { x: 0, y: 1 }); //
export const degreesAngle = (p1: Point, p2: Point): number => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
// degreesAngle({ x: 0, y: 0 }, { x: 0, y: 3 }); // 90
```

### 2. Calculate the distance between two points

```typescript
interface Point {
  x: number;
  y: number;
}

export const distance = (p1: Point, p2: Point): number =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
// distance({ x: 0, y: 0 }, { x: 0, y: 1 }); // 1
```

### 3. Calculate the linear interpolation between two numbers

```typescript
export const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b;
// lerp(0, 1, 0.5); // 0.5
```

### 4. Calculate the midpoint between two points

```typescript
interface Point {
  x: number;
  y: number;
}

export const midpoint = (p1: Point, p2: Point): number[] => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
// midpoint({ x: 0, y: 0 }, { x: 0, y: 1 }); // [0, 0.5]
```

### 5. Calculate the slope between two points

```typescript
interface Point {
  x: number;
  y: number;
}

export const slope = (p1: Point, p2: Point): number => (p2.y - p1.y) / (p2.x - p1.x);
// slope({ x: 0, y: 0 }, { x: 0, y: 1 }); // 1
```

### 6. Calculate the perpendicular slope between two points

```typescript
interface Point {
  x: number;
  y: number;
}

export const perpendicularSlope = (p1: Point, p2: Point): number => -1 / slope(p1, p2);
// perpendicularSlope({ x: 0, y: 0 }, { x: 0, y: 1 }); // -1
```

### 7. Check if a point is inside a rectangle

```typescript
interface Point {
  x: number;
  y: number;
}

interface Rect {
  bottom: number;
  left: number;
  top: number;
  right: number;
}

export const isInside = (point: Point, rect: Rect): boolean =>
  point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;

// isInside({ x: 0, y: 0 }, { left: 0, top: 0, right: 1, bottom: 1 }); // true
```

### 8. Check if a point is inside a circle

```typescript
interface Point {
  x: number;
  y: number;
}

export const isInsideCircle = (point: Point, center: Point, radius: number): boolean => {
  const distance = Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2));
  return distance < radius;
};

// isInsideCircle({ x: 0, y: 0 }, { x: 0, y: 0 }, 1); // true
```

### 9. Check if a rectangle contains other one

```typescript
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const contains = (a: Rect, b: Rect): boolean => a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;
// contains({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true
```

### 10. Check if a rectangle overlaps another one

```typescript
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const overlaps = (a: Rect, b: Rect): boolean => !(a.x2 < b.x1 || a.x1 > b.x2 || a.y2 < b.y1 || a.y1 > b.y2);
// overlaps({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true
```

### 11. Check if a rectangle is inside another one

```typescript
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isInsideRect = (a: Rect, b: Rect): boolean => a.x1 >= b.x1 && a.y1 >= b.y1 && a.x2 <= b.x2 && a.y2 <= b.y2;
// isInsideRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true
```

### 12. Check if a rectangle is outside another one

```typescript
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isOutsideRect = (a: Rect, b: Rect): boolean =>
  a.x1 <= b.x1 || a.y1 <= b.y1 || a.x2 >= b.x2 || a.y2 >= b.y2;
// isOutsideRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true
```

### 13. Check if a rectangle is touching another one

```typescript
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isTouchingRect = (a: Rect, b: Rect): boolean =>
  a.x1 === b.x1 || a.x2 === b.x2 || a.y1 === b.y1 || a.y2 === b.y2;
// isTouchingRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true
```

### 14. Convert degrees to radians

```typescript
export const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;
// degsToRads(90); // 1.5707963267948966
```

### 15. Convert radians to degrees

```typescript
export const radsToDegs = (rad: number): number => (rad * 180.0) / Math.PI;
// radsToDegs(1.5707963267948966); // 90
```

### 16. Normalize the ratio of a number in a range

```typescript
export const normalizeRatio = (value: number, min: number, max: number): number => (value - min) / (max - min);
// normalizeRatio(0, 0, 1); // 0
```

### 17. Round a number to the nearest multiple of a given value

```typescript
export const roundNearest = (value: number, nearest: number): number => Math.round(value / nearest) * nearest;
// roundNearest(100, 30); // 90
// roundNearest(200, 30); // 210
// roundNearest(200, 40); // 200
```

### 18. Round a number to a given number of decimal places

```typescript
export const roundToDecimal = (value: number, decimals: number): number => {
const factor = Math.pow(10, decimals);
return Math.round(value * factor) / factor;
};
// roundToDecimal(1.2345, 2); // 1.23
```

### 19. Calculate the average of arguments

```typescript
export const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length;
// average(1, 2, 3, 4); // 2.5
```

### 20.Calculate the division of arguments

```typescript
export const division = (...args: number[]): number => args.reduce((a, b) => a / b);
// division(1, 2, 3, 4); // 0.04166666666666666
```

### 21. Calculate the factorial of a number

```typescript
export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
// factorial(2); // 2
// factorial(3); // 6
// factorial(4); // 24
// factorial(5); // 120
// factorial(6); // 720
```

### 22. Calculate the mod of collection index

```typescript
export const mod = (a: number, b: number): number => ((a % b) + b) % b;
// mod(-1, 5); // 4
// mod(3, 5); // 3
// mod(6, 5); // 1
```

### 23. Calculate the remainder of division of arguments

```typescript
export const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);
// remainder(1, 2, 3, 4); // 1
```

### 24. Calculate the sum of arguments

```typescript
export const sum = (...args: number[]): number => args.reduce((a, b) => a + b);
// sum(1, 2, 3, 4); // 10
```

### 25. Clamp a number between two values

```typescript
export const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(min, Math.min(max, val));
// clamp(199, 10, 25); // 25
```

### 26. Compute the greatest common divisor between two numbers

```typescript
export const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
// gcd(10, 15); // 5
```

### 27. Compute the least common multiple between two numbers

```typescript
export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
// lcm(10, 15); // 30
```

### 28. Compute the median of a collection of numbers

```typescript
export const median = (...args: number[]): number => {
  const sorted = args.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};
// median(1, 2, 3, 4); // 2.5
```

### 29. Multiply arguments

```typescript
export const mul = (...args: number[]): number => args.reduce((a, b) => a * b);
// mul(1, 2, 3, 4); // 24
```

### 30. Subtract arguments

```typescript
export const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);
// subtract(1, 2, 3, 4); // -8
```

<br/>
<br/>

## Misc one liners [:point_up:](#table) <a name="misc"></a>

---

<br/>
<br/>

### 1. Check if the code is running in Jest

```typescript
export const isRunningInJest: boolean = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
// isRunningInJest; // true
```

### 2. Check if the code is running in NodeJS

```typescript
export const isNode: boolean =
  typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
// isNode; // true
```

### 3. Check if the code is running in the browser

```typescript
export const isBrowser: boolean = typeof window === 'object' && typeof document === 'object';
// isBrowser; // true
```

### 4. Clear all cookies

```typescript
export const clearCookies = (): void =>
  document.cookie
    .split(';')
    .forEach(
      (c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );
// clearCookies();
```

### 5. Convert 3 digits color to 6 digits color

```typescript
export const toFullHexColor = (color: string): string =>
  `#${(color.startsWith('#') ? color.slice(1) : color)
    .split('')
    .map((c) => `${c}${c}`)
    .join('')}`;
// toFullHexColor('123'); // '#112233'
// toFullHexColor('#123'); // '#112233'
// toFullHexColor('#abc'); // '#aabbcc'
```

### 6. Convert Celsius to Fahrenheit

```typescript
export const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
// celsiusToFahrenheit(15); // 59
// celsiusToFahrenheit(0); // 32
// celsiusToFahrenheit(-20); // -4
```

### 7. Convert Fahrenheit to Celsius

```typescript
export const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
// fahrenheitToCelsius(59); // 15
```

### 8. Convert Celsius to Kelvin

```typescript
export const celsiusToKelvin = (celsius: number): number => celsius + 273.15;
// celsiusToKelvin(15); // 298.15
// celsiusToKelvin(0); // 273.15
```

### 9. Convert Fahrenheit to Kelvin

```typescript
export const fahrenheitToKelvin = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9 + 273.15;
// fahrenheitToKelvin(59); // 298.15
```

### 10. Convert Kelvin to Celsius

```typescript
export const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;
// kelvinToCelsius(298.15); // 15
// kelvinToCelsius(273.15); // 0
```

### 11. Convert Kelvin to Fahrenheit

```typescript
export const kelvinToFahrenheit = (kelvin: number): number => (kelvin * 9) / 5 - 459.67;
// kelvinToFahrenheit(298.15); // 59
// kelvinToFahrenheit(273.15); // 32
```

### 12. Convert rgb color to hex

```typescript
export const rgbToHex = (red: number, green: number, blue: number): string =>
  `#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
// rgbToHex(0, 255, 255); // '#00ffff'
```

### 13. Convert hex color to rgb

```typescript
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
```

### 14. Convert object to URL parameters

```typescript
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
```

### 15. Decode a JWT token

```typescript
export const decodeJwt = (token: string): Record<string, string> => {
  const [, payload] = token.split('.');
  return JSON.parse(atob(payload));
};
// decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
// { sub: "1234567890", name: "John Doe", iat: 1516239022 }
```

### 16. Encode a JWT token

```typescript
export const encodeJwt = (obj: Record<string, string>): string => {
  const payload = JSON.stringify(obj);
  const base64Payload = btoa(payload);
  const base64Header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }));
  return `${base64Header}.${base64Payload}`;
};
// encodeJwt({ sub: "1234567890", name: "John Doe", iat: 1516239022 });
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
```

### 17. Detect dark mode

```typescript
export const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// isDarkMode; // true
```

### 18. Easing functions

```typescript
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
```

### 19. Emulate a dice throw

```typescript
export const throwdice = (): number => ~~(Math.random() * 6) + 1;
// throwdice(); // 4
// throwdice(); // 1
// throwdice(); // 6
```

### 20. Emulate a coin flip

```typescript
export const flipcoin = (): boolean => Math.random() < 0.5;
// flipcoin(); // true
```

### 21. Encode a URL

```typescript
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
```

### 22. Decode a URL

```typescript
export const decode = (url: string): string => decodeURIComponent(url.replace(/\+/g, '%20'));
// decode('https%3A%2F%2Fwww.google.com%2F'); // 'https://www.google.com/'
```

### 23. Get the current URL

```typescript
export const getUrl = (): string => window.location.href;
// getUrl(); // 'https://www.google.com/'
```

### 24. Get the first defined and non null argument

```typescript
export const coalesce = (...args: any[]): any[] => args.find((item) => ![undefined, null].includes(item));
// coalesce(undefined, null, 'helloworld', NaN); // 'helloworld'
```

### 25. Get the value of a param from a URL

```typescript
export const getParam = (url: string, param: string): string | null =>
  new URLSearchParams(new URL(url).search).get(param);
getParam('http://domain.com?message=hello', 'message'); // 'hello'
```

### 26. Get type of a variable in string

```typescript
export const getTypeOf = (obj: any): string => (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1];
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
```

### 27. Redirect the page to HTTPS if it is in HTTP

```typescript
export const redirectHttps = (): string => (location.protocol === 'https:' ? '' : (location.protocol = 'https:'));
```

### 28. Run Promises in sequence

```typescript
export const run = (promises: Promise<any>[]): Promise<any> =>
  promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
// run(promises).then((results) => {
// // `results` is an array of promise results in the same order
// });
```

### 29. Run Promises in parallel

```typescript
export const runParallel = (promises: Promise<any>[]): Promise<any> => Promise.all(promises);
// runParallel(promises).then((results) => {
// // `results` is an array of promise results in the same order
// });
```

### 30. Run Promises in parallel and return the results in the same order

```typescript
export const runParallelOrder = (promises: Promise<any>[]): Promise<any> =>
  Promise.all(promises).then((results) => results.reduce((p, c) => [...p, c], []));
// runParallelOrder(promises).then((results) => {
// // `results` is an array of promise results in the same order
// });
```

### 31. Wait for an amount of time

```typescript
export const wait = async (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));
// wait(1000).then(() => console.log('done'));
```

### 32. Add an ordinal suffix to a number

```typescript
export const addOrdinal = (n: number): string => `${n}${[, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;
// addOrdinal(1); // '1st'
// addOrdinal(2); // '2nd'
// addOrdinal(3); // '3rd'
// addOrdinal(11); // '11th'
// addOrdinal(12); // '13th'
// addOrdinal(13); // '13th'
```

### 33. Convert a number to equivalent characters

```typescript
export const toChars = (n: number): string =>
  `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
// toChars(0); // A
// toChars(1); // B
// toChars(25); // Z

// toChars(26); // AA
// toChars(27); // AB
// toChars(51); // AZ
```

<br/>
<br/>

## Objects one liners [:point_up:](#table) <a name="object"></a>

---

<br/>
<br/>

### 1.Check if multiple objects are equal

```typescript
export const isEqual = (...objects: object[]): boolean =>
  objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
// isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
// isEqual({ foo: 'bar' }, { bar: 'foo' }); // false
```

### 2. Extract values of a property from an array of objects

```typescript
export const pluck = (objs: any[], property: any) => objs.map((obj) => obj[property]);
// pluck(
// [
// { name: 'John', age: 20 },
// { name: 'Smith', age: 25 },
// { name: 'Peter', age: 30 }
// ],
// 'name'
// ); // ['John', 'Smith', 'Peter']
```

### 3. Get the value at given path of an object

```typescript
export const getValue = (path: string, obj: any) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
// getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
```

### 4. Remove all null and undefined properties from an object

```typescript
export const removeNullUndefined = (obj: Object) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
// removeNullUndefined({
// foo: null,
// bar: undefined,
// fuzz: 42,
// }); // { fuzz: 42 }
```

### 5. Shallow clone an object

```typescript
export const shallowCopy = (obj: Object): Object => ({ ...obj });
```

### 6. Sort an object by its properties

```typescript
export const sort = (obj: any) =>
  Object.keys(obj)
    .sort()
    .reduce((p: any, c: string) => ((p[c] = obj[c]), p), {});
// const colors = {
// white: '#ffffff',
// black: '#000000',
// red: '#ff0000',
// green: '#008000',
// blue: '#0000ff',
// };
// sort(colors);
// {
// black: '#000000',
// blue: '#0000ff',
// green: '#008000',
// red: '#ff0000',
// white: '#ffffff',
// }
```

<br/>
<br/>

## String one liners [:point_up:](#table) <a name="string"></a>

---

<br/>
<br/>

### 1. Capitalize a string

```typescript
export const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// capitalize('hello world'); // 'Hello world'
```

### 2. Check if a path is relative

```typescript
export const isRelative = (path: string): boolean => !/^([a-z]+:)?[\\/]/i.test(path);
// isRelative('/foo/bar/baz'); // false
// isRelative('C:\\foo\\bar\\baz'); // false
// isRelative('foo/bar/baz.txt'); // true
// isRelative('foo.md'); // true
```

### 3. Check if a string consists of a repeated character sequence

```typescript
export const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;
// consistsRepeatedSubstring('aa'); // true
// consistsRepeatedSubstring('aaa'); // true
// consistsRepeatedSubstring('ababab'); // true
// consistsRepeatedSubstring('abc'); // false
```

### 4. Check if a URL is absolute

```typescript
export const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
// isAbsoluteUrl('https://1loc.dev'); // true
// isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
// isAbsoluteUrl('1loc.dev'); // false
// isAbsoluteUrl('//1loc.dev'); // false
```

### 5. Check if two strings are anagram

```typescript
export const areAnagram = (str1: string, str2: string): boolean =>
  str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
// areAnagram('listen', 'silent'); // true
// areAnagram('they see', 'the eyes'); // true
// areAnagram('node', 'deno'); // true
```

### 6. Convert a base64 encoded string to an uint8 array

```typescript
export const base64ToUint8 = (str: string): Uint8Array => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
// base64ToUint8('SGVsbG8gV29ybGQ='); // Uint8Array [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
```

### 7. Convert a letter to associate emoji

```typescript
export const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
// letterToEmoji('a'); // 🇦
// letterToEmoji('b'); // 🇧
```

### 8. Convert a string to camelCase

```typescript
export const toCamelCase = (str: string): string =>
str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
// toCamelCase('background-color'); // backgroundColor
// toCamelCase('-webkit-scrollbar-thumb'); // WebkitScrollbarThumb
// toCamelCase('_hello_world'); // HelloWorld
// toCamelCase('hello_world'); // helloWorld
```

### 9. Convert a string to PascalCase

```typescript
export const toPascalCase = (str: string): string =>
  (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
// toPascalCase('hello world'); // 'HelloWorld'
// toPascalCase('hello.world'); // 'HelloWorld'
// toPascalCase('foo_bar-baz'); // FooBarBaz
```

### 10. Convert a string to URL slug

```typescript
export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
// slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
```

### 11. Convert a Windows file path to Unix path

```typescript
export const toUnixPath = (path: string): string => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');
// toUnixPath('./foo/bar/baz'); // foo/bar/baz
// toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
```

### 12. Convert an uint8 array to a base64 encoded string

```typescript
export const uint8ToBase64 = (arr: Uint8Array): string => Buffer.from(arr).toString('base64');
// uint8ToBase64(Uint8Array.from([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100])); // 'SGVsbG8gV29ybGQ='
```

### 13. Convert camelCase to kebab-case and vice versa

```typescript
export const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);
// kebabToCamel('background-color'); // 'backgroundColor'

export const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
// camelToKebab('backgroundColor'); // 'background-color'
```

### 14. Convert snake_case to camelCase

```typescript
export const snakeToCamel = (str: string): string =>
  str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
// snakeToCamel('HELLO_world'); // 'helloWorld'
```

### 15. Count the occurrences of a character in a string

```typescript
export const countOccurrences = (str: string, char: string): number => [...str].filter((item) => item === char).length;
// countOccurrences('a.b.c.d.e', '.'); // 4
```

### 16. Format a string

```typescript
export const format = (str: string, ...vals: string[]): string =>
  vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
// const template = 'My name is {0} and I am {1} years old';

// format(template, 'John', '30');
// // My name is John and I am 30 years old

// format(template, 'Jane', '20');
// // My name is Jane and I am 20 years old
```

### 17. Generate a hash of a string

```typescript
export const hash = (str: string): number =>
  str.split('').reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0);
// hash('hello'); // 99162322
```

### 18. Get the base URL without any parameters

```typescript
export const baseUrl = (url: string): string => url.split('?')[0];
// baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
```

### 19. Get the number of a character in a string

```typescript
export const characterCount = (str: string, char: string): number => str.split(char).length - 1;
// characterCount('192.168.1.1', '.'); // 3
// characterCount('star wars', 's'); // 2
```

### 20. Replace the first given number of characters of a string with another character

```typescript
export const mask = (str: string, num: number, mask: string): string =>
  `${str}`.slice(num).padStart(`${str}`.length, mask);
// mask(1234567890, 3, '*'); // ***4567890
```

### 21. Uppercase the first character of each word in a string

```typescript
export const uppercaseWords = (str: string): string => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
// uppercaseWords('hello world'); // 'Hello World'
```
