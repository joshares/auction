"use client";

interface HeaderProp {
  head: string;
}

export default function Header({ head }: HeaderProp) {
  return (
    <main className="px-5 md:px-16">
      <header className="py-5 flex justify-between items-center w-full gap-2">
        <div className="h-[1px] bg-slate-400 w-full"></div>
        <p className="text-center uppercase font-bold whitespace-nowrap text-primary">
          {head}
        </p>
        <div className="h-[1px] w-full bg-slate-400 "></div>
      </header>
    </main>
  );
}
