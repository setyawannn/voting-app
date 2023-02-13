import React from "react";
import { Interface } from "readline/promises";

interface Props {
  onChange: (value: string) => void;
  value: string;
  placeHolder: string;
  className?: string;
  type?: string;
}

export default function Form(props: Props) {
  return (
    <input
      placeholder={props.placeHolder}
      onChange={(e) => props.onChange(e.target.value)}
      type={props.type ? props.type : "text"}
      className={`bg-zinc-100 py-2 px-3 ${props.className}`}
      value={props.value}
    />
  );
}
