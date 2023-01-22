import mongoose from "mongoose";
const UserName: string = "tikiclone";
const Password: string = "tikiclone";
const DBname: string = "tikiclone";
const URL = `mongodb+srv://${UserName}:${Password}@cluster0.a6cyoli.mongodb.net/${DBname}?retryWrites=true&w=majority`;
const Connect = async function () {
  try {
    await mongoose.connect(URL);
    console.log("Connect Sucessfully");
  } catch (e) {
    console.log("Failed to Connect DB");
  }
};

export { Connect };
