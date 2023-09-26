import { homedir } from 'os';
import { join, relative, dirname, resolve } from 'path';

const filePath = join(homedir(), "weather-data.json");

export const saveKeyValue = (key, value) => {
    console.log(filePath);
}