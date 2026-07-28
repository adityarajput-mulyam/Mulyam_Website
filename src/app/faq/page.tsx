import { Metadata } from "next";
import FAQClient from "@/client-pages/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions — Mulyam Agronomics",
  description: "Find answers to frequently asked questions about Mulyam's agritech marketplace, farmer linkages, buyer procurement, quality standards, and logistics.",
};

export default function FAQPage() {
  return <FAQClient />;
}
