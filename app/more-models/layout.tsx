import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Models | Greenova EV Seller - Extended Product Range",
  description: "Explore our extended range of electric two-wheeler models. View detailed specifications and features of all available EV scooters.",
  openGraph: {
    title: "More Models | Greenova EV Seller",
    description: "Explore our extended range of electric two-wheeler models.",
  },
};

export default function MoreModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

