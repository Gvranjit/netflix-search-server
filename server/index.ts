import { env } from "./config/dotenv";
import { server } from "./server";
import { initializeCountryList } from "./startup/startup.initial-data";
console.log(env);
initializeCountryList()
  .then(() => {
    console.error("Successfully initialized CountryList");
  })
  .catch((err) => {
    console.error("Error while trying to fetch CountryList", err);
  })
  .finally(() => server.start());
