import React from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import Example from "Components/Suggestion/Example";
import Capability from "Components/Suggestion/Capability";
import Limitation from "Components/Suggestion/Limitation";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className="text-5xl font-bold mb-20 tracking-widest">ChatGPT</h1>
      <div className="flex space-x-5 text-center">
        <Example />
        <Capability />
        <Limitation />
      </div>
    </div>
  );
};

export default Page;
