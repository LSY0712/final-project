import express, { json } from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import db from "./db.js";

const upload = multer();
const whiteList = ["http://localhost:5500", "http://localhost:3000"];
const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("不允許連線"));
    }
  },
};
const secretKey = process.env.JWT_SECRET_KEY;

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    data: null,
    message: "首頁",
  });
});

app.get("/api/users", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM `users`");
    res.status(200).json({
      status: "success",
      data: rows,
      message: "取得資料成功",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "error",
      message: err.message ? err.message : "取得資料失敗",
    });
  }
});

app.get("/api/users/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: [],
    message: `獲取特定 ID 的使用者 ${id}`,
  });
});
