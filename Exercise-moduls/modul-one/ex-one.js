let meaning = prompt("введите значение");
meaning++;
meaning--;
let remains = meaning % 2;

// console.log(meaning)
// console.log(remains);

// nan = boolean(meaning);
// console.log(nan)

if (isNaN(meaning)) {
  console.log("не число");
} else {
  console.log(typeof meaning);
}

if (remains==0) {
  console.log("чётное");
} else if (remains==1) {
  console.log("не чётное");
} else {
  console.log("Упс, кажется, вы ошиблись");
}
