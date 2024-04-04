import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDatabase } from "./database/mongoose-database.js";
import { router } from "./routes/products-routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectToDatabase();

app.use(router);

const port = 3335;

app.listen(port, () => console.log("Server running on port 3335!"));
