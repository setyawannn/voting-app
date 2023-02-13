import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Form from "./Form";

interface Props {
  candidate: Candidate;
  submitCandidateData: (candidate: Candidate) => void;
  removeCandidateForm: (key: number) => void;
}

export default function CandidateForm(props: Props) {
  const [candidate, setCandidate] = useState<Candidate>({
    key: 0,
    name: "",
    title: "",
  });

  useEffect(() => {
    setCandidate(props.candidate);
  }, [props.candidate]);

  useEffect(() => {
    props.submitCandidateData(candidate);
  }, [candidate]);

  return (
    <div className="flex flex-col border border-zinc-100 p-5">
      <div
        onClick={() => props.removeCandidateForm(candidate.key)}
        className="self-end"
      >
        <XCircleIcon className="h-6 w-6 cursor-pointer hover:bg-zinc-100 text-zinc-300" />
      </div>
      <h1 className="flex w-1/2 bg-zinc-100 aspect-square text-center text4xl rounded-full self-center justify-center items-center">
        {props.candidate.key}
      </h1>
      <label>Nama Kandidat</label>
      <Form
        placeHolder="masukan nama kandidat"
        value={candidate.name}
        onChange={(e) => setCandidate({ ...candidate, name: e })}
      />
    </div>
  );
}
