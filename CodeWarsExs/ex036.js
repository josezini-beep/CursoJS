function mat(n) {
    if (n.length === 2) {
        return (n[0][0] * n[1][1]) - (n[0][1] * n[1][0]);
    }

    let total = 0;

    for (let j = 0; j < n.length; j++) {
        let resultado = n.filter((valor, indice) => indice !== 0);

        resultado = resultado.map(
            linha => linha.filter((valor, indice) => indice !== j)
        );

        let sinal = (j % 2 === 0) ? 1 : -1;

        total += sinal * n[0][j] * mat(resultado);
    }

    return total;
}

function determinant(m) {
    if (m.length === 1) {
        return m[0][0];
    }

    if (m.length === 2) {
        return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
    }

    return mat(m);
}

console.log(determinant([
    [1, 2, 6, 4],
    [3, 5, 4, 8],
    [3, 7, 4, 9],
    [3, 7, 9, 9]
]));