import Image from "next/image";
import { Inter } from "next/font/google";
import Auction from "@/components/Auction";
import Layout from "@/Layout";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Popular from "@/components/Popular";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="bg-white pt-5 px-5 md:pt-[10rem] md:px-16 m-5 mb-48 mt-0">
        <Description />
        <Popular />
        <Newsletter />
      </div>
    </Layout>
  );
}
