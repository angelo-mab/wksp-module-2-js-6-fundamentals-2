let verifyEquals = require('./verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let sum = '';
if(arr.length === 0) return 0;
for(let i = 0; i<arr.length ; i++){
    if(typeof arr[i] !== 'number')
        sum;
    else sum + arr[i];
}
return sum;
}

// Test cases
let inputs = [[], [1,2,3,2,'who', , 99], [1,1,1,1,0,0,2], [0,0,0,0,0,0], ['string', 'string', 'string','string', 'string'], [1,2,2,2,2,'hello', 3,4]];
let outputs = [0,107, 6, 0, 0, 16];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
