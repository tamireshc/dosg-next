import { type_second } from "@/functions/fonts";
import type { Metadata } from "next";

import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
