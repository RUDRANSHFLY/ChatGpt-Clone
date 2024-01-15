"use client";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { db } from "../../../FireBase/FireBase";
import { getAnswer } from "makeRequest";
import toast from "react-hot-toast";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";

  // models details

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) {
      return;
    }

    const input = prompt.trim();
    setPrompt("");
    const notification = toast.loading("ChatGPT is Thinking...");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    await getAnswer({ input, chatId, model, session, notification });
  };

  return (
    <div className="mt-5 bg-gray-600/50 text-gray-400 rounded-lg text-sm focus:outline-none mb-10 ml-5 mr-5">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          type="text"
          name=""
          id=""
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          placeholder="Type your message here..."
          className="text-white bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
        />
        <button
          disabled={!prompt || !session}
          className={`bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-black disabled:cursor-not-allowed`}
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
