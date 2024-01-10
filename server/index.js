import express from "express";
import userRouter from "./routes/auth.route.js";
import Product from "./models/product.model.js";
import { verifyToken } from "./utils/verifyUser.js";
import { connectDataBase } from "./utils/connectDB.js";
import {getProducts} from './controllers/product.controller.js'
import cors from 'cors'
const uri = 'mongodb+srv://test:s57hbgML5XGiQHAp@cluster0.hmulnre.mongodb.net/'
connectDataBase(uri)
const app = express();

app.use(cors({origin:'*'}))

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRouter);
app.get("/api/products",verifyToken, getProducts);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
