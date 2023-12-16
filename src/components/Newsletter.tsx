"use client";

export default function Newsletter() {
  return (
    <main className="relative  px-8 md:px-20 py-5">
      <section className="bg-primary p-4 flex flex-col gap-4 items-center justify-center absolute  w-full py-8 top-0 right-0">
        <h1 className="text-secondary font-bold md:text-xl">Newsletter</h1>
        <p className=" text-xl md:text-3xl text-white">
          Get a curated selection in your inbox
        </p>
        <form className="flex w-full justify-center items-center">
          <input type="text" value="" className="w-1/2 p-2 outline-none" />
          <button
            type="submit"
            className="bg-secondary p-2 px-8 text-white w-max text-center"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
