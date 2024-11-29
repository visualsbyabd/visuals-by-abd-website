import { METADATA_DEFAULT_DESCRIPTION, METADATA_DEFAULT_KEYWORDS } from "@/consts/metadata"
import { Metadata } from "next"

export const metadata: Metadata= {
    title: "Portfolio Page",
    description: METADATA_DEFAULT_DESCRIPTION,
    keywords: METADATA_DEFAULT_KEYWORDS,

}

export default function PortfolioPage() {
    return <div></div>
}
