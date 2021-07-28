/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo blokee (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.getElementById("btn__element").addEventListener("click", count);
function count() {
  const clicks = document.getElementById("btn__state").textContent;
  document.getElementById("btn__state").textContent = parseInt(clicks) + 1;
}
