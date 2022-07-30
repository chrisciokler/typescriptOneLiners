// 1. Add AM PM suffix to an hour
export const suffixAmPm = (h: number): string => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "am" : "pm"}`;
// suffixAmPm(0); // '12am'
// suffixAmPm(5); // '5am'
// suffixAmPm(12); // '12pm'
// suffixAmPm(15); // '3pm'
// suffixAmPm(23); // '11pm'

// 2. Calculate the number of difference days between two dates
export const diffDays = (date: Date, otherDate: Date): number =>
  Math.ceil(Math.abs(date.valueOf() - otherDate.valueOf()) / (1000 * 60 * 60 * 24));
// diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839

// 3. Calculate the number of months between two dates
export const monthDiff = (startDate: Date, endDate: Date): number =>
  Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());
// monthDiff(new Date('2020-01-01'), new Date('2021-01-01')); // 12

// 4. Compare two dates
export const compare = (a: Date, b: Date): boolean => a.getTime() > b.getTime();
// compare(new Date('2020-03-30'), new Date('2020-01-01')); // true

// 5. Convert a date to YYYY-MM-DD format
export const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);
// formatYmd(new Date()); // 2020-05-06

// 6. Convert a date to YYYY-MM-DD HH:MM:SS format
export const formatYmdHis = (date: Date): string => date.toISOString().slice(0, 19);
// formatYmdHis(new Date()); // 2020-05-06T15:00:00.000Z

// 7. Convert seconds to hh:mm:ss format
export const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8);
// formatSeconds(200); // 00:03:20
// formatSeconds(500); // 00:08:20

// 8. Extract year, month, day, hour, minute, second and millisecond from a date
export const extract = (date: Date): string[] =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);
// extract(new Date()); // ['2020', '05', '06', '15', '00', '00', '00']

// 9. Format a date for the given locale
export const format = (date: Date, locale: string): string => new Intl.DateTimeFormat(locale).format(date);
// format(new Date(), 'pt-BR'); // 06/05/2020

// 10. Get the current quarter of a date
export const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3);
// getQuarter(new Date('2020-01-01')); // 1

// 11. Get the current timestamp in seconds
export const tseconds = (): number => Math.floor(new Date().getTime() / 1000);
//  ts(); // 1588888888

// 12. Get the day of the year from a date
export const dayOfYear = (date: Date): number =>
  Math.floor((date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf()) / (1000 * 60 * 60 * 24));
// dayOfYear(new Date(2020, 04, 16)); // 137

// 13. Get the first date in the month of a date
export const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1);
// getFirstDate(new Date('2020-01-01')); // 2020-01-01

// 14. Get the last date in the month of a date
export const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0);
// getLastDate(new Date('2020-02-01')); // 2020-02-29

// 15. Get the month name of a date
export const getMonthName = (date: Date): string =>
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];
// getMonthName(new Date('2020-01-01')); // January

// 16.Get the number of days in given month
export const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();
// daysInMonth(2, 2020); // 29

// 17. Get the timezone string
export const getTimezone = (): string => Intl.DateTimeFormat().resolvedOptions().timeZone;
// getTimezone(); // 'Asia/Saigon'

// 18. Get the tomorrow date
export const tomorrow: Date = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());
// tomorrow; // 2020-05-07

// 19. Get the total number of days in a year
export const numberOfDays = (year: number): number => (new Date(year, 1, 29).getDate() === 29 ? 366 : 365);
// numberOfDays(2020); // 366

// 20. Get the weekday of a date
export const getWeekday = (date: Date): string =>
  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
// getWeekday(new Date('2020-01-01')); // Sunday

// 21. Get the yesterday date
export const yesterday: Date = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
// yesterday; // 2020-05-06

// 22. Initialize the current date but set time to midnight
export const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0));
// midnightOfToday(); // 2020-05-06T00:00:00.000Z

// 23. Sort an array of dates
export const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime());
// sortDescending([new Date('2020-01-01'), new Date('2020-01-02')]); // [new Date('2020-01-02'), new Date('2020-01-01')]
export const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime());
// sortAscending([new Date('2020-01-01'), new Date('2020-01-02')]); // [new Date('2020-01-01'), new Date('2020-01-02')]
