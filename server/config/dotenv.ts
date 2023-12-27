import { config } from "dotenv";
import { ZodError, z } from "zod";
import validator from "validator";
const _env = config().parsed;

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "testing"]),
  PORT: z.string().refine(validator.isNumeric, "Must be a number"),
  API_KEY: z.string(),
});

function parseEnvFile() {
  try {
    return envSchema.parse(_env);
  } catch (error) {
    const _error = error as ZodError;
    console.log("Error in the .env file", JSON.parse(_error.message));
    process.exit();
  }
}
const env = parseEnvFile(); //this is here to be able to export the env with all the inferred types
export { env };
