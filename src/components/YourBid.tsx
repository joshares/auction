"use client";
import Image from "next/image";
import demo from "../../public/popular.jpg";
import { popularData } from "@/constants/data";

export default function YourBid() {
  return (
    <main className="flex flex-col gap-2 py-5">
      {popularData.map((item, i) => {
        return (
          <section
            key={i}
            className="flex justify-center items-center gap-4 hover:border hover:border-primary cursor-pointer  "
          >
            <div className="w-1/2">
              <Image
                src={item.image}
                alt="image"
                className=" md:h-[20rem] h-[10rem] object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-between uppercase h-[10rem] p-5 font-semibold">
              <p>Title : {item.title}</p>
              <p>highest Bid : {item.lastbid}</p>
              <p>Your Bid : {item.lastbid}</p>
            </div>
          </section>
        );
      })}
    </main>
  );
}
