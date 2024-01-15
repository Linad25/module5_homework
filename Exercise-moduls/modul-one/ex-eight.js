let myMap = new Map();
myMap.set(false, "der")
myMap.set(132, "fer")
myMap.set("string", "ger")
for (let key of myMap.keys()) {
  Key = `ключ - ${key}`;
  for (let value of myMap.values()) {
  Value = `значение - ${value}`
  }
  console.log(`${Key}, ${Value}`)
}