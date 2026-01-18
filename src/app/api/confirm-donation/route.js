import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";

export async function POST(req) {
  try {
    const { donationId } = await req.json();
    await connectMongoDB();

    // Find the donation and mark it successful
    await Donation.findByIdAndUpdate(donationId, {
      status: "success",
    });

    return NextResponse.json({ message: "Confirmed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}