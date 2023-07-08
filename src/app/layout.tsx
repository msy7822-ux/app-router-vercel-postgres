import NextAuthProvider from "@/providers/next-auth";
import { Header } from "./_share/components/common/header/header";
import "./globals.css";

export const metadata = {
  title: "Vercel Postgres",
  description: "Try Vercel Postgres in your Next.js app with Prisma",
};

// NOTE: 全ての画面の共通の画面幅スタイル
export const baseScreenWidthStyle = "mx-auto w-full max-w-[990px]";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-mono">
        <NextAuthProvider>
          <Header></Header>
          <div className={baseScreenWidthStyle}>
            <div className="p-6 2lg:px-0">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
