import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Performance Cloud VPS Hosting | Bhartiya Cloud",
  description:
    "Deploy scalable KVM Cloud VPS instances with dedicated AMD EPYC compute, Gen4 NVMe arrays, unmetered 10 Gbps uplinks, and 3.2 Tbps DDoS protection.",
  keywords: [
    "cloud vps",
    "kvm vps",
    "nvme cloud hosting",
    "virtual private server",
    "bhartiya cloud",
    "ddos protected vps",
  ],
  openGraph: {
    title: "High-Performance Cloud VPS | Bhartiya Cloud",
    description:
      "Instant provisioning, dedicated compute, and 99.99% SLA guaranteed across 18+ global edge regions.",
    type: "website",
  },
};

export default function CloudVpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
