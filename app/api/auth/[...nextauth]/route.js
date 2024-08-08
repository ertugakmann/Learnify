import { FirestoreAdapter } from "@auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { cert } from "firebase-admin/app";

export const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
  ],
};

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
