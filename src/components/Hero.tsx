"use client";
import Image from "next/image";
import { RiTimerLine } from "react-icons/ri";
import romanGirl from "../../public/roman-girl.jpg";

export default function Hero() {
  return (
    <main className="pt-5 w-full ">
      <header className="flex relative z-10 flex-col md:flex-row md:justify-between  md:items-end justify-center items-center gap-4 px-5 md:px-16">
        <p className="text-3xl text-center md:text-left md:text-6xl md:w-3/5 w-full">
          Ancient Roman marble bust - 20th Century
        </p>
        <div className="bg-primary text-white w-max text-xs flex gap-2 items-center p-2 rounded-sm">
          <RiTimerLine />
          <p>CLOSING IN 2H: 24M:35s</p>
        </div>
      </header>
      <div className="relative w-full md:h-[32rem]">
        <section className="absolute top-10 left-[20%] z-20 w-1/4 md:flex flex-col gap-[8rem] hidden">
          <article>
            <p>
              Magnificient, huge and ancient Roman marble bust,one of the most
              Important deities in classical Roman religion.
            </p>
          </article>
          <article className="w-full bg-primary text-white p-8 rounded-b-[4rem]">
            <header>
              <p className="text-3xl pb-8">Auction</p>
            </header>
            <ul className="flex flex-col gap-4 justify-center items-center text-gray-300">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm border-b pb-2 border-gray-500">
                  Bid 4567{" "}
                  <span className="text-gray-400 text-xs">
                    19, oct- 11:19:22
                  </span>
                </p>
                <p className="text-sm"> $800</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm border-b pb-2 border-gray-500">
                  Bid 4567{" "}
                  <span className="text-gray-400 text-xs">
                    19, oct- 11:19:22
                  </span>
                </p>
                <p className="text-sm"> $800</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm border-b pb-2 border-gray-500">
                  Bid 4567{" "}
                  <span className="text-gray-400 text-xs">
                    19, oct- 11:19:22
                  </span>
                </p>
                <p className="text-sm"> $800</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm border-b pb-2 border-gray-500">
                  Bid 4567{" "}
                  <span className="text-gray-400 text-xs">
                    19, oct- 11:19:22
                  </span>
                </p>
                <p className="text-sm"> $800</p>
              </div>
            </ul>
            <p className="text-center text-sm py-2 border-b border-gray-500 uppercase  text-gray-300">
              Most popular item currently
            </p>
            <footer className="text-center text-xs">
              <p className=" text-gray-300">
                34 people are watching this auction
              </p>
              <p className="text-gray-500">
                Auction fee is 7% of the winning bid
              </p>
            </footer>
          </article>
        </section>
        <section className="md:absolute right-0 top-0 md:w-3/5">
          <div className="overflow-hidden">
            <Image
              src={romanGirl}
              width={500}
              alt="image"
              className="w-full h-[25rem]  md:h-[33rem] object-cover transition-transform transform-gpu duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <footer className="md:absolute bg-purple-100 w-full flex justify-between items-center p-6 md:w-3/5  shadow-md  top-[100%] z-40">
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
          </footer>
        </section>
      </div>
    </main>
  );
}
