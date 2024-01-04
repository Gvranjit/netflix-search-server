import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { env } from "../config/dotenv";
import { SearchSchema } from "../validators/search.validator";
import { SearchResponse, TransformedSearchResponse } from "./unogs.model";
let baseURL = "https://unogsng.p.rapidapi.com";
const mockURL = `http://localhost:${+env.PORT + 1}`;

//check if the node env is development or production and use mock if dev
if (env.NODE_ENV === "development") {
  baseURL = mockURL;
}

const headers = {
  "X-RapidAPI-Key": env.API_KEY,
  "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
};
enum Urls {
  countries = "countries",
  search = "search",
}

const options: { [key in Urls]: AxiosRequestConfig<any> } = {
  countries: {
    method: "GET",
    baseURL,
    url: Urls.countries,
  },
  search: {
    method: "GET",
    baseURL,
    url: Urls.search,
  },
};

axios.interceptors.request.use((req) => {
  if (req.baseURL == baseURL) {
    req.headers = {
      ...req.headers,
      ...headers,
      "Content-Type": "application/json",
    } as any as AxiosRequestHeaders;
  }
  return req;
});

export function getCountries() {
  return axios.request(options.countries).then((response) => response.data);
}

export function searchTitle(params: SearchSchema) {
  options.search.params = params;
  console.log(options.search);
  return axios.request(options.search).then((response) => {
    const data = response.data as SearchResponse;
    const results = data.results?.map((eachResult) => ({
      ...eachResult,
      countries: JSON.parse(`{${eachResult.clist}}`),
    }));
    return { ...data, results } as TransformedSearchResponse;
  });
}
