import { type_second } from "@/functions/fonts";
import type { Metadata } from "next";

import userGet from "@/actions/user-get";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { UserContextProvider } from "@/context/user-contex";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const data = await userGet()

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={data?.data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
