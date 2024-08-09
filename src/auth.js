import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginWithEmail } from "./lib/firebaseAuth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
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
          return;
        }
      },
    }),
  ],
});
