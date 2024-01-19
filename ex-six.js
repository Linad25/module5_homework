const arr = [2, 1, 1];
let check = true;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index]
  if (element != arr[0]) {
   check = false 
   break
  }
};
console.log(check);