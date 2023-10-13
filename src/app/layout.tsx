import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";

export const metadata: Metadata = {
  title: "Quiz Genius",
  description:
    "Quiz Genius is a quiz app that allows you to create your own quizzes and share them with your friends and discover where you rank on the leaderboards.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
