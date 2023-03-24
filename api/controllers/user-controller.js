import User from "../models/user-model.js"
import bcrypt from "bcrypt"

// export const registerUser = async (req, res, next) => {
//     try {
//       const hash = bcrypt.hashSync(req.body.password, 5);
//       const newUser = new User({
//         ...req.body,
//         password: hash,
//       });
//       await newUser.save();
//       res.status(201).send("User has been created.");
//     } catch (err) {
//       next(err);
//     }
//   };

export const register = async (req, res) => {
    try {
      const user = new User(
        {
        username: "test",
        email: "test",
        password: "test",
        country: "test"
        }
      );
      await user.save();
      res.status(201).send("User has been created.");
    } catch (err) {
      restart.status(500).send(" I pooped myself");
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