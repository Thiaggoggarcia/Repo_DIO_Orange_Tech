/** Aula 02
 *  Programa para calcular custo com combustivel durante uma viagem 
 */
const precoGasolina = 4.65;
const precoEtanol = 3.80;
const isTipoCombustivel  = "e";
const distanciaPercorrida = 60;
const  consumoMedioVeiculo = 16;
//const precoLitroCombustivel = 4.65;

if (isTipoCombustivel === "G") {
   const valorGasto = (precoGasolina / consumoMedioVeiculo) * distanciaPercorrida;
   console.log('Valor gasto com GASOLINA durante a viagem foi: ', valorGasto.toFixed(2), 'R$');
 }
  else if (isTipoCombustivel === "E"){
    const valorGasto = (precoEtanol / consumoMedioVeiculo) * distanciaPercorrida;
    console.log('Valor gasto com ETANOL durante a viagem foi: ', valorGasto.toFixed(2), 'R$');
  }
else{
  console.log('Desculpe este combustivel não é válido');
 }