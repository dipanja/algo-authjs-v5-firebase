import NextAuth, { CredentialsSignin } from "next-auth";
// import NextAuth  from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
import { loginWithEmail } from "./lib/firebaseAuth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = await loginWithEmail(
            credentials?.email,
            credentials?.password,
          );
          return user;
        } catch (error) {
          // console.error("error code: ", code);
          // throw new Error(error.code);
          throw new CredentialsSignin(error.code);
          // throw error;
        }
      },
    }),
  ],
});
