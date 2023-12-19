"use client";

import NewChat from "Components/Buttons/NewChat";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import React, { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../../FireBase/FireBase";
import { log } from "console";
import ChatRow from "Components/Others/ChatRow";

const SideBar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session?.user?.email!, "chats")
  );

  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
          <div></div>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
