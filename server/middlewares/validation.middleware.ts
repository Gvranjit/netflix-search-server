import { Handler } from "express";
import { ZodSchema } from "zod";

const validator =
  (schema: ZodSchema): Handler =>
  (request, response, next) => {
    next();
  };
