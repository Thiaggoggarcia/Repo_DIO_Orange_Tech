/** Programa para o valor pago a um produto
 * Debito = 10%
 * Dinheiro ou PIX = 15%
 * Credito 2x = preço de etiqueta sem juros
 * Credito acima de 2x = preço de etiqueta com juros de 10%
 */
let precoEtiqueta = 100;
const codEtiqueta = "Credito";
let totalPagar = precoEtiqueta;
const parcelas = 5;
if (codEtiqueta === "Dinheiro") { 
  totalPagar = precoEtiqueta - (precoEtiqueta * 0.15);
  console.log("Total a Pagar em Dinheiro: ", totalPagar);
}else if (codEtiqueta === "Pix"){
  totalPagar = precoEtiqueta - (precoEtiqueta * 0.15);
  console.log("Total a Pagar no PIX: ", totalPagar);
}else if (codEtiqueta === "Debito"){
  totalPagar = precoEtiqueta - (precoEtiqueta * 0.10);
  console.log("Total a Pagar em Debito: ", totalPagar);
}else if (codEtiqueta === "Credito" && parcelas <= 2){
  console.log("Total a Pagar em Credito: ", totalPagar, "Parcelado em ",parcelas,"x");
}else if(codEtiqueta === "Credito" && parcelas > 2){
  totalPagar = precoEtiqueta + (precoEtiqueta * 0,10)
  console.log("Total a Pagar em Credito: ", totalPagar, "Parcelado em ",parcelas,"x");
}
