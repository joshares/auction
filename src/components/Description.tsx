"use client";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { GiMarbles } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";

export default function Description() {
  return (
    <main className="flex items-start md:flex-row flex-col p-5 gap-10">
      <section className="md:w-1/2 w-full text-secondary ">
        <h1 className="text-3xl font-semibold text-secondary">Description</h1>
        <p className=" py-4 border-b border-primary w-3/4">
          Magnificient, huge and ancient Roman marble bust,one of the most
          Important deities in classical Roman religion.
        </p>
      </section>
      <section className="text-secondary relative mt-5">
        <h1 className="text-3xl font-semibold absolute -top-[2rem] p-3 pr-16 bg-white ">
          Sellers
        </h1>
        <article className="py-8 px-12 border border-primary ">
          <div className="flex justify-left items-start gap-5 border-b pb-5 border-primary">
            <CiUser className="text-primary text-xl" />
            <div>
              <p>
                <span className="font-semibold">Antiquaries </span>from Italy
              </p>
              <p>
                Shipping price: <span className="font-semibold">$200</span>
              </p>
            </div>
          </div>
          <ol className="py-5 flex flex-col gap-2">
            <div className="flex justify-left gap-5 items-center">
              <SlCalender className="text-primary " />
              <p>20th Century</p>
            </div>
            <div className="flex justify-left gap-5 items-center">
              <GiMarbles className="text-primary " />
              <p>Marble</p>
            </div>
            <div className="flex justify-left gap-5 items-center">
              <GiWeight className="text-primary " />
              <p>60kg</p>
            </div>
            <div className="flex justify-left gap-5 items-center">
              <CiLocationOn className="text-primary " />
              <p>Italy</p>
            </div>
          </ol>
        </article>
        <button className="bg-secondary text-white w-full p-4">
          Seller&apos;s profile
        </button>
      </section>
    </main>
  );
}
