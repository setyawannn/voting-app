"use client";
import Button from "@/components/Button";
import CandidateItem from "@/components/CandidateItem";
import Countdown from "@/components/TimeCountdown";
import Menu from "@/components/Menu";
import { usePathname } from "next/navigation";
import React from "react";
import TimeCountdown from "@/components/TimeCountdown";

export default function DetailParticipant() {
  const searchParams = usePathname();
  const code = searchParams?.split("/").pop();

  return (
    <div>
      <Menu />

      <div>
        <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

        {/* Timer */}
        <TimeCountdown />
        {/* End of Timer */}

        {/* Candidate */}
        <div className="mt-10 space-y-3 mx-auto w-2/3">
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </div>
        {/* End of Candidate */}

        {/* Button */}
        <div className="text-center mt-10">
          <Button text="Kirim Vote Saya" />
        </div>
        {/* End of Button */}
      </div>
    </div>
  );
}
