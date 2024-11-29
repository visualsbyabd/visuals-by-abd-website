import "./globals.css"
import { DefaultFooter, DefaultHeader } from "@/components/globals";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg-color">
        <DefaultHeader />
        {children}
      <DefaultFooter />
      </body>
    </html>
  );
}
