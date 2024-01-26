"use client";
import SideBar from "Components/SideBar/SideBar";
import Chat from "Components/ui/Chat";
import ChatInput from "Components/ui/ChatInput";
import React, { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: Props) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div>
      <div className={`flex flex-col h-screen overflow-hidden`}>
        {!isSidebarVisible && (
          <Chat chatId={id} toggleSidebar={toggleSidebar} />
        )}
        {!isSidebarVisible && <ChatInput chatId={id} />}
        {isSidebarVisible && <SideBar />}
      </div>
    </div>
  );
};

export default ChatPage;
