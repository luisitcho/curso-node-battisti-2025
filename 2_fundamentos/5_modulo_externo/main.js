const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(`Nome encontrado: ${nome}`)
console.log(`Profissão encontrada: ${profissao}`)