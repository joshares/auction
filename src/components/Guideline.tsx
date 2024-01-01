"use client";
import { sell, buy } from "@/constants/guide";
import Link from "next/link";

export default function Guideline() {
  return (
    <main className="px-5 md:px-16 flex flex-col gap-10">
      <section id="sell">
        <header className="flex flex-col gap-5  p-2 uppercase mx-auto md:w-2/4">
          <h1 className="font-semibold text-primary">Selling guidelines</h1>
          <p className="text-2xl font-bold text-secondary ">
            request an estimate
          </p>
        </header>
        <ul className="flex flex-col gap-2 pl-10  py-6 list-disc md:w-2/4 md:mx-auto ">
          {sell.map((list, i) => {
            return <li key={i}>{list}.</li>;
          })}
        </ul>
        <footer className="flex md:w-2/4 flex-col gap-3 md:mx-auto">
          <p>
            Auction estimates are provided in 4 weeks for items for which has a
            category of sale and which meet our minimum consignment value
          </p>
          <p>
            Once we have determined that your item is appropriate for auction,
            our specialists will discuss the location and auction date with you
            to ensure the strongest bidding.
          </p>

          <Link
            href="/auction"
            className="bg-secondary w-max p-2 px-6 rounded-md text-white"
          >
            Create auction
          </Link>
        </footer>
      </section>
      <section id="buy">
        <header className="flex flex-col gap-5  p-2 uppercase mx-auto md:w-2/4">
          <h1 className="font-semibold text-primary">Buying guidelines</h1>
          <p className="text-2xl font-bold text-secondary ">
            Find your interest
          </p>
        </header>
        <ul className="flex flex-col gap-2 pl-10  py-6 list-disc md:w-2/4 md:mx-auto ">
          {buy.map((list, i) => {
            return <li key={i}>{list}.</li>;
          })}
        </ul>
        <footer className="flex md:w-2/4 flex-col gap-3 md:mx-auto">
          <p>
            You can also collect your item in person. Some items are moved to an
            off-site storage warehouse after the auction, so please contact your
            Post-Sale Coordinator to confirm the location of your item and
            arrange collection at least 48 hours beforehand.
          </p>
          <p>
            We are happy to store your property for up to 30 days after the
            auction. If collection or shipping arrangements are made after this
            date, we may charge you storage cost
          </p>

          <Link
            href="/marketPlace"
            className="bg-secondary w-max p-2 px-6 rounded-md text-white"
          >
            Market
          </Link>
        </footer>
      </section>
    </main>
  );
}
