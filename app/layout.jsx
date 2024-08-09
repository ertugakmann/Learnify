import Footer from "@components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Learnify",
  description: "Online Learning & Course Platform",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
