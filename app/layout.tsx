import type { Metadata } from "next";
import "./globals.css";
import "./interactive.css";
import "./experience.css";
import "./header.css";

export const metadata: Metadata = {
  title: "Shachindran Veerangan — Software, AI & Systems",
  description:
    "Software, AI and systems for the real world. Portfolio of Shachindran Veerangan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
