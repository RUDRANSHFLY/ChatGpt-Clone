// "use client";
// import React from "react";
// import { signIn } from "next-auth/react";
// import Image from "next/image";
// import { authSignHandler } from "../../../../FireBase/FireBase";

// const Login = () => {
//   const openAiUrl =
//     "https://play-lh.googleusercontent.com/fZcfBwN50mLDaWu2QpBoePM6Qfg7qLiNbl6vZHrBjzDjFLQNArp_SBqCZduRsaUvyaZe=w600-h300-pc0xffffff-pd";
//   return (
//     <div className="bg-slate-400 sm:bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center">
//       <Image
//         src={
//           "https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png"
//         }
//         width={300}
//         height={300}
//         alt="Logo"
//         className="w-95 h-95 animate-bounce sm:animate-spin"
//       />
//       <button
//         onClick={() => signIn("goggle")}
//         className="text-black mt-5 text-3xl font-bold sm:text-white sm:text-3xl animate-pulse"
//       >
//         Sign-In to use ChatGPT
//       </button>
//     </div>
//   );
// };

// export default Login;

"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { authSignHandler } from "../../../../FireBase/FireBase";

const Login = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png"
  );
  const openAiUrl =
    "https://play-lh.googleusercontent.com/fZcfBwN50mLDaWu2QpBoePM6Qfg7qLiNbl6vZHrBjzDjFLQNArp_SBqCZduRsaUvyaZe=w600-h300-pc0xffffff-pd";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobileScreen = window.innerWidth < 640;
      if (isMobileScreen) {
        const intervalId = setInterval(() => {
          // Change the image source URL after 30 seconds
          setImageUrl(openAiUrl);
          // Revert back to the original URL after an additional 20 seconds
          setTimeout(() => {
            setImageUrl(
              "https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png"
            );
          }, 20000);
        }, 40000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }
    }
  }, []);

  return (
    <div className="bg-slate-400 sm:bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center">
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="Logo"
        className="w-95 h-95 animate-bounce sm:animate-spin"
      />
      <button
        onClick={() => signIn("google")}
        className="text-black mt-5 text-3xl font-bold sm:text-white sm:text-3xl animate-pulse"
      >
        Sign-In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
