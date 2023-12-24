import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../../FireBase/FireBase";

type Props = {
  id: string;
};

const ChatRow = ({ id }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!pathName) {
      return;
    }
    setActive(pathName.includes(id));
  }, [pathName]);

  const [messages, loading, error] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages"),
      orderBy("createdAt", "asc")
    )
  );

  const deleteChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <div className="pl-2 pt-5 flex flex-col">
      <Link
        className={`chatRow flex justify-evenly ${active && "bg-gray-700/50"}`}
        href={`/chat/${id}`}
      >
        <FontAwesomeIcon icon={faMessage} className="text-white h-5 w-5" />

        <p className="text-white">
          {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
        </p>

        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-700 h-5 w-5 hover:text-red-600"
          onClick={deleteChat}
        />
      </Link>
    </div>
  );
};
("");
export default ChatRow;
