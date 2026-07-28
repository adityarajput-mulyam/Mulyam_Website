import { Metadata } from "next";
import SolutionsClient from "@/client-pages/Solutions";

export const metadata: Metadata = {
  title: "Our Solutions | Mulyam — Tech-Driven Agritech & Fresh Produce Supply Chain",
  description: "Discover Mulyam's innovative agritech solutions empowering farmers, buyers, and transporters across India's fresh produce ecosystem.",
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
