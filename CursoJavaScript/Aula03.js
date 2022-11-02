/**Programa para calcular média e resultado de aprovação dos alunos */
const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
if(media >= 7){
  console.log("Aluno passou de Semestre com Média de: ",media );
}else if (media < 7 && media >= 5 ){
  console.log("Aluno está de Recuperação com Média de: ",media);
}else{
  console.log("Aluno está  Reprovado com Média de: ",media);
}
