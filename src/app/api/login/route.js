import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  console.log("🚀 ~ POST ~ req:", req);
  try {
    const { email, password } = await req.json();
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 400 }
      );
    } else {
      const hasedPassword = bcrypt.hashSync(password, 10);

      if (user.password === password) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        const response = NextResponse.json({
          message: "Login successful",
          success: true,
        });
        response.cookies.set("token", token, {
          httpOnly: true,
        });

        return NextResponse.json({
          message: "Login successful",
        });
      } else {
        return NextResponse.json(
          { error: "Invalid credentials" },
          { status: 400 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
