#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token was not provided")
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError("Error while saving token: " + error)
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    // Output help
    printHelp();
  }

  if (args.s) {
    // Save city
  }

  if (args.t) {
    // Save token
    return saveToken(args.t)
  }

  // Output weather
      getWeather('kiev')
};

initCLI();
