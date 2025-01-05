const {reverseString, capitalizeFirstLetter, calculator, cipher, analyzeArray} = require('./main');

// // Reverse string test 
// test ('String "apple" becomes "elppa"', () => {
//     expect(reverseString("apple")).toBe("elppa");
// })

// // Capitalize first letter test
// test ('String "this is a test" becomes "This is a test"', () => {
//     expect(capitalizeFirstLetter("this is a test")).toBe("This is a test");
// })

// // Calculator Tests
// test('Sums 1+1 to give 2', () => {
//     expect(calculator.sum(1,1)).toBe(2);
// })

// test('multiplies 2*2 to give 4', () => {
//     expect(calculator.multiply(2,2)).toBe(4);
// })

// test ('subtracts 5 - 2 to give 3', () => {
//     expect(calculator.subtract(5,2)).toBe(3);
// })

// test ('dividing by zero(0) should throw an error', () => {
//     expect(function () {
//         calculator.divide(2,0)
//     }).toThrow(new Error('Divide by zero(0) error'));
// })

// test ('dividing 10 / 2 to give 5', () => {
//     expect(calculator.divide(10,2)).toBe(5);
// })

// // Cipher tests
// test ('Entering "bruh" into the cipher with a shift factor of 1 gives "csvi"', () => {
//     expect(cipher("bruh", 1)).toBe('csvi');
// })

// test ('Entering "xyz" into the cipher with a shift factor of 3 gives "abc"', () => {
//     expect(cipher("xyz", 3)).toBe('abc');
// })

// test ('Entering "HeLLo" into the cipher with a shift factor of 3 gives "KhOOr"', () => {
//     expect(cipher("HeLLo", 3)).toBe('KhOOr');
// })

// test ('Entering "Hello, World!" into the cipher with a shift factor of 3 gives "Khoor, Zroug!"', () => {
//     expect(cipher("Hello, World!", 3)).toBe('Khoor, Zruog!');
// })

// Analyze array Tests

const obj = analyzeArray([1,8,3,4,2,6])

test ('Passing the array [1,8,3,4,2,6], returns an average of 4', () => {
    expect(obj.average).toBe(4);
})

test ('Passing the array [1,8,3,4,2,6], returns an minimum value of 1', () => {
    expect(obj.min).toBe(1);
})

test ('Passing the array [1,8,3,4,2,6], returns an maximum value of 8', () => {
    expect(obj.max).toBe(8);
})

test ('Passing the array [1,8,3,4,2,6], returns an length value of 6', () => {
    expect(obj.length).toBe(6);
})
