import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch((error) => console.log(error));
