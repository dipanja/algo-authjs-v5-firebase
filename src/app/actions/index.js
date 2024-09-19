"use server";

import { signIn, signOut } from "@/auth"; // from authjs
import { signUpWithEmail } from "@/lib/firebaseAuth"; // own

// export async function doSocialLogin(formData) {
//     const action = formData.get('action');
//     await signIn(action, { redirectTo: "/home" });
// }

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData) {
  // console.log("formData", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

// export async function doCredentialSignup(formData) {
//   try {
//     await signUpWithEmail(formData.get("email"), formData.get("password"));
//   } catch (err) {
//     console.log(err.code);
//     throw err;
//   }
// }

export async function doCredentialSignup(formData) {
  try {
    const userCredential = await signUpWithEmail(
      formData.get("email"),
      formData.get("password"),
    );
    return userCredential.uid;
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        throw new Error("Email already in use");
      case "auth/weak-password":
        throw new Error("Password too weak");
      default:
        throw new Error("An error occurred during signup");
    }
  }
}
