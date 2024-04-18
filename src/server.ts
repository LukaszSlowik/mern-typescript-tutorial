import express, { Request, json } from "express";
import { createApp } from "./createApp";
import rootRouter from "./routes/root";
import path from "path";

const app = createApp();

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => console.log(`Running on ${PORT} sss`));
