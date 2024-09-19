import { NextResponse } from "next/server";
import { loginWithEmail, getFirebaseAuth } from "../../../../lib/firebaseAuth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function POST(request) {
  const body = await request.json();
  const auth = getFirebaseAuth();
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password,
    );
    console.log(user);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error.code, { status: 400 });
  }
}
