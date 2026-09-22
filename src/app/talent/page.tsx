import type { Metadata } from "next";
import { TalentPortfolio } from "@/components/talent/talent-page";

export const metadata: Metadata = { title: "Talent", description: "Reese Avery — acting, modeling, and on-camera work." };
export default function TalentPage() { return <TalentPortfolio />; }
