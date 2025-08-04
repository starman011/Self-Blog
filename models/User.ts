import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // This will be the hashed password
});

export default models.User || model("User", UserSchema);
