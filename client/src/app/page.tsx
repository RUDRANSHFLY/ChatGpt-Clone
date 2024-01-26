// import React from "react";
// import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
// import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
// import Example from "Components/Suggestion/Example";
// import Capability from "Components/Suggestion/Capability";
// import Limitation from "Components/Suggestion/Limitation";
// import ChatInput from "Components/ui/ChatInput";

// interface PageProps {
//   toggleSidebar: () => void;
// }

// const Page: React.FC<PageProps> = ({ toggleSidebar }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-white sm:h-screen px-2">
//       <div className="mt-10 mb-10 w-full flex flex-wrap items-center justify-evenly align-baseline">
//         <FontAwesomeIcon
//           className="h-12 w-12 sm:hidden"
//           icon={faBars}
//           onClick={toggleSidebar}
//         />
//         <h1 className="text-5xl font-bold tracking-widest">ChatGPT</h1>
//       </div>
//       <div className="w-full h-full flex flex-wrap  flex-row sm:mt-10 sm:flex sm:flex-row sm:flex-wrap sm:space-x-5 sm:text-center justify-center">
//         <Example />
//         <Capability />
//         <Limitation />
//       </div>
//       ooo
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";
import Example from "Components/Suggestion/Example";
import Capability from "Components/Suggestion/Capability";
import Limitation from "Components/Suggestion/Limitation";
import ChatInput from "Components/ui/ChatInput";
import SideBar from "Components/SideBar/SideBar";

const Page = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center text-white sm:h-screen px-2 ${
          !sidebarVisible ? "hidden" : ""
        }`}
      >
        <div className="mt-10 mb-10 w-full flex flex-wrap items-center justify-evenly align-baseline">
          <FontAwesomeIcon
            className="h-12 w-12 sm:hidden"
            icon={faBars}
            onClick={toggleSidebar}
          />
          <h1 className="text-5xl font-bold tracking-widest">ChatGPT</h1>
        </div>
        <div className="w-full h-full flex flex-wrap  flex-row sm:mt-10 sm:flex sm:flex-row sm:flex-wrap sm:space-x-5 sm:text-center justify-center">
          <Example />
          <Capability />
          <Limitation />
        </div>
      </div>
      <div className={`${!sidebarVisible ? "w-full" : ""}`}>
        {!sidebarVisible ? <SideBar /> : ""}
      </div>
    </div>
  );
};

export default Page;
