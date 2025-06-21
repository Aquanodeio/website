import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-background coal-texture text-[97%]`}
      >
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
