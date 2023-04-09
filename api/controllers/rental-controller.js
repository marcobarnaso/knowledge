import { Rental } from "../models/rental-model.js";
import multer from "multer";

export const registerRental = async (req, res, next) => {
  try {
    const newRental = new Rental(req.body);
    await newRental.save();
    res.status(201).send("New rental feedback has been created.");
  } catch (err) {
    next(err);
  }
};

const upload = multer({
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
  
        cb(undefined, true)
    }
  })

export const rentalPicture = async (req, res) => {
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 600, height: 600 })
      .png()
      .toBuffer();
    autor.picture = buffer;
    await autor.save();
    res.send();
  } catch (err) {
    next(err);
  }
};
