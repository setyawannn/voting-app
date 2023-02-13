import "../styles/globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="container mx-auto w-full px-40">{children}</div>
      </body>
    </html>
  );
}
