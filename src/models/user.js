import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // No two users can have the same email
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user", // Default role is 'user', unless we change it to 'admin' manually
    },
  },
  { timestamps: true } // Adds 'createdAt' and 'updatedAt' times automatically
);

// If the model User exists, use it; otherwise create a new one.
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;