import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { comment } from "postcss";
import "./globals.css";
import SideBar from "Components/SideBar/SideBar";
import SessionProvider from "Components/Utility/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Login from "Components/Auth/Login/Login";

import ClientProvider from "Components/Notification/ClientProvider";
import { Provider } from "react-redux";
import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chatGPT",
  description: "a clone of chatGPT ai made by openai api",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const issideBarExpanded = false;

  console.log(session);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {
                // TODO : SideBar */

                <div
                  className={`bg-[#202123]  hidden sm:block h-screen sm:overflow-y-hidden md:min-w-[20rem]`}
                >
                  <SideBar />
                </div>
              }

              {
                // TODO : ClientProvider - Notification */
                <ClientProvider />
              }
              <div className={`bg-[#343541] flex-1`}>{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
