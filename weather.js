#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { handleError } from "./helpers/errors.js";
import { getWeather } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  TOKEN_DICTIONARY,
  getKeyValue,
  saveKeyValue,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token was not provided");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError("Error while saving token: " + error);
  }
};

const getForecast = async () => {
  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
  if (!city) {
    throw new Error("City is not specified. Use -s [CITY_NAME] command");
  }

  try {
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (error) {
    handleError(error);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City was not provided");
    return;
  }

  try {
    await getWeather(city);
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess(`City ${city} saved successfully`);
  } catch (error) {
    handleError(error);
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  return getForecast();
};

initCLI();
