import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";
import Stripe from "stripe";

// Initialize Stripe with your Secret Key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { donationId, sessionId } = await req.json();
    
    // 1. Retrieve the Session from Stripe to get the Real ID
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentId = session.payment_intent; // This is the real ID (e.g., pi_3N5...)

    await connectMongoDB();

    // 2. Update the database with the Real ID
    await Donation.findByIdAndUpdate(donationId, {
      status: "success",
      paymentId: paymentId, // ✅ Replacing "waiting_for_stripe" with real ID
    });

    return NextResponse.json({ message: "Confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Confirmation Error:", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}