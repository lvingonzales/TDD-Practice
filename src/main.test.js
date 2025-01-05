const {sum, multiply} = require('./main');

test('Sums 1+1 to give 2', () => {
    expect(sum(1,1)).toBe(2);
})

test('multiplies 2*2 to give 4', () => {
    expect(multiply(2,2)).toBe(4);
})
