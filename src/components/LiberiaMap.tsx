"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COUNTIES, VIEWBOX } from "@/data/liberia-map";

type CountyMeta = {
  programs: string[];
  href?: string;
};

// Only the 7 active counties get metadata; anything else on the map renders
// as a muted, non-interactive shape.
const ACTIVE: Record<string, CountyMeta> = {
  Lofa: {
    programs: ["Adult Literacy Program"],
    href: "/programs/education-livelihood#overview",
  },
  Nimba: {
    programs: ["Climate-Smart Agriculture", "VSLAs", "28.1-acre Demo Farm"],
    href: "/programs/climate-smart-agriculture#overview",
  },
  "Grand Cape Mount": { programs: ["Outreach Programs"] },
  Bomi: { programs: ["Outreach Programs"] },
  Montserrado: {
    programs: ["HAC", "HHI", "EDC / Youth Advance"],
    href: "/programs/education-livelihood#overview",
  },
  "River Gee": { programs: ["Community Development"] },
  Maryland: { programs: ["Community Development"] },
};

// Alphabetical (as in the data file) is fine for the legend order.
const activeCounties = COUNTIES.filter((c) => ACTIVE[c.name]);

export default function LiberiaMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="relative w-full max-w-[1000px] mx-auto rounded-2xl bg-white border border-gray-200 overflow-hidden">
        <svg
          viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}
          className="w-full h-auto block"
          role="img"
          aria-label="Map of Liberia showing SHIFSD's 7 active operation counties"
        >
          {/* Ocean / background */}
          <rect
            width={VIEWBOX.width}
            height={VIEWBOX.height}
            fill="#F4F0EB"
          />

          {/* Country label — sits under the counties */}
          <text
            x={VIEWBOX.width / 2}
            y={VIEWBOX.height / 2 - 10}
            textAnchor="middle"
            className="font-[family-name:var(--font-display)]"
            fontSize="56"
            fontWeight="600"
            fill="#1E3A3A"
            opacity="0.05"
            style={{ letterSpacing: "4px" }}
          >
            LIBERIA
          </text>

          {/* Inactive counties — muted fill, subtle border */}
          {COUNTIES.filter((c) => !ACTIVE[c.name]).map((c) => (
            <path
              key={c.name}
              d={c.path}
              fill="#FFFFFF"
              stroke="#D1D5DB"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          ))}

          {/* Active counties — interactive fills */}
          {activeCounties.map((c) => {
            const isHovered = hovered === c.name;
            return (
              <motion.path
                key={c.name}
                d={c.path}
                initial={false}
                animate={{
                  fill: isHovered ? "#1A6B5A" : "#A7F3D0",
                }}
                transition={{ duration: 0.2 }}
                stroke="#1A6B5A"
                strokeWidth={isHovered ? 2 : 1.2}
                strokeLinejoin="round"
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
                style={{ pointerEvents: "all" }}
              />
            );
          })}

          {/* Inactive county labels */}
          {COUNTIES.filter((c) => !ACTIVE[c.name]).map((c) => (
            <text
              key={`label-${c.name}`}
              x={c.centroid[0]}
              y={c.centroid[1]}
              textAnchor="middle"
              fontSize="9"
              fill="#9CA3AF"
              className="font-[family-name:var(--font-body)] pointer-events-none select-none"
            >
              {c.name}
            </text>
          ))}

          {/* Active county markers + labels */}
          {activeCounties.map((c, i) => (
            <g key={`marker-${c.name}`} className="pointer-events-none">
              <motion.circle
                cx={c.centroid[0]}
                cy={c.centroid[1]}
                r="10"
                fill="#1A6B5A"
                initial={{ opacity: 0.4, scale: 1 }}
                animate={{
                  opacity: [0.4, 0, 0.4],
                  scale: [1, 2.2, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
              <circle
                cx={c.centroid[0]}
                cy={c.centroid[1]}
                r="6"
                fill="#F5B731"
                stroke="#1E3A3A"
                strokeWidth="1.5"
              />
              <text
                x={c.centroid[0]}
                y={c.centroid[1] + 20}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill="#1E3A3A"
                className="font-[family-name:var(--font-heading)] select-none"
                style={{ paintOrder: "stroke", stroke: "#FFFFFF", strokeWidth: "3" }}
              >
                {c.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && ACTIVE[hovered] && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
              className="absolute top-4 right-4 bg-deep-canopy text-white rounded-lg px-4 py-3 shadow-lg max-w-[240px] pointer-events-none"
            >
              <p className="font-[family-name:var(--font-heading)] font-semibold text-horizon-gold text-[13px] uppercase tracking-wider mb-1">
                {hovered}
              </p>
              <ul className="flex flex-col gap-0.5">
                {ACTIVE[hovered].programs.map((p) => (
                  <li key={p} className="text-[13px] text-white/85">
                    · {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend / active county list */}
      <div className="w-full max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {activeCounties.map((c) => {
          const meta = ACTIVE[c.name];
          const inner = (
            <div
              className={`h-full rounded-lg border px-3 py-2 transition-colors ${
                hovered === c.name
                  ? "border-warm-teal bg-warm-teal/5"
                  : "border-gray-200 bg-white hover:border-warm-teal/40"
              }`}
            >
              <span className="block font-[family-name:var(--font-heading)] font-medium text-deep-canopy text-[13px]">
                {c.name}
              </span>
              <span className="block text-[11px] text-gray-500 mt-0.5">
                {meta.programs.length}{" "}
                {meta.programs.length === 1 ? "program" : "programs"}
              </span>
            </div>
          );

          if (meta.href) {
            return (
              <Link
                key={c.name}
                href={meta.href}
                onMouseEnter={() => setHovered(c.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.name)}
                onBlur={() => setHovered(null)}
                className="block text-left"
              >
                {inner}
              </Link>
            );
          }
          return (
            <div
              key={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              className="block text-left"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
