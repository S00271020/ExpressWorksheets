import express, { Application, Request, Response } from "express";
import carRoutes from "./routes/cars";
import { env } from "./config/env";

const PORT = env.port;

const app: Application = express();

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get("/ping", async (_req: Request, res: Response) => {
  res.json({
    message: "hello from Krystian",
  });
});

app.get("/bananas", async (_req: Request, res: Response) => {
  res.json({
    message: "this is bananas",
  });
});

// My Route
app.get("/judd", async (_req: Request, res: Response) => {
  res.json({
    message: "I am the Goat",
  });
});

app.use("/api/v1/cars", carRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
