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
        console.log(word.charAt(i));
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

export { capitalize, reverseString, calculator, caesarCipher };