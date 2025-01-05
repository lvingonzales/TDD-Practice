const {reverseString, capitalizeFirstLetter, calculator} = require('./main');

// Reverse string test 
test ('String "apple" becomes "elppa"', () => {
    expect(reverseString("apple")).toBe("elppa");
})

// Capitalize first letter test
test ('String "this is a test" becomes "This is a test"', () => {
    expect(capitalizeFirstLetter("this is a test")).toBe("This is a test");
})

// Calculator Tests
test('Sums 1+1 to give 2', () => {
    expect(calculator.sum(1,1)).toBe(2);
})

test('multiplies 2*2 to give 4', () => {
    expect(calculator.multiply(2,2)).toBe(4);
})

test ('subtracts 5 - 2 to give 3', () => {
    expect(calculator.subtract(5,5)).toBe(3);
})

test ('dividing by zero(0) should throw an error', () => {
    expect(calculator.divide(2,0)).toThrow(Error);
})

test ('dividing 10 / 2 to give 5', () => {
    expect(calculator.divide(10,2)).toBe(5);
})
