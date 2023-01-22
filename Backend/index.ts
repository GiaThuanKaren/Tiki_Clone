import express, { Express } from "express";
import { Connect } from "./src/config/mongo";
const app: Express = express();
const PORT = process.env.PORT || 5500;

Connect();

app.listen(PORT, () => {
  console.log(`
    Listening at ${PORT} port`);
});
