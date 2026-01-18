import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // 1. Get the data the user typed in the form
    const { name, email, password } = await req.json();

    // 2. Connect to the database
    await connectMongoDB();

    // 3. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return NextResponse.json(
            { message: "User already exists." }, 
            { status: 400 }
        );
    }

    // 4. Hash the password (encrypt it)
    // '10' is the strength of the encryption
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create the user in MongoDB
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}