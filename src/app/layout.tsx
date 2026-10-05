import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canvas — Your ideas, in full color",
  description: "A small interactive workspace to bring your ideas to life.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
