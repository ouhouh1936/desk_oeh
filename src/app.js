import express from "express";
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import globalRouter from "./router/globalRouter";
import connect from "../db";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connect();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} serverstart http://localhost:${PORT}`);
});
