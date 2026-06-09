import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://disbr007.github.io"),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: "https://disbr007.github.io",
    siteName: site.name,
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
