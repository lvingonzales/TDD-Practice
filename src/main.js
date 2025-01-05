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

module.exports = {reverseString,};
