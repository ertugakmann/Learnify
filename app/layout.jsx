import Footer from "@components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

export const metadata = {
  title: "Learnify",
  description: "Online Learning & Course Platform",
};

const RootLayout = ({ children }) => {
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
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
