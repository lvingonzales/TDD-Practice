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

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function cipher(str, shiftFactor) {

    str = Array.from(str);
    str = encrypt(str, shiftFactor);
    return str.join('');
}

function encrypt(str, shiftFactor, buffer = []) {
    if(!str.length) {return}

    let currChar = str.shift();

    if (!letters.includes(String(currChar).toLowerCase())){
        buffer.push(currChar);
    } else {
        let index = letters.indexOf(String(currChar).toLowerCase());
        let newPos = checkForOverflow(index, shiftFactor);

        if(currChar === currChar.toUpperCase()) {
            currChar = letters[newPos].toUpperCase();
        } else {
            currChar = letters[newPos];
        }

        buffer.push(currChar);
    }

    encrypt(str, shiftFactor, buffer);

    return buffer;
}

function checkForOverflow(index, shiftFactor) {
    let sum = calculator.sum(index, shiftFactor);

    if(sum >= 26){
        let adjustedSum = calculator.subtract(sum,(Math.floor(calculator.divide(sum, 26)) * 26))
        return adjustedSum;
    }

    return sum;
}

function analyzeArray (arr, obj = {}) {

    obj.average = average(arr);
    obj.min = minimum(arr);
    obj.max = maximum(arr);
    obj.length = arr.length;

    return obj; 
}

function minimum (arr) {
    let min;

    arr.forEach(element => {
        if(min === undefined){min = element;}

        if(element < min) {
            min = element;
        }
    });

    return min;
}

function maximum (arr) {
    let max;

    arr.forEach(element => {
        if(max === undefined){max = element;}

        if(element > max) {
            max = element;
        }
    });

    return max;
}

function average(arr) {
    let average = 0;
    let sum = 0;

    arr.forEach(element => {
        sum = calculator.sum(sum,element);
    });

    average = calculator.divide(sum,arr.length);

    return average
}

cipher("!HI!", 1);

module.exports = {reverseString, capitalizeFirstLetter, calculator, cipher, analyzeArray};
