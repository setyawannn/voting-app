"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";

export default function Menu() {
  const router = useRouter();

  return (
    <div className="flex justify-between py-5">
      <Image
        src={"/images/logo.svg"}
        alt="company logo"
        width={100}
        height={100}
        onClick={() => router.push("/")}
        className={"cursor-pointer"}
      />
      <Button text="Login" />
    </div>
  );
}
