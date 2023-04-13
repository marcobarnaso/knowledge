import mongoose from "mongoose";
const { Schema } = mongoose;

const rentalSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
    },
    province: {
      type: String,
      required: true,
    },
    canton: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      unique: true,
    },
    reviews: [
      {
        user: {
          type: String,
          required: true,
        },
        review: {
          type: String,
          required: true,
        },
      },
    ],
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rental", rentalSchema);
