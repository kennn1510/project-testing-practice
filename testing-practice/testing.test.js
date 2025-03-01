import { capitalize, reverseString, calculator } from "./testing";

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
