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

export { capitalize, reverseString, calculator };