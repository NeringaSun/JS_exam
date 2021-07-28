/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = function sum(a, b) {
    return a + b;
  };
  this.sub = function subtraction(a, b) {
    return a - b;
  };
  this.multi = function multiplication(a, b) {
    return a * b;
  };
  this.div = function division(a, b) {
    return a / b;
  };
}
const object = new Calculator();

console.log(object);
//->Calculator {sum: ƒ, sub: ƒ, multi: ƒ, div: ƒ}
console.log(object.sum(2, 3));
//->5
