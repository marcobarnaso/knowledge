import User from "../models/user-model.js"
import bcrypt from "bcrypt"

export const register = async (req, res, next) => {
    try {
      const hash = bcrypt.hashSync(req.body.password, 5);
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


// export const deleteUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   if (req.userId !== user._id.toString()) {
//     return next(createError(403, "You can delete only your account!"));
//   }
//   await User.findByIdAndDelete(req.params.id);
//   res.status(200).send("deleted.");
// };
// export const getUser = async (req, res, next) => {
//   const user = await User.findById(req.params.id);

//   res.status(200).send(user);
// };