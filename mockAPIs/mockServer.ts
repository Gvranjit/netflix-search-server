import express from "express";
import unogsRoute from "./unogs.mock-api";
import { env } from "../server/config/dotenv";
const app = express();

app.use("/", unogsRoute);
app.listen(+env.PORT + 1, () => {
  console.log("Mock API server runnon on port: ", +env.PORT + 1);
});
