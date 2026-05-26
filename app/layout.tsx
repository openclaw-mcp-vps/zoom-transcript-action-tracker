import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Transcript Action Tracker",
  description: "Extract and track action items from Zoom meeting transcripts automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f943314c-b11a-4183-86cc-d96046370d60"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
