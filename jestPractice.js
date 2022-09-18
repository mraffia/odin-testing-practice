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

export { capitalize, reverseString };