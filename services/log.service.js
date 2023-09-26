import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (err) => {
    console.log(chalk.bgRed("ERROR"), err);
}

export const printSuccess = (msg) => {
    console.log(chalk.bgGreen("SUCCESS"), msg);
}

export const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan("     HELP     ")}
        No parameters - Show weather
        -s [CITY] - Set city
        -h - Show help
        -t [API_KEY] - Save token 
    `);
}