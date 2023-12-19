import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { db } from "../../../FireBase/FireBase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const document = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messages: [],
        userId: session?.user?.email!,
        userName: session?.user?.name,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${document.id}`);
  };

  return (
    <div className="border-gray-700 border chatRow" onClick={createNewChat}>
      <FontAwesomeIcon icon={faAdd} className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
