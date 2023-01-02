import "../styles/globals.css";
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={orbitron.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
