import NextAuthProvider from "@/providers/next-auth";
import { Header } from "./_share/components/common/header";
import "./globals.css";

export const metadata = {
  title: "PostgreTh",
  description: "Vercel Postgres with Next.js App router",
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
      <body>
        <NextAuthProvider>
          <div className="border-b border-accent-1">
            <div className={baseScreenWidthStyle}>
              <Header></Header>
            </div>
          </div>
          <div className={baseScreenWidthStyle}>
            <div className="px-6 2lg:px-0">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
