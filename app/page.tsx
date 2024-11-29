import { AboutMeSection, BestSellingSection, HeroSection, LatestProjectsSection, ServicesSection } from "@/components/home";
import { METADATA_DEFAULT_DESCRIPTION, METADATA_DEFAULT_KEYWORDS } from "@/consts/metadata";
import { Metadata } from "next";

export const metadata: Metadata= {
    title: "Home Page",
    description: METADATA_DEFAULT_DESCRIPTION,
    keywords: METADATA_DEFAULT_KEYWORDS,
}

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutMeSection />
            <ServicesSection />
            <LatestProjectsSection />
            <BestSellingSection />
        </>
    );
}
