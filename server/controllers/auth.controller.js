import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const JWT_SECRET = 'HJKHKSTYT&HJKH5657865';
import {errorHandler} from '../utils/errorHandler.js'



export const signup = async (req, res, next) => {
  const { fullname, email, password, phone } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ fullname, email, phone, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email }).select('+password');
    if (!validUser) return next(errorHandler(404, 'User not found!'));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: validUser._id }, JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
