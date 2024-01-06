"use client";

import Link from "next/link";

export default function Profiles() {
  return (
    <main className="px-5 md:px-16">
      <header className="w-full  bg-[url('../../public/roman-girl.jpg')] h-[10rem] md:h-[15rem] flex justify-center items-center">
        <p className="w-max bg-primary text-white p-5 px-6 rounded-full">JA</p>
      </header>
      <section className="uppercase text-primary flex flex-col gap-2 pt-2 justify-center text-2xl">
        <div className="flex ">
          <p className="w-36">FullName:</p>{" "}
          <p className="text-secondary">Joshua aregbe</p>
        </div>
        <div className="flex ">
          <p className="w-36">EMail:</p>{" "}
          <p className="text-secondary">Joshares@gmail.com</p>
        </div>
        <div className="flex ">
          <p className="w-36">bids:</p> <p className="text-secondary">45</p>
        </div>
        <div className="flex">
          <p className="w-36">Auctions:</p>
          <p className="text-secondary">14</p>
        </div>
      </section>
      <footer className="flex items-center justify-center py-5">
        <Link href="/bids" className="border-b border-secondary ">
          Check your lastest bids
        </Link>
      </footer>
    </main>
  );
}
