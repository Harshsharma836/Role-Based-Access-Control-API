import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["user", "admin"],
    default: "user",
  },
  name: { type: String },
  bio: { type: String },
  phone: { type: String },
  photo: { type: String },
  isPublic: { type: Boolean, default: true }, 
});

const User = mongoose.model("User", userSchema);

export default User;
