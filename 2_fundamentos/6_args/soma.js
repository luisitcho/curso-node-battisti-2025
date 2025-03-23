module.exports = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => {
        if (b === 0) {
            throw new Error('Divisão por zero');
        }
        return a / b;
    }
}