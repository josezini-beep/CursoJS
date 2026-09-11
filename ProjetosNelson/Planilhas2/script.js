const fs = require("fs");

const conteudo1 = fs.readFileSync("pessoas_01.csv", "utf8");


const conteudo2 = fs.readFileSync("pessoas_02.csv", "utf8");


const conteudo3 = fs.readFileSync("pessoas_03.csv", "utf8");


const conteudo4 = fs.readFileSync("pessoas_04.csv", "utf8");


const conteudo5 = fs.readFileSync("pessoas_05.csv", "utf8");


const conteudo6 = fs.readFileSync("pessoas_06.csv", "utf8");


const conteudo7 = fs.readFileSync("pessoas_07.csv", "utf8");


const conteudo8 = fs.readFileSync("pessoas_08.csv", "utf8");


const conteudo9 = fs.readFileSync("pessoas_09.csv", "utf8");


const conteudo10 = fs.readFileSync("pessoas_10.csv", "utf8");


const linhas = conteudo.trim().split("\n");

linhas.shift();

const nomes = [];
if 
for (const linha of linhas) {

  const dados = linha.split(",");

  const nome = dados[0];

  nomes.push(nome);
}

const textoFinal = nomes.join("\n");

fs.writeFileSync("nomes.txt", textoFinal, "utf8");

console.log("Arquivo nomes.txt criado com sucesso!");

//pegar todos ons nomes de todos os cpf's que comecem 5, 7, 9 que tenham um profissao ligada chefia de area com idade acima de 30 anos
//pedir pra ia gerar um csv de 10 arquivos de 3k linhas com profissoes variadas