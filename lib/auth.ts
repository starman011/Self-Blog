import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const mongoUser = process.env.MONGODB_USERNAME;
        const mongoPass = process.env.MONGODB_PASSWORD;
        if (!mongoUser || !mongoPass) {
          throw new Error("Missing MongoDB credentials");
        }
        if (
          credentials?.username === mongoUser &&
          credentials.password === mongoPass
        ) {
          return { id: "admin", name: mongoUser };
        }
        return null;
      },
    }),
  ],
  pages: { signIn: "/login" },
};
