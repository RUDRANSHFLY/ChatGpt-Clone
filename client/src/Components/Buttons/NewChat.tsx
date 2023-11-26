import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewChat = () => {
  return (
    <div className="border-gray-700 border chatRow">
      <FontAwesomeIcon icon={faAdd} className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
