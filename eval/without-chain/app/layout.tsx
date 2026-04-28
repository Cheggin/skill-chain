import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Use — Let agents navigate the web",
  description:
    "Open-source toolkit for AI agents that browse, click, and complete tasks across the web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-hidden">
        {children}
      </body>
    </html>
  );
}
