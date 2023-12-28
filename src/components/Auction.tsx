"use client";
export default function Auction() {
  return (
    <main className="px-5 md:px-16">
      <section>
        <form className="flex flex-col gap-4 p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-3 md:items-center ">
            <label
              htmlFor="maker"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap"
            >
              Maker
            </label>
            <input
              type="text"
              name="maker"
              className="w-full outline-none p-2"
              placeholder="ex. josh thompson"
            />
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <label
              htmlFor="desc"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap"
            >
              Description
            </label>
            <textarea name="desc" className="w-full outline-none p-2" />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center ">
            <label
              htmlFor="location"
              className="text-primary font-semibold uppercase  md:w-1/4 whitespace-nowrap"
            >
              Location of Item
            </label>
            <input
              type="text"
              name="location"
              className="w-full outline-none p-2"
              placeholder="ex. 19,Gra ikeja lagos,Nigeria"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center ">
            <label
              htmlFor="startprice"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap"
            >
              Starting price
            </label>
            <input
              type="text"
              name="startprice"
              className="w-full outline-none p-2"
              placeholder="$900"
            />
          </div>
          <div className="flex md:flex-row gap-3 flex-col">
            <label
              htmlFor="desc"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap"
            >
              provenance
            </label>
            <textarea
              name="desc"
              className="w-full outline-none p-2"
              placeholder="where and when was the work acquired?"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center ">
            <label
              htmlFor="dimension"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap "
            >
              dimensions <span className="text-gray-400">Optional</span>
            </label>
            <input
              type="text"
              name="dimension"
              className="w-full outline-none p-2"
              placeholder="width x height (1440 x 800)"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:items-center ">
            <label
              htmlFor="image"
              className="text-primary font-semibold uppercase md:w-1/4 whitespace-nowrap "
            >
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full outline-none p-2 bg-white"
              placeholder="width x height (1440 x 800)"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white p-2 w-max mx-auto px-8 my-2"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
