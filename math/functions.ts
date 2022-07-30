// 1. Calculate the angle of a line defined by two points
interface Point {
  x: number;
  y: number;
}

export const radiansAngle = (p1: Point, p2: Point): number => Math.atan2(p2.y - p1.y, p2.x - p1.x);
// radiansAngle({ x: 0, y: 0 }, { x: 0, y: 1 }); //
export const degreesAngle = (p1: Point, p2: Point): number => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
// degreesAngle({ x: 0, y: 0 }, { x: 0, y: 3 }); // 90

// 2. Calculate the distance between two points
interface Point {
  x: number;
  y: number;
}

export const distance = (p1: Point, p2: Point): number =>
  Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
// distance({ x: 0, y: 0 }, { x: 0, y: 1 }); // 1

// 3. Calculate the linear interpolation between two numbers
export const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b;
// lerp(0, 1, 0.5); // 0.5

// 4. Calculate the midpoint between two points
interface Point {
  x: number;
  y: number;
}

export const midpoint = (p1: Point, p2: Point): number[] => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
// midpoint({ x: 0, y: 0 }, { x: 0, y: 1 }); // [0, 0.5]

// 5. Calculate the slope between two points
interface Point {
  x: number;
  y: number;
}

export const slope = (p1: Point, p2: Point): number => (p2.y - p1.y) / (p2.x - p1.x);
// slope({ x: 0, y: 0 }, { x: 0, y: 1 }); // 1

// 6. Calculate the perpendicular slope between two points
interface Point {
  x: number;
  y: number;
}

export const perpendicularSlope = (p1: Point, p2: Point): number => -1 / slope(p1, p2);
// perpendicularSlope({ x: 0, y: 0 }, { x: 0, y: 1 }); // -1

// 7. Check if a point is inside a rectangle
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

// 8. Check if a point is inside a circle
interface Point {
  x: number;
  y: number;
}

export const isInsideCircle = (point: Point, center: Point, radius: number): boolean => {
  const distance = Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2));
  return distance < radius;
};

// isInsideCircle({ x: 0, y: 0 }, { x: 0, y: 0 }, 1); // true

// 9. Check if a rectangle contains other one
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const contains = (a: Rect, b: Rect): boolean => a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2;
// contains({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true

// 10. Check if a rectangle overlaps another one
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const overlaps = (a: Rect, b: Rect): boolean => !(a.x2 < b.x1 || a.x1 > b.x2 || a.y2 < b.y1 || a.y1 > b.y2);
// overlaps({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true

// 11. Check if a rectangle is inside another one
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isInsideRect = (a: Rect, b: Rect): boolean => a.x1 >= b.x1 && a.y1 >= b.y1 && a.x2 <= b.x2 && a.y2 <= b.y2;
// isInsideRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true

// 12. Check if a rectangle is outside another one
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isOutsideRect = (a: Rect, b: Rect): boolean =>
  a.x1 <= b.x1 || a.y1 <= b.y1 || a.x2 >= b.x2 || a.y2 >= b.y2;
// isOutsideRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true

// 13. Check if a rectangle is touching another one
interface Rect {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export const isTouchingRect = (a: Rect, b: Rect): boolean =>
  a.x1 === b.x1 || a.x2 === b.x2 || a.y1 === b.y1 || a.y2 === b.y2;
// isTouchingRect({ x1: 0, y1: 0, x2: 1, y2: 1 }, { x1: 0, y1: 0, x2: 1, y2: 1 }); // true

// 14. Convert degrees to radians
export const degsToRads = (deg: number): number => (deg * Math.PI) / 180.0;
// degsToRads(90); // 1.5707963267948966

// 15. Convert radians to degrees
export const radsToDegs = (rad: number): number => (rad * 180.0) / Math.PI;
// radsToDegs(1.5707963267948966); // 90

// 16. Normalize the ratio of a number in a range
export const normalizeRatio = (value: number, min: number, max: number): number => (value - min) / (max - min);
// normalizeRatio(0, 0, 1); // 0

// 17. Round a number to the nearest multiple of a given value
export const roundNearest = (value: number, nearest: number): number => Math.round(value / nearest) * nearest;
// roundNearest(100, 30); // 90
// roundNearest(200, 30); // 210
// roundNearest(200, 40); // 200

// 18. Round a number to a given number of decimal places
export const roundToDecimal = (value: number, decimals: number): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};
// roundToDecimal(1.2345, 2); // 1.23

// 19. Calculate the average of arguments
export const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length;
// average(1, 2, 3, 4); // 2.5

// 20.Calculate the division of arguments
export const division = (...args: number[]): number => args.reduce((a, b) => a / b);
// division(1, 2, 3, 4); // 0.04166666666666666

// 21. Calculate the factorial of a number
export const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
// factorial(2); // 2
// factorial(3); // 6
// factorial(4); // 24
// factorial(5); // 120
// factorial(6); // 720

// 22. Calculate the mod of collection index
export const mod = (a: number, b: number): number => ((a % b) + b) % b;
// mod(-1, 5); // 4
// mod(3, 5); // 3
// mod(6, 5); // 1

// 23. Calculate the remainder of division of arguments
export const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);
// remainder(1, 2, 3, 4); // 1

// 24. Calculate the sum of arguments
export const sum = (...args: number[]): number => args.reduce((a, b) => a + b);
// sum(1, 2, 3, 4); // 10

// 25. Clamp a number between two values
export const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(min, Math.min(max, val));
// clamp(199, 10, 25); // 25

// 26. Compute the greatest common divisor between two numbers
export const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
// gcd(10, 15); // 5

// 27. Compute the least common multiple between two numbers
export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
// lcm(10, 15); // 30

// 28. Compute the median of a collection of numbers
export const median = (...args: number[]): number => {
  const sorted = args.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};
// median(1, 2, 3, 4); // 2.5

// 29. Multiply arguments
export const mul = (...args: number[]): number => args.reduce((a, b) => a * b);
// mul(1, 2, 3, 4); // 24

// 30. Subtract arguments
export const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);
// subtract(1, 2, 3, 4); // -8
