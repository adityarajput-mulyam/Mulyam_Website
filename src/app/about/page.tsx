import { Metadata } from "next";
import AboutClient from "@/client-pages/About";

export const metadata: Metadata = {
  title: "About Us | Mulyam — Leading Fresh Produce Agritech Supply Chain",
  description: "Learn about Mulyam Agronomics, our mission, our founding team, and our farm-to-shelf technology supply chain powering India's fresh produce ecosystem.",
};

export default function AboutPage() {
  return <AboutClient />;
}
