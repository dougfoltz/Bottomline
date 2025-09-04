export const metadata = {
  title: "Bottom Line Generator",
  description: "Create PREACH-based bottom line statements from sermon notes",
};

import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
