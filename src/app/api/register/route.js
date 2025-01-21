import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { connectMongoDB } from "_/lib/mongo";
import { createUser, getUserByEmail } from "_/queries/users";

export const POST = async (req) => {
  try {
    const { email, first_name, last_name, password } = await req.json();

    await connectMongoDB();

    const isExist = await getUserByEmail(email);
    if (isExist) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await createUser({
      email,
      first_name,
      last_name,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
