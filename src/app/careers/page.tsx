import { Metadata } from "next";
import CareersClient from "@/client-pages/Careers";

export const metadata: Metadata = {
  title: "Careers | Join Mulyam — Build the Future of Agritech Supply Chains",
  description: "Explore open job positions at Mulyam Agronomics. Join our mission to revolutionize farm-to-shelf agritech and quick-commerce supply chains in India.",
};

export default function CareersRoutePage() {
  return <CareersClient />;
}
