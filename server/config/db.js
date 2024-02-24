import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://arth:arth@todo-app.b3tfxp9.mongodb.net/?retryWrites=true&w=majority&appName=todo-app"
    );
    res && console.log("connected to MongoDB");
  } catch (error) {
    console.log("error in DB", error);
  }
};

export default connectToDB;
