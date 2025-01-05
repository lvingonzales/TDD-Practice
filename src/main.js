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

const calculator = {
    sum(a,b) {
        return a + b;
    },
    multiply(a,b) {
        return a * b;
    },
    subtract(a,b) {
        return a - b;
    },
    divide(a,b) {
        if (b === 0){
            throw new Error('Divide by zero(0) error');
        }
        return a / b;
    },
}

module.exports = {reverseString, capitalizeFirstLetter, calculator};
