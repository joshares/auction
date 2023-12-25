"use client";
import Layout from "@/Layout";
import Newsletter from "@/components/Newsletter";
import SingleProduct from "@/components/SingleProduct";

export default function Index() {
  return (
    <Layout>
      <SingleProduct />
      <footer className="h-[15rem] px-5 md:px-20">
        <Newsletter />
      </footer>
    </Layout>
  );
}
