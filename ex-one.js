let meaning = prompt("введите значение");
meaning++;
meaning--;
let remains = meaning % 2;

if (isNaN(remains)) {
  console.log("Упс, кажется, вы ошиблись")
} else if (remains === 0) {
  console.log("чётное")
} else {
  console.log("не чётное")
}
