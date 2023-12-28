"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface QuestionsProp {
  question: string;
  answer: string;
  index: number;
}

export default function Questions({ question, answer, index }: QuestionsProp) {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex flex-col  items-start">
      <div
        className=" flex items-end gap-5 text-xl"
        onClick={() => setOpen(!open)}
      >
        <p>{question}</p>
        {open ? (
          <MdKeyboardArrowUp className="text-2xl cursor-pointer" />
        ) : (
          <MdKeyboardArrowDown className="text-2xl cursor-pointer" />
        )}
      </div>
      {open && (
        <div className="w-3/4 text-sm p-4">
          <p>{answer}</p>
        </div>
      )}
    </main>
  );
}
