import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../types";

type ProductPropType = {
  product: ProductType;
  id: number;
};

export default function Product({ product, id }: ProductPropType) {
  const { image, title, desc, lastbid } = product;

  return (
    <main className="w-full shadow-md  relative overflow-hidden group cursor-pointer">
      {/* href={`marketPlace/${id}`} */}
      <Link href={"#"}>
        <Image
          src={image}
          width={400}
          alt="product"
          priority
          className="w-full h-60 object-cover group-hover:brightness-50 rounded-md"
        />
      </Link>
      <div className="flex justify-between  uppercase p-2 absolute bottom-0 text-white opacity-0 group-hover:opacity-100 ">
        <div className="w-5/6 font-bold ">
          <p>{title}</p>
          <p className="font-bold">Top bid: {lastbid}</p>
          <p className="font-semibold text-sm w-3/4 break-words">{desc}</p>
        </div>
      </div>
    </main>
  );
}
