import Image from "next/image";
import { Inter } from "next/font/google";
import Auction from "@/components/Auction";
import Layout from "@/Layout";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
