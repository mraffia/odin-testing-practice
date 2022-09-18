function capitalize(word) {
    if (word.length < 1) {
        return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word.charAt(i)
    }
    return reversed
}

const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    }
}

function caesarCipher(word) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shifted = "";

    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (word.charAt(i).toLowerCase() === alphabet.charAt(j)) {
                if (j === alphabet.length - 1) {
                    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
                        shifted += alphabet.charAt(0).toUpperCase();
                    } else {
                        shifted += alphabet.charAt(0);
                    }
                } else {
                    if (word.charAt(i) === word.charAt(i).toUpperCase()) {
                        shifted += alphabet.charAt(j + 1).toUpperCase();
                    } else {
                        shifted += alphabet.charAt(j + 1);
                    }
                }
            } 
        }
        if(!(alphabet.includes(word.charAt(i).toLowerCase()))) {
            shifted += word.charAt(i);
        }
    }

    return shifted;
}

function analyzeArray(arr) {if (arr.length === 0) {
        return { average: null, min: null, max: null, length: 0 };
    } else if (arr.length === 1) {
        return { average: arr[0], min: arr[0], max: arr[0], length: 1 };
    }

    let averageValue = arr.reduce((a, b) => a + b, 0) / arr.length;
    let minValue = arr[0];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return { average: averageValue, min: minValue, max: maxValue, length: arr.length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };