import express, { Response, Request, NextFunction } from "express";
import searchRoutes from "./routes/search.routes";

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
    app.listen(9000, () => {
      console.log("Now listening on port 9000");
    });
  },
};

export { server };
