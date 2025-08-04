import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "development-secret",
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const allowedUser = "starman011";
        const allowedPass = "dewmYw-5fotka-hokder";

        if (
          credentials?.username === allowedUser &&
          credentials.password === allowedPass
        ) {
          return { id: allowedUser, name: allowedUser };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
};
