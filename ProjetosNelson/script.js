const fs = require("fs");

const conteudo = fs.readFileSync("clientes.csv", "utf8");

const linhas = conteudo.trim().split("\n");

linhas.shift();

const nomes = [];

for (const linha of linhas) {

  const dados = linha.split(",");

  const nome = dados[0];

  nomes.push(nome);
}

const textoFinal = nomes.join("\n");

fs.writeFileSync("nomes.txt", textoFinal, "utf8");

console.log("Arquivo nomes.txt criado com sucesso!");