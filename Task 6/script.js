/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlieka nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

//1
function getUserAverageAge(masyvas) {
  const ageStr = masyvas.map((e) => e.age);
  let sum = 0;
  for (let i = 0; i < ageStr.length; i++) {
    sum += ageStr[i];
  }
  let result = Math.round(sum / ageStr.length);
  return result;
}
console.log(getUserAverageAge(users));
//-> 31

//2
function getUsersNames(masyvas) {
  const result = masyvas.map((e) => e.name);
  return result;
}
console.log(getUsersNames(users));
//->(9) ["John Smith", "Ann Smith", "Tom Jones", "Rose Peterson", "Alex John", "Ronald Jones", "Elton Smith", "Simon Peterson", "Daniel Cane"]
