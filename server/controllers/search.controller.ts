import { Handler } from "express";
import { getCountries, searchTitle } from "../api/unogs.api";
import { searchSchema } from "../validators/search.validator";

export const indexController: Handler = (req, res, next) => {
  res.send("IT WORKS");
};
export const searchController: Handler = async (req, res, next) => {
  //validate request data first
  const _queryParams = req.query;
  try {
    console.log(_queryParams);
    const validatedQueryParams = searchSchema.parse(_queryParams);
    console.log(validatedQueryParams);
    const titleList = await searchTitle(validatedQueryParams);
    res.send(titleList);
  } catch (error) {
    next(error);
  }
};
