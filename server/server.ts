import express, { Response, Request, NextFunction } from "express";
import searchRoutes from "./routes/search.routes";
import { env } from "./config/dotenv";

const app = express();
const server = {
  start: () => {
    app.use("/api", searchRoutes);
    app.use<any>(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        console.log("THERE WAS A ZOD ERROR", err);
        res.status(400).send(err.message);
      }
    );
    app.listen(env.PORT, () => {
      console.log("Now listening on port:", +env.PORT);
    });
  },
};

export { server };
