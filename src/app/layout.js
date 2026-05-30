import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Payoo Mobile Bank",
  description:
    "Make your banking experience seamless with Payoo Mobile Bank. Manage your finances on the go with our user-friendly app, offering secure transactions, real-time account monitoring, and personalized financial insights. Download now and take control of your money anytime, anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="bg-white">
          {children}
      </body>
    </html>
  );
}