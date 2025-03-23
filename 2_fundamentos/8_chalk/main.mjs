import chalk from 'chalk';

const nota = 6;
if (nota > 7) {
    console.log(chalk.green('Parabéns! Você passou de ano.'));
} else {
    console.log(chalk.bgYellow.black('Você não passou de ano.'));
}