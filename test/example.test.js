// IMPORT MODULES under test here:
import { add, divide, multiply, subtract } from '../utils.js';

const test = QUnit.test;

test('add should take in 10 and 1 and return 11', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(10, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('subtract should take in 5 and 4 and return 1', (expect) => {
    const expected = 1;
    const actual = subtract(5, 4);
    expect.equal(actual, expected);
});
test('multiply should take in 4 and 5 and return 20', (expect) => {
    const expected = 20;
    const actual = multiply(4, 5);
    expect.equal(actual, expected);
});
test('divide should take in 15 and 5 and return 3', (expect) => {
    const expected = 3;
    const actual = divide(15, 5);
    expect.equal(actual, expected);
});