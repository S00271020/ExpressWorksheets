import express, { Application, Request, Response } from "express";
import carRoutes from "./routes/cars";
import { env } from "./config/env";
import { connectDB } from "./config/database";

const port = env.port;

const app: Application = express();

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

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

startServer();
