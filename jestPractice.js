function capitalize(word) {
    if (word.length < 1) {
        return '';
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
}

export { capitalize };