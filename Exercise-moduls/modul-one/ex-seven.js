const arr = [2, NaN, 0, 0, 0, 1, 1, null, 1, undefined, 'string'];
let evenNumbered = 0;
let odd = 0;
let nol = 0;
let notnumber =0;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index]
  if (element === 0) {
    nol++
  } else if (isNaN(element) || element === null || element === undefined || typeof (element) === "string") {
    notnumber++
//     console.log(isNaN(element))
//     console.log(typeof(element))
  } else if (element % 2 === 0) {
    evenNumbered++
  } else {
    odd++
  }
};
console.log(`чётных: ${evenNumbered}`);
console.log(`нечётных: ${odd}`);
console.log(`нулей: ${nol}`);
console.log(`не числa: ${notnumber}`);