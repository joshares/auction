"use client";
import { CiTwitter, CiInstagram } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
export default function Footer() {
  return (
    <main className="px-5 md:px-16 py-5 flex flex-col md:flex-row gap-4 md:items-start items-center justify-between">
      <section className="text-secondary relative mt-5 w-3/4 md:w-1/3">
        <h1 className="text-3xl font-semibold absolute -top-[2rem] p-3 pr-16 bg-[#f0f0f2]  z-10">
          Socials
        </h1>
        <article className="py-8 px-12 border border-primary ">
          <ol className="py-5 flex flex-col gap-2">
            <Link href="#" className="flex justify-left gap-5 items-center">
              <CiInstagram className="text-primary " />
              <p>Instagram</p>
            </Link>
            {/* <Link href="#" className="flex justify-left gap-5 items-center">
              <CiTwitter className="text-primary " />
              <p>Twitter</p>
            </Link> */}
            <Link href="#" className="flex justify-left gap-5 items-center">
              <AiOutlineMail className="text-primary " />
              <p>Email</p>
            </Link>
          </ol>
        </article>
      </section>
      <section className="text-secondary relative mt-5   w-3/4 md:w-1/3">
        <h1 className="text-3xl font-semibold absolute -top-[2rem] p-3 pr-16 bg-[#f0f0f2]  z-10">
          Links
        </h1>
        <article className="py-8 px-12 border border-primary ">
          <ol className="py-5 flex flex-col gap-2">
            <Link
              href="/marketPlace"
              className="flex justify-left gap-5 items-center"
            >
              <p>Market</p>
            </Link>
            <Link href="/bids" className="flex justify-left gap-5 items-center">
              <p>Bids</p>
            </Link>
          </ol>
        </article>
      </section>
      <section className="text-secondary relative mt-5  w-3/4 md:w-1/3">
        <h1 className="text-3xl font-semibold absolute -top-[2rem] p-3 pr-16 bg-[#f0f0f2]  z-10">
          Help
        </h1>
        <article className="py-8 px-12 border border-primary ">
          <ol className="py-5 flex flex-col gap-2">
            <Link href="#" className="flex justify-left gap-5 items-center">
              <p>FAQs</p>
            </Link>
            <Link href="#" className="flex justify-left gap-5 items-center">
              <p>Guidelines</p>
            </Link>
          </ol>
        </article>
      </section>
    </main>
  );
}
