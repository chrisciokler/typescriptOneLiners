// 1.Check if multiple objects are equal
export const isEqual = (...objects: object[]): boolean =>
  objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));
// isEqual({ foo: 'bar' }, { foo: 'bar' }); // true
// isEqual({ foo: 'bar' }, { bar: 'foo' }); // false

// 2. Extract values of a property from an array of objects
export const pluck = (objs: any[], property: any) => objs.map((obj) => obj[property]);
// pluck(
//   [
//     { name: 'John', age: 20 },
//     { name: 'Smith', age: 25 },
//     { name: 'Peter', age: 30 }
//   ],
//   'name'
// ); // ['John', 'Smith', 'Peter']

// 3. Get the value at given path of an object
export const getValue = (path: string, obj: any) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
// getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';

// 4. Remove all null and undefined properties from an object
export const removeNullUndefined = (obj: Object) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
// removeNullUndefined({
//     foo: null,
//     bar: undefined,
//     fuzz: 42,
// }); // { fuzz: 42 }

// 5. Shallow clone an object
export const shallowCopy = (obj: Object): Object => ({ ...obj });

// 6. Sort an object by its properties
export const sort = (obj: any) =>
  Object.keys(obj)
    .sort()
    .reduce((p: any, c: string) => ((p[c] = obj[c]), p), {});
// const colors = {
//     white: '#ffffff',
//     black: '#000000',
//     red: '#ff0000',
//     green: '#008000',
//     blue: '#0000ff',
// };
// sort(colors);
/*
{
    black: '#000000',
    blue: '#0000ff',
    green: '#008000',
    red: '#ff0000',
    white: '#ffffff',
}
*/
