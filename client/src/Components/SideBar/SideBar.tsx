"use client";

import NewChat from "Components/Buttons/NewChat";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
          <div></div>
        </div>
      </div>
      {session && (
        <div className="mb-5 flex flex-row justify-evenly items-center">
          <img
            onClick={() => {
              signOut();
            }}
            src={session.user?.image!}
            alt="ProfilePicture"
            srcSet=""
            className="h-12 w-12 rounded-full cursor-pointer  
          hover:opacity-50"
          />
          <h2 className="text-white text-2xl tracking-wider hover:animate-spin">
            {session.user?.name!}
          </h2>
        </div>
      )}
    </div>
  );
};

export default SideBar;
