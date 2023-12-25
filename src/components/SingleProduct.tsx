"use client";
import Image from "next/image";
import demo from "../../public/popular.jpg";
import { RiTimerLine } from "react-icons/ri";
import Description from "./Description";

export default function SingleProduct() {
  return (
    <main className="px-1 md:px-16">
      <section className="pt-5">
        <div className="bg-primary text-white w-max text-xs flex mx-auto gap-2 items-center p-2 rounded-sm">
          <RiTimerLine />
          <p>CLOSING IN 2H: 24M:35s</p>
        </div>
        <div className=" ">
          <Image
            src={demo}
            alt="image"
            className="h-[20rem] md:h-[30rem] object-cover hover:brightness-50"
          />
        </div>
      </section>
      <section className=" bg-purple-100 w-full flex justify-between items-center p-6  shadow-md  ">
        <div>
          <p className="text-primary uppercase text-xs font-bold">Author</p>
          <p className="text-sm">Edward Peter</p>
        </div>
        <div className="h-10 w-[1px] bg-primary"></div>
        <div className="">
          <p className="text-primary uppercase text-xs font-bold">
            highest bid
          </p>
          <p className="text-sm">$1500</p>
        </div>

        <div className="h-10 w-[1px] bg-primary"></div>
        <div>
          <p className="text-primary uppercase text-xs font-bold">seller</p>
          <p className="text-sm">Edward Peter</p>
        </div>
      </section>
      <section className="bg-white p-8 md:px-14">
        <Description />
        <div className="py-10">
          <form className="flex w-full justify-center items-center">
            <input
              type="text"
              value=""
              className="w-[8rem] p-2 outline-none bg-[#f0f0f2] shadow-md"
            />
            <button
              type="submit"
              className="bg-secondary p-2 px-8 text-white w-max text-center shadow-md"
            >
              Bid
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
