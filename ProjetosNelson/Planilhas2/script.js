const fs = require("fs");
const conteudo = [ ];
for (let i =1;i<=10;i++){
 conteudo[i] = fs.readFileSync(`pessoas_${i}.csv`, "utf8");
}
const textoCompleto = conteudo.join("\n");
const linhas = textoCompleto.trim().split("\n");
linhas.shift();
const resultado=[]
for (const linha of linhas) {
   const Dados = linha.split(",");
   const cpf = Dados[5];
   const idade = Dados[4];
   const trabalho = Dados[3];
   if(idade>30){
         if(cpf!=undefined){
            if(trabalho.includes("Gerente")||trabalho.includes("Diretor")||trabalho.includes("Coordenador")||trabalho.includes("Encarregado")||trabalho.includes("Líder")||trabalho.includes("Chefe")||trabalho.includes("Supervisor")) {
               if (cpf[0]=="5"||cpf[0]=="7"||cpf[0]=="9"){
               const NomeDados = linha.split(",");
               resultado.push(NomeDados.join(","));
              }
           }
        }
    }
  }
const textoFinal = resultado.join("\n");

fs.writeFileSync("nomes.txt", textoFinal, "utf8");

console.log(textoFinal);

//pegar todos ons nomes de todos os cpf's que comecem 5, 7, 9 que tenham um profissao ligada chefia de area com idade acima de 30 anos
//pedir pra ia gerar um csv de 10 arquivos de 3k linhas com profissoes variadas