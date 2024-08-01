import { FirestoreAdapter } from "@auth/firebase-adapter";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { cert } from "firebase-admin/app";

export const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_AUTH_CLIENT_SECRET,
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      privateKey: process.env.NEXT_FIREBASE_PRIVATE_KEY
        ? process.env.NEXT_FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
        : undefined,
      clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_FIREBASE_PROJECTID,
    }),
  }),
};

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
