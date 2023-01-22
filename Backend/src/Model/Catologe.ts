import mongoose from "mongoose";
const { Schema } = mongoose;
export const Catologe = new Schema(
  {
    title: { type: String, default: "" },
    link: { type: String, default: "" },
    originalLink: { type: String, default: "" },
    img: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
