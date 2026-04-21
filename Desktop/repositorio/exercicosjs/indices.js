function encontrarIndices(array) {
    let maior = Math.max(...array);
    let menor = Math.min(...array);

    return {
        indiceMaior: array.indexOf(maior),
        indiceMenor: array.indexOf(menor)   
    };
}

console.log(encontrarIndices([10, 5, 8, 20, 2]));