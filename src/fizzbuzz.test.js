const {fizzBuzz} = require('./fizzbuzz');

test('fizzBuzz function should return 1', () => {
    expect(fizzBuzz(1)).toBe(1);
});

test('should return fizz if number is a multiple of 3 ', () => {
    expect(fizzBuzz(3)).toBe('fizz');
})