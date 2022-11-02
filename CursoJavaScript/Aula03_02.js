// Programa para calcular IMC
const peso = 120;
const altura = 1.72;
const IMC = (peso / Math.pow(altura,2 ));

if (IMC < 18.5) {
  console.log("Abaixo do Peso");
}else if (IMC > 18.5 && IMC <= 25) {
  console.log("Peso Normal");
}else if (IMC > 25 && IMC <= 30){
  console.log("Acima do Peso");
}else if (IMC > 30 && IMC <= 40){
  console.log("Obeso");
}else{
  console.log("Obesidade Grave ");
}
console.log(IMC);