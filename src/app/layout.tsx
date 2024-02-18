import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/services/apolloWrapper";
import { ContextProvider } from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Project Rick and Morty",
  description: "Generated Dashboard for Rick and Morty API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
