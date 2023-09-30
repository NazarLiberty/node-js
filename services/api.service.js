import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("Token is not specified. Use -t [API_KEY] command");
  }

  const config = {
    params: {
      q: city,
      appid: token,
      lang: "ua",
      units: "metric",
    },
  };

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", config);

  return data;
};
