// Módulo externo
const minimist = require('minimist');

// Módulo inerno
const soma = require('./soma').soma;


const args = minimist(process.argv.slice(2))

const a = Number(args['a'])
const b = Number(args['b'])

console.log(soma(a, b))