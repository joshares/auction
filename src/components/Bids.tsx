"use client";

import { useState } from "react";
import YourBid from "./YourBid";
import YourAuction from "./YourAuction";

export default function Bids() {
  const [bid, setBids] = useState(true);
  return (
    <main className="px-5 md:px-16">
      <header className="flex items-centerw-full py-5 uppercase">
        <p
          className={`w-1/2 ${
            bid === true && "border-b"
          } text-center border-primary pb-4 cursor-pointer `}
          onClick={() => setBids(true)}
        >
          Your Bids
        </p>
        <p
          className={`w-1/2   ${
            bid === false && "border-b"
          } text-center border-primary pb-4 cursor-pointer`}
          onClick={() => setBids(false)}
        >
          Your Auctions
        </p>
      </header>
      <section>{bid && <YourBid />}</section>
      <section>{!bid && <YourAuction />}</section>
    </main>
  );
}
