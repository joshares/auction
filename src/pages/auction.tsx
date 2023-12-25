import Layout from "@/Layout";
import Auction from "@/components/Auction";
import Header from "@/components/Header";

export default function Auctions() {
  return (
    <Layout>
      <Header head="create auction" />
      <Auction />
    </Layout>
  );
}
