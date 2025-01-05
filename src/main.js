function reverseString (str) {
    str = Array.from(str);
    str = reverseStringHelper(str);
    return str.join('');
}

function reverseStringHelper (str, buffer = []) {
    if(!str.length){return};
    buffer.push(str.pop());

    reverseStringHelper(str, buffer);

    return buffer;
}

function capitalizeFirstLetter(str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

module.exports = {reverseString, capitalizeFirstLetter};
