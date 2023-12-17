"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Select() {
  const [show, setShow] = useState(false);
  return (
    <main className="py-4 relative ">
      <div
        className="text-xl bg-primary rounded-sm flex justify-center gap-3 items-end px-5 w-max text-white p-2 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <p>Categories</p>
        {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {show && (
        <ul className="flex flex-col shadow-md w-max p-5 gap-2 uppercase bg-[#f0f0f2] absolute z-10 rounded-lg">
          <p className="cursor-pointer">Random</p>
          <p className="cursor-pointer">Art and Collectibles</p>
          <p className="cursor-pointer">Jewelry and Watches</p>
          <p className="cursor-pointer">Vehicles</p>
          <p className="cursor-pointer">Real Estate</p>
          <p className="cursor-pointer">Electronics and Technology</p>
          <p className="cursor-pointer">Sports Memorabilia</p>
          <p className="cursor-pointer">Others</p>
        </ul>
      )}
    </main>
  );
}
