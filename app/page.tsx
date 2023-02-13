"use client";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import React, { Fragment } from "react";
import { LinkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Fragment>
      <Menu />
      {/* Header Section */}
      <div className="flex flex-col place-items-center py-28 space-y-3">
        <h1 className="text-5xl font-bold">Ayo Mulai Voting</h1>
        <h2 className="text-lg bg-zinc-100 px-3 py-1">
          Web Voting No. 1 Di Indonesia
        </h2>
        <img src={"/images/header.svg"} alt="header" width={274} height={243} />
        <div className="space-x-10">
          <Button
            text="Buat Vote Baru"
            className="font-bold"
            onClick={() => router.push("/vote/create")}
          />
          <Button
            text="Ikutan Vote"
            type="secondary"
            className="font-bold"
            onClick={() => router.push("/participant")}
          />
        </div>
      </div>
      {/* End Of Header */}

      {/* Table Section */}
      <div>
        <p className="py-5 text-lg font-bold">Vote yang saya buat</p>
        <table className="table-auto w-full border border-zinc-100">
          <thead>
            <tr>
              <th className="p-5 text-left">No</th>
              <th className="p-5 text-left">Judul</th>
              <th className="p-5 text-left">Kandidat</th>
              <th className="p-5 text-left">Kode</th>
              <th className="p-5 text-left">Mulai</th>
              <th className="p-5 text-left">Selesai</th>
              <th className="p-5 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 text-left">1</td>
              <td className="p-5 text-left">Judul Voting</td>
              <td className="p-5 text-left">Budi VS Anto</td>
              <td className="p-5 text-left">BXZIRAH</td>
              <td className="p-5 text-left">20 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">20 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">
                <div className="flex">
                  <a href="#">
                    <LinkIcon className="w-8 h-8 p-2 hover:bg-zinc-200" />
                  </a>
                  <a href="#">
                    <TrashIcon className="w-8 h-8 p-2 hover:bg-zinc-200" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* End of Table */}
    </Fragment>
  );
}
