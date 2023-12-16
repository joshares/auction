"use client";
import Image, { StaticImageData } from "next/image";

interface popularDataProp {
  image: StaticImageData;
  title: string;
  desc: string;
  lastbid: string;
}

export default function PopularItem({
  image,
  title,
  desc,
  lastbid,
}: popularDataProp) {
  return (
    <main className="">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt="image"
          className="w-full object-cover h-[20rem] transition-transform transform-gpu duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <p className="text-xl uppercase font-semibold">{title}</p>
      <p className="text-sm ">{desc}</p>
      <p className=" uppercase text-sm font-semibold">last bid: {lastbid}</p>
    </main>
  );
}
