import Layout from "@/Layout";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";

export default function MarketPlace() {
  return (
    <Layout>
      <section className="w-full flex md:flex-row flex-col gap-5">
        {/* <div className="md:w-1/4 ">
            <Filter />
          </div> */}
        <div className="w-full">
          <Products />
        </div>
      </section>
      <footer className="h-[15rem] px-5 md:px-16">
        <Newsletter />
      </footer>
    </Layout>
  );
}
