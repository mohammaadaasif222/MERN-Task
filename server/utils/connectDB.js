import mongoose from "mongoose";

export const connectDataBase = (uri) => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then((con) => {
      console.log("DB connected");
    });
};
