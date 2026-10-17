"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  ArrowRight,
  ArrowsClockwise,
} from "@phosphor-icons/react";

interface RegionInfo {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  network: string;
  status: string;
  latency: string;
  availability: string;
  tier: string;
  ipv6: boolean;
  lat: number;
  lng: number;
}

const regions: RegionInfo[] = [
  {
    id: "mumbai",
    name: "Asia South 1",
    city: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    network: "1 Gbps / 10 Gbps Burst",
    status: "Operational",
    latency: "6ms local / 32ms regional",
    availability: "99.998%",
    tier: "Tier III+ Certified",
    ipv6: true,
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: "singapore",
    name: "Asia Southeast 1",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    network: "10 Gbps Anycast Mesh",
    status: "Operational",
    latency: "14ms Southeast Asia",
    availability: "99.999%",
    tier: "Tier IV Certified",
    ipv6: true,
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    id: "frankfurt",
    name: "Europe Central 1",
    city: "Frankfurt",
    country: "Germany",
    flag: "🇩🇪",
    network: "DE-CIX Connected 10 Gbps",
    status: "Operational",
    latency: "8ms Pan-Europe",
    availability: "99.999%",
    tier: "Tier III+ Certified",
    ipv6: true,
    lat: 50.1109,
    lng: 8.6821,
  },
  {
    id: "amsterdam",
    name: "Europe West 1",
    city: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    network: "AMS-IX Direct Peering",
    status: "Operational",
    latency: "7ms West Europe",
    availability: "99.998%",
    tier: "Tier III+ Certified",
    ipv6: true,
    lat: 52.3676,
    lng: 4.9041,
  },
  {
    id: "london",
    name: "Europe West 2",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    network: "LINX Direct Exchange",
    status: "Operational",
    latency: "10ms UK / Ireland",
    availability: "99.997%",
    tier: "Tier III+ Certified",
    ipv6: true,
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "virginia",
    name: "US East 1",
    city: "Ashburn, VA",
    country: "United States",
    flag: "🇺🇸",
    network: "Equinix Ashburn Fabric",
    status: "Operational",
    latency: "12ms North America East",
    availability: "99.999%",
    tier: "Tier IV Certified",
    ipv6: true,
    lat: 39.0438,
    lng: -77.4874,
  },
  {
    id: "toronto",
    name: "North America North 1",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    network: "TorIX Connected 1 Gbps",
    status: "Operational",
    latency: "14ms Great Lakes Region",
    availability: "99.996%",
    tier: "Tier III+ Certified",
    ipv6: true,
    lat: 43.6532,
    lng: -79.3832,
  },
];

export function GlobalInfrastructureSection() {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(regions[0]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});

  // Initialize interactive OpenStreetMap via Leaflet
  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current) return;

    // 1. Inject Leaflet Stylesheet if not already added
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // 2. Load Leaflet script dynamically
    const loadLeaflet = () => {
      return new Promise<any>((resolve, reject) => {
        if ((window as any).L) {
          resolve((window as any).L);
          return;
        }
        const existingScript = document.getElementById("leaflet-js");
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve((window as any).L));
          return;
        }
        const script = document.createElement("script");
        script.id = "leaflet-js";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.async = true;
        script.onload = () => resolve((window as any).L);
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    let isMounted = true;

    loadLeaflet()
      .then((L) => {
        if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;

        // Check if dark theme is currently active
        const isDark =
          document.documentElement.classList.contains("dark") ||
          window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Free OpenStreetMap Carto tiles (Dark Matter or Positron Voyager)
        const tileUrl = isDark
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

        // Create Leaflet Map Instance
        const map = L.map(mapContainerRef.current, {
          center: [28, 15],
          zoom: 2,
          minZoom: 2,
          maxZoom: 7,
          scrollWheelZoom: false,
          attributionControl: false,
          zoomControl: false,
        });

        // Add custom zoom control at top-right
        L.control.zoom({ position: "topright" }).addTo(map);

        L.tileLayer(tileUrl, {
          subdomains: "abcd",
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;

        // Add markers for all regions with real coordinates and pulsating pins
        regions.forEach((reg) => {
          const markerHtml = `
            <div class="relative flex items-center justify-center cursor-pointer group" style="transform: translate(-50%, -50%);">
              <span class="absolute -inset-1.5 rounded-full bg-primary/40 animate-ping opacity-75"></span>
              <span class="relative size-3.5 rounded-full bg-primary border-2 border-white shadow-md"></span>
              <span class="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card/95 border border-border px-1.5 py-0.5 font-mono text-[10px] font-semibold text-foreground shadow-xs pointer-events-none">
                ${reg.flag} ${reg.city}
              </span>
            </div>
          `;

          const customIcon = L.divIcon({
            html: markerHtml,
            className: "bg-transparent border-0",
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });

          const marker = L.marker([reg.lat, reg.lng], { icon: customIcon }).addTo(map);

          marker.on("click", () => {
            setSelectedRegion(reg);
            map.flyTo([reg.lat, reg.lng], 4, { duration: 1.2 });
          });

          markersRef.current[reg.id] = marker;
        });

        setMapLoaded(true);
      })
      .catch((err) => {
        console.error("Leaflet load error:", err);
      });

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Pan to selected region on click
  const handleSelectRegion = (reg: RegionInfo) => {
    setSelectedRegion(reg);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([reg.lat, reg.lng], 4, { duration: 1.2 });
    }
  };

  // Reset to full global world view
  const handleResetWorldView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([28, 15], 2, { duration: 1 });
    }
  };

  return (
    <section id="global-infrastructure" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Deploy closer to your customers.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Choose infrastructure locations based on where your customers and applications live. Sub-15ms regional latency guarantees worldwide.
          </p>
        </div>

        {/* Cloud Control Plane Map Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          {/* Real World Map Canvas */}
          <div className="relative rounded-lg border border-border bg-card p-4 sm:p-6 lg:col-span-8 shadow-xs flex flex-col justify-between">
            {/* Control plane top status */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
                <span className="font-mono text-foreground font-medium">BGP ANYCAST ROUTING: OPTIMAL</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-muted-foreground">7 Tier-III+ Zones Active</span>
                <button
                  type="button"
                  onClick={handleResetWorldView}
                  className="inline-flex items-center gap-1 rounded border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                  title="Reset to global view"
                >
                  <ArrowsClockwise className="size-3" />
                  <span>Global View</span>
                </button>
              </div>
            </div>

            {/* Interactive Real Map Viewport */}
            <div className="relative my-4 h-[340px] sm:h-[420px] w-full rounded-md overflow-hidden border border-border bg-muted/30">
              <div ref={mapContainerRef} className="size-full z-10" />

              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-card/60 backdrop-blur-xs z-20">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="size-4 animate-spin text-primary" />
                    <span>Loading real OpenStreetMap view...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick region selector tabs */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {regions.map((r) => {
                const isSelected = selectedRegion.id === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleSelectRegion(r)}
                    className={`rounded border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary font-semibold"
                        : "border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {r.flag} {r.city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side Region Information Card */}
          <div className="lg:col-span-4 rounded-lg border border-border bg-card p-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Region Inspector
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl">{selectedRegion.flag}</span>
                  <h3 className="text-lg font-bold text-foreground">
                    {selectedRegion.city}
                  </h3>
                </div>
                <div className="text-xs text-muted-foreground">
                  {selectedRegion.name} · {selectedRegion.country}
                </div>
              </div>
              <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold text-foreground border border-border">
                {selectedRegion.status}
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-xs">
              <div className="flex justify-between border-b border-border/60 pb-2.5">
                <span className="text-muted-foreground">Network Fabric</span>
                <span className="text-foreground font-semibold">{selectedRegion.network}</span>
              </div>

              <div className="flex justify-between border-b border-border/60 pb-2.5">
                <span className="text-muted-foreground">Measured Latency</span>
                <span className="text-foreground font-mono font-medium">{selectedRegion.latency}</span>
              </div>

              <div className="flex justify-between border-b border-border/60 pb-2.5">
                <span className="text-muted-foreground">SLA Availability</span>
                <span className="font-mono text-foreground font-semibold">{selectedRegion.availability}</span>
              </div>

              <div className="flex justify-between border-b border-border/60 pb-2.5">
                <span className="text-muted-foreground">Datacenter Spec</span>
                <span className="text-foreground font-semibold">{selectedRegion.tier}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">IPv6 Dual-Stack</span>
                <span className="text-foreground font-semibold">Enabled by Default</span>
              </div>
            </div>

            {/* Deploy into this region CTA */}
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                className="w-full justify-center gap-1.5"
                nativeButton={false}
                render={<Link href={`/dashboard/deploy?region=${selectedRegion.id}`} />}
              >
                <span>Deploy in {selectedRegion.city}</span>
                <ArrowRight weight="bold" className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
