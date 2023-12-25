import Layout from "@/Layout";
import Bids from "@/components/Bids";
import Newsletter from "@/components/Newsletter";

export default function bids() {
  return (
    <Layout>
      <Bids />
      <footer className="h-[15rem] px-5 md:px-16">
        <Newsletter />
      </footer>
    </Layout>
  );
}
