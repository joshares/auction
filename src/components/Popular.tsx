"use client";
import { popularData as data } from "@/constants/data";
import { FaLongArrowAltRight } from "react-icons/fa";
import PopularItem from "./PopularItem";

export default function Popular() {
  return (
    <main className="w-full py-8 text-secondary">
      <header className="flex items-end justify-between">
        <p className="text-xl md:text-3xl font-semibold">
          This might interest you
        </p>
        <div className=" bg-primary h-[2px] md:w-3/5 w-1/2"></div>
      </header>
      <section className="flex md:flex-row flex-col justify-center items-center gap-5 py-5">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <PopularItem {...item} />
            </div>
          );
        })}
      </section>
      <footer className="flex items-end justify-between">
        <div className=" bg-primary h-[2px] md:w-3/5 w-1/2"></div>
        <div className="flex justify-center items-end gap-2 cursor-pointer">
          <p className="text-xl md:text-3xl font-semibold">More items</p>
          <FaLongArrowAltRight className="text-xl md:text-3xl" />
        </div>
      </footer>
    </main>
  );
}
