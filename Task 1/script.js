/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("submit-btn").addEventListener("click", calculate);
function calculate(e) {
  e.preventDefault();
  const input = document.getElementById("search").value;
  const output = document.getElementById("output");
  output.textContent =
    input * 2.2046 + " lb, " + input / 0.001 + " g, " + input * 35.274 + " oz";
  output.style.textAlign = "center";
  output.style.fontSize = "2.5em";
}
