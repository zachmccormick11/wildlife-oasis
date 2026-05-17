import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Wildlife Oasis",
  description: "Build your living ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}