const validator =  {
  isValid,
  maskify,
 
};

function isValid(numero){
  if (numero.length === 0) {
    alert("Debe colocar el numero de su tarjeta");
    return false;
  }
  const begin = numero.split("");
 
  let suma = 0; 
  for  (let i=0; i<begin.length; i++){  
    // const posicion = i + 1;
    if (i % 2 === 0){
      begin[i] = begin[i] *2;

      if (begin[i] > 9){
        const num = begin[i].toString().split("");
        // begin[i] = num[0] + num[1];
        //console.log(parseInt(num[0]) + parseInt(num[1]), "###");
        suma += parseInt(num[0]) + parseInt(num[1]);
      }
      else {
        //console.log(begin[i]);
        suma += begin[i];
      }
    }
  }
  
  console.log(suma, "*****");
  return suma % 10 === 0;
}
function maskify(numero){
  return numero.slice(0, -4).replace(/./g, '#') + numero.slice(-4);
}
export default validator;
