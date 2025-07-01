import { Inter, Figtree } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const figtree = Figtree({ 
  subsets: ["latin"], 
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${figtree.variable} ${inter.className} min-h-screen bg-background coal-texture text-[97%]`}
        style={{ fontFamily: "var(--font-figtree)" }}
      >
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
