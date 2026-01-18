import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Guest"
    },
    email: {
      type: String,
      default: "guest@example.com"
    },
    amount: {
      type: Number, // Storing as Number is better for math later
      required: true,
    },
    status: {
      type: String,
      default: "pending", // pending -> success
    },
    paymentId: {
      type: String,
    },
  },
  { timestamps: true }
);

// If the model exists, use it. Otherwise, create it.
const Donation = mongoose.models.Donation || mongoose.model("Donation", donationSchema);

export default Donation;