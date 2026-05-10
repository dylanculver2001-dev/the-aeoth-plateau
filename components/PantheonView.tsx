"use client";

import Image from "next/image";
import { useState } from "react";

import { pantheon } from "@/data/pantheon";

export default function PantheonView() {
  const [expandedGod, setExpandedGod] =
    useState<number | null>(null);

  return (
    <div className="w-full h-full overflow-y-auto p-10 relative animate-in fade-in duration-500">

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-[10%] left-[20%] w-[700px] h-[700px] bg-violet-500/8 rounded-full blur-3xl animate-[floatUltraSlow_45s_ease-in-out_infinite]" />

        <div className="absolute bottom-[0%] right-[10%] w-[800px] h-[800px] bg-blue-500/8 rounded-full blur-3xl animate-[floatUltraSlowReverse_55s_ease-in-out_infinite]" />

      </div>

      {/* GOD CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">

        {pantheon.map((god) => (

          <div
            key={god.id}
            className="group bg-zinc-900/55 backdrop-blur-md border border-zinc-700/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-zinc-500/40 hover:shadow-black/60"
          >

            {/* IMAGE */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">

              <Image
                src={god.image}
                alt={god.name}
                fill
                className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="p-6 text-white relative">

              {/* FAINT TOP LINE */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* TITLE */}
              <h2 className="text-4xl font-serif tracking-wide">

                {god.name}

              </h2>

              <p className="text-zinc-400 mt-2 italic text-lg">

                {god.title}

              </p>

              {/* DIVIDER */}
              <div className="w-12 h-[2px] bg-zinc-600 mt-4 rounded-full" />

              {/* DOMAINS */}
              <div className="mt-6">

                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">

                  Domains

                </h3>

                <p className="text-zinc-300 leading-relaxed">

                  {god.domains}

                </p>

              </div>

              {/* DESCRIPTION */}
              <div className="mt-6">

                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">

                  Description

                </h3>

                <div className="space-y-4">

                  <p
                    className={`text-zinc-300 whitespace-pre-line leading-relaxed transition-all duration-500 overflow-hidden
                      ${
                        expandedGod === god.id
                          ? "max-h-[1200px]"
                          : "max-h-24 mask-fade-bottom"
                      }
                    `}
                  >
                    {god.description}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedGod(
                        expandedGod === god.id
                          ? null
                          : god.id
                      )
                    }
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                  >
                    {expandedGod === god.id
                      ? "Show Less"
                      : "Read More"}
                  </button>

                </div>

              </div>

              {/* BOTTOM LINE */}
              <div className="mt-8 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}