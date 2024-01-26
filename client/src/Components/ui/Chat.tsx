"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../FireBase/FireBase";
import Message from "model/Message";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  chatId: string;
  toggleSidebar: () => void;
};

const Chat = ({ chatId, toggleSidebar }: Props) => {
  const { data: session } = useSession();

  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-5 flex-1 overflow-y-auto sm:p-0">
      <div className="w-13 mb-20 fixed bg-stone-900 sm:hidden mr-5">
        <FontAwesomeIcon
          className="text-white pt-2 pb-2 pl-2 pr-2 h-10 w-10 sm:hidden"
          icon={faBars}
          onClick={toggleSidebar}
        />
      </div>
      {messages?.empty && (
        <>
          <p className="mt-20 text-center text-white">
            Type a prompt in below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};

export default Chat;
