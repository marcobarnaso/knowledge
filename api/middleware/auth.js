import jwt from "jsonwebtoken";
import createError from "../utils/create-error.js";

const auth = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.jwtSecret, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    res.send({message: "You are authenticated!", payload});
    next();
  });
};

export default auth;
