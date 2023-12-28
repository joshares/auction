"use client";
import { questions } from "@/constants/Faqs";
import Questions from "./Questions";

export default function FAQ() {
  return (
    <main className="px-5 md:px-16">
      <section className="flex flex-col gap-3 ">
        {questions.map((quest, i) => {
          return <Questions key={i} {...quest} index={i} />;
        })}
      </section>
    </main>
  );
}
