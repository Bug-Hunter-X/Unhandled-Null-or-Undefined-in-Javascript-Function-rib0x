function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined
  }
  if (typeof x !== 'string' && !Array.isArray(x)) {
    return -1; // Handle non-string, non-array input
  }
  return x.length; // Safe access to length
}
//Example of handling potential errors
console.log(foo([1,2,3])); //3
console.log(foo("hello")); //5
console.log(foo(null)); //0
console.log(foo(undefined)); //0
console.log(foo(5)); //-1