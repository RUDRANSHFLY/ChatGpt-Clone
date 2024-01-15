import React from "react";
import { DocumentData } from "firebase-admin/firestore";
import Image from "next/image";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  console.log(message.user.name);

  const isChatGPT = message.user.name == "ChatGPT";
  console.log(isChatGPT);

  return (
    <div className={`py-10  text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 max-w-2xl mx-auto">
        <Image
          width={8}
          height={8}
          src={message.user.avatar}
          alt=""
          className="h-8 w-8 "
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
