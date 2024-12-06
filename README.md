# Unhandled Null or Undefined in Javascript Function

This example demonstrates a common error in JavaScript: not handling the case of `null` or `undefined` values being passed as arguments to a function that expects an array or string.

**bug.js** contains the code with the error, while **bugSolution.js** shows how to properly handle these edge cases using robust error checks.

The bug arises when the function `foo` is called with a value other than an array or string.  The `x.length` property access will throw an error, halting execution.

The solution involves using explicit checks to ensure `x` is of the expected type and handling the case where it's not.
