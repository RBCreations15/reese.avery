import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteContent.name, template: `%s | ${siteContent.name}` },
  description: siteContent.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
