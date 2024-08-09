import { NextResponse } from "next/server";
import { loginWithEmail } from "../../../lib/firebaseAuth";

export async function POST(request) {
  const body = await request.json();
  try {
    const user = await loginWithEmail(body.email, body.password);
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.code);
  }
}
