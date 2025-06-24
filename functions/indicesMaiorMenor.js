function indicesMaiorMenor(array) {
    let maior = array[0], menor = array[0];
    let indMaior = 0, indMenor = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            indMaior = i;
        }
        if (array[i] < menor) {
            menor = array[i];
            indMenor = i;
        }
    }
    return { indiceMaior: indMaior, indiceMenor: indMenor };
}

module.exports = indicesMaiorMenor;