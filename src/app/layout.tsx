import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToolKiti — API & Tool Reference for AI Agents",
  description: "Structured, machine-readable API references and tool listings. Designed for AI agents and developers.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
