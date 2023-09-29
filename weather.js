#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token saved successfully");
  } catch (error) {
    printError("Error while saving token: " + error)
  }
};

const initCLI = () => {
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
};

initCLI();
