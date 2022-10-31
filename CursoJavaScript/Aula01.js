// Desafio 01
// Programa para calcular valor do Combustivel gasto em uma viagem
const precoLitroCombustivel = 4.65;
const distanciaPercorrida = 60;
const  consumoMedioVeiculo = 16;
const valorGasto = (precoLitroCombustivel / consumoMedioVeiculo) * distanciaPercorrida;
console.log('Valor gasto durante a viagem foi: ', valorGasto.toFixed(2), 'R$');