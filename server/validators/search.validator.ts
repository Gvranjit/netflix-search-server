import { z } from "zod";
import validator from "validator";
enum OrderBy {
  RATING = "rating",
}
const enum Default {
  LIMIT = "10",
  OFFSET = "0",
}

export const searchSchema = z.object({
  start_year: z.string().optional(),
  orderby: z.nativeEnum(OrderBy).optional(),
  limit: z
    .string()
    .refine(validator.isNumeric, "Number is required")
    .default(Default.LIMIT),
  offset: z
    .string()
    .refine(validator.isNumeric, "Number is required")
    .default(Default.OFFSET),
  end_year: z.string().length(4).optional(),
  query: z.string({
    required_error: "A value is required",
    invalid_type_error: "Search string is required",
  }),
  audiosubtitle_andor: z.enum(["and", "or"]).optional(),
  country_andorunique: z.string().optional(),
  countrylist: z.string().optional(),
  subtitle: z.string().optional(),
  audio: z.string().optional(),
});

export type SearchSchema = z.infer<typeof searchSchema>;
