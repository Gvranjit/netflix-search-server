import { getCountries } from "../api/unogs.api";
import { Country, UnogsErrorResponse } from "../api/unogs.model";
import { errorMessage } from "../constants/error.constants";

const countries: Country[] = []; //this will be where the country list will be stored for the remainder of the server time

async function initializeCountryList() {
  // try {
  //   const results: Country[] = await getCountries();
  //   if (results.length > 0) {
  //     countries.push(...results);
  //   }
  // } catch (error) {
  //   const _error = error as UnogsErrorResponse;
  //   throw _error.response.data;
  // }
}

export { countries, initializeCountryList };
