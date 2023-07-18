import validator from "./validator.js";

document.getElementById("btn").addEventListener("click", validate);
document.getElementById("cardNumber").addEventListener("keypress", SoloNumeros);
//const numero = document.getElementById("cardNumber");

function validate() {
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const valid = validator.isValid(document.getElementById("cardNumber").value);
  if (valid) {
    result1.innerHTML =
      "Su tarjeta es valida " +
      validator.maskify(document.getElementById("cardNumber").value);
  } else {
    result2.innerHTML =
      "Su tarjeta es invalida " +
      validator.maskify(document.getElementById("cardNumber").value);
  }
}

function SoloNumeros(evt) {
  const keyNum = evt.which ? evt.which : evt.keyCode;

  if ((keyNum > 47 && keyNum < 58) || keyNum === 8 || keyNum === 13) {
    return true;
  } else {
    evt.preventDefault();
    alert("solo números");
    return false;
  }
}
