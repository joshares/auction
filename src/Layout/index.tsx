import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type WrapperProps = {
  children: ReactNode;
};

export default function Layout({ children }: WrapperProps) {
  return (
    <main className="">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
