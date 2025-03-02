import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing";

test("capitalize function takes a string and returns first character capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Calculator adds correctly", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("Calculator subtracts correctly", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("Calculator divides correctly", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("Calculator multiplies correctly", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Converts xyz to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Converts HeLLo with a shift factor of 3 to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Converts Hello, World! with a shift factor of 3 to be Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray takes an array of numbers and returns an object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});
