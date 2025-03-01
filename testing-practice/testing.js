function capitalize(str) {
  // Capitalize the first character and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  // Split the string into an array, reverse it, and join it back into a string
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    // Return the sum of a and b
    return a + b;
  },

  subtract(a, b) {
    // Return the difference of a and b
    return a - b;
  },

  divide(a, b) {
    // Return the quotient of a and b
    return a / b;
  },

  multiply(a, b) {
    // Return the product of a and b
    return a * b;
  },
};

export { capitalize, reverseString, calculator };
