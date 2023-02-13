"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Participant() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/participant/kodevoting`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <Image
        alt="participant"
        src={"/images/participant.svg"}
        width={200}
        height={180}
      />

      <h1 className="text-4xl font-bold">Ikutan Voting</h1>
      <h2 className="w-1/2 text-center">
        Untuk ikutan voting, kamu harus memasukkan kode voting yang sudah di
        berikan panitia/penyelenggara
      </h2>
      <Form
        placeHolder="Masukan kode voting"
        className="w-1/3 mt-3"
        value={code}
        onChange={setCode}
      />

      <Button onClick={handleSubmit} text={"Lanjutkan"} className="w-1/3" />
      <button className="text-sm" onClick={() => router.push("/")}>
        Kembali
      </button>
    </div>
  );
}
