import "../styles/globals.css";
import { Orbitron } from "@next/font/google";
import { inDevEnvironment } from "../utils/devmode";

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
    <html lang='en' className={orbitron.className}>
      <head />
      {/* TODO: delete debug screens in production */}
      <body className={inDevEnvironment ? "debug-screens" : ""}>
        {children}
      </body>
    </html>
  );
}
