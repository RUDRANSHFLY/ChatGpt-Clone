"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col justify-center items-center text-center">
      <Image
        src={
          "https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png"
        }
        width={300}
        height={300}
        alt="Logo"
        className="animate-spin"
      />
      <button
        onClick={() => signIn("goggle")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign-In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
