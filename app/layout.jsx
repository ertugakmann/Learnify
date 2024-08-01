import Footer from "@components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { authoptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/components/provider/NextAuthProvider";

export const metadata = {
  title: "Learnify",
  description: "Online Learning & Course Platform",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession(authoptions);

  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
