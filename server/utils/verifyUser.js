import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/errorHandler.js";
const JWT_SECRET = "HJKHKSTYT&HJKH5657865";


export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const tokenValue = token.split(' ')[1];

  try {
    const decoded = jwt.verify(tokenValue, JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return res.status(403).json({ error: "Forbidden" });
  }
};;
