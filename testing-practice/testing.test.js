import { capitalize, reverseString } from "./testing";

test("capitalize function takes a string and returns first character capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
