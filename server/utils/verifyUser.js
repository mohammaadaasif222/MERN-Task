import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import {errorHandler} from '../utils/errorHandler.js'
const JWT_SECRET = 'HJKHKSTYT&HJKH5657865'

export const verifyToken = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = await User.findById(user.id);

    next();
  });
};
