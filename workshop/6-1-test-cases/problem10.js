let verifyEquals = require("../../assets/verify-equals");

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  let strArray = str.split(" ");
  let str2 = [];
  for (let i = 0; i < strArray.length; i++) {
    let newStr =
      strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase();
    str2.push(newStr);
  }
  return str2.join(" ");
}

// Test cases
let inputs = [
  "ALL YOUR BASE ARE BELONG TO US",
  "all your base are belong to us",
  "aLL yOUR bASE aRE bELONG tO uS",
  "All Your Base Are Belong To Us",
  "AlL yOuR bAsE aRe BeLoNg To Us"
];
let outputs = [
  "All Your Base Are Belong To Us",
  "All Your Base Are Belong To Us",
  "All Your Base Are Belong To Us",
  "All Your Base Are Belong To Us",
  "All Your Base Are Belong To Us"
];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename);
