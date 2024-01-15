let x;
// x = 2;
// x = false;
x = "ef";
if (typeof x === 'number') {
  console.log("number");
} else if (typeof x === 'string') {
  console.log("string");
} else if (typeof x === 'boolean') {
  console.log("boolean");
} else {
  console.log("defined");
}