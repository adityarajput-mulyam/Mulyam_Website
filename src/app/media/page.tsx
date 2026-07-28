import { Metadata } from "next";
import MediaClient from "@/client-pages/MediaPage";

export const metadata: Metadata = {
  title: "Media & Press | Mulyam — Agritech Insights & News Coverage",
  description: "Explore news coverage, press releases, media features, and industry insights about Mulyam Agronomics and India's fresh produce supply chain.",
};

export default function MediaRoutePage() {
  return <MediaClient />;
}
