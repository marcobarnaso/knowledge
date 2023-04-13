import User from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createError from "../utils/create-error.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 8);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign({ _id: user._id.toString() }, process.env.jwtSecret);

    const { password, tokens, ...info } = user._doc; // remove password and token from user info, user._doc is the user object
    res
      .cookie("accessToken", token, {
        // set cookie
        httpOnly: true, // only accessible by the web server
        sameSite: "none", // to allow cross-site cookies
        secure: true, // to allow cross-site cookies  (only in https)
      })
      .status(200)
      .send({ status: "logged in!", userInfo: info });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      // clear cookie
    })
    .status(200)
    .send("User has been logged out.");
};

// TODO: change password, and delete account
