import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (err) => {
  console.log(chalk.bgRed("ERROR"), err);
};

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen("SUCCESS"), msg);
};

export const printHelp = () => {
  console.log(dedent`
        ${chalk.bgCyan("     HELP     ")}
        No parameters - Show weather
        -s [CITY] - Set city
        -h - Show help
        -t [API_KEY] - Save token 
    `);
};

export const printWeather = (weather) => {
  console.log(weather);
  const summary = weather.weather[0]?.description;
  const temperature = weather.main.temp;
  const feelsLike = weather.main.feels_like;
  const tempMin = weather.main.temp_min;
  const tempMax = weather.main.temp_max;
  const city = weather.name;

  console.log(dedent`
    ${chalk.bgBlackBright("     WEATHER INFO FOR TODAY    ")}

    ${chalk.bgBlueBright("CITY:")} ${city}
    ${chalk.bgRed("TEMPERATURE NOW:")} ${temperature} C
    ${chalk.bgGreen("FEELS LIKE:")} ${feelsLike} C
    ${chalk.bgYellow("MINIMAL TEMPERATURE:")} ${tempMin} C
    ${chalk.bgCyan("MAXIMAL TEMPERATURE:")} ${tempMax} C
`);
};
