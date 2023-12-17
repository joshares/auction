"use client";
import { products } from "@/constants/data";
import Product from "./Product";
import Select from "./Select";

export default function Products() {
  if (products.length < 1) {
    return (
      <main>
        <header></header>
        <div className="w-full text-center text-xl uppercase my-5">
          <p className="text-center"> No item found, try searching.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="px-5 md:px-16">
      <header>
        <Select />
      </header>
      <section className="w-full flex my-5 flex-col gap-5 md:grid grid-cols-3">
        {products.map((product, i) => {
          return <Product product={product} key={i} id={i} />;
        })}
      </section>
    </main>
  );
}
