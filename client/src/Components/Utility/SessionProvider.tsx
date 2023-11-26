"use client";

import React from "react";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider = ({ children, session }: Props) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
