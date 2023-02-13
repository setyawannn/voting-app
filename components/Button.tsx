"use client";
import React from "react";

interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className={`px-3 py-2 border-2 border-black 
      ${props.type == undefined && "bg-black text-white hover:bg-zinc-800"}

      ${
        props.type == "secondary" &&
        "bg-white text-black hover:text-white hover:bg-black"
      }
      ${props.className}`}
    >
      {props.text}
    </button>
  );
}
