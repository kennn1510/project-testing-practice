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

function caesarCipher(str, shift) {
    let newString = str.split("");
    const regex = /\W/g; // Use \W to match single non-word chars

    for (let i = 0; i < newString.length; i++) {
        if (regex.test(newString[i])) {
            // Keep non-word characters as they are
            continue;
        } else {
            let charCode = str.charCodeAt(i); // Get char code from original string
            let shiftedCharCode;

            if (charCode >= 65 && charCode <= 90) {
                // Uppercase letters
                shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                // Lowercase letters
                shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
            } else {
                // Handle other characters (numbers, etc.) if needed
                shiftedCharCode = charCode; // Keep them as they are
            }
            newString[i] = String.fromCharCode(shiftedCharCode);
        }
    }

    return newString.join("");
}

function analyzeArray(arr) {
    const object = {average: null, min: arr[0], max: arr[0], length: null};

    object.average = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    ) / arr.length;
    object.min = Math.min(...arr);
    object.max = Math.max(...arr);
    object.length = arr.length;

    return object;
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
