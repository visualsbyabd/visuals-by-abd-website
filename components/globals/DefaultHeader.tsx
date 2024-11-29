"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TABS } from "@/consts/navigation";


export default function DefaultHeader() {
    const pathname= usePathname();
    return <header className="w-full h-[10vh] fixed top-0 px-4 md:px-8 lg:px-16 py-1 md:py-2 flex flex-row items-center justify-start gap-2 md:justify-between">
        <Link href="/">
            <Image alt="Visuals By Abd Logo" src="/logo-accent.png" width={2134} height={2134} className="cursor-pointer w-[6vh] aspect-square object-cover object-center"></Image>
        </Link>
        <div className="md:flex hidden gap-8 items-center justify-end h-full">
            {TABS.map((tab) => <Link  href={tab.href} key={tab.name} className={`font-secondary text-lg hover:opacity-100 duration-500 ease-in ${tab.href === pathname ? "opacity-100 font-bold text-accent-color": "opacity-50 text-primary-varient-color font-medium"}`}>{tab.title}</Link>)}
        </div>

    </header>
}
