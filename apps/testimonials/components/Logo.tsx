import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Image
        src="/settify-bg.png"
        alt="Muslim Settify"
        width={36}
        height={36}
        priority
        sizes="(max-width: 768px) 28px, 36px"
        className="h-7 w-7 md:h-9 md:w-9 select-none pointer-events-none"
      />
      <span className="hidden md:inline text-lg font-bold tracking-tight text-[#1A202C]">
        Muslim Settify
      </span>
    </div>
  );
}

