import { Metadata } from "next";
import BrandsClient from "@/client-pages/Brands";

export const metadata: Metadata = {
  title: "Our Brands | Mulyam — Powering I'mFresh & ImKisan Agritech Ecosystem",
  description: "Discover Mulyam's flagship brands: I'mFresh B2B produce supply chain for quick commerce and ImKisan digital farm advisory network.",
};

export default function BrandsPage() {
  return <BrandsClient />;
}
