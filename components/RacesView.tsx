"use client";

import Image from "next/image";
import { races } from "@/data/races";

export default function RacesView() {
  return (
    <div className="w-full h-full overflow-y-auto p-10 relative animate-in fade-in duration-500">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        <div className="absolute top-[10%] left-[5%] w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl animate-[floatUltraSlow_50s_ease-in-out_infinite]" />

        <div className="absolute bottom-[0%] right-[0%] w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl animate-[floatUltraSlowReverse_60s_ease-in-out_infinite]" />

      </div>

      {/* RACE DOSSIERS */}
      <div className="flex flex-col gap-10 relative z-10">

        {races.map((race) => (

          <div
            key={race.id}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-700/40 bg-zinc-900/55 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:-translate-y-1 hover:border-zinc-500/40"
          >

            {/* INNER LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">

              <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

            </div>

            <div className="flex flex-col lg:flex-row">

              {/* IMAGE PANEL */}
              <div className="relative lg:w-[340px] xl:w-[420px] shrink-0 overflow-hidden">

                <div className="relative w-full h-[420px] lg:h-full">

                  <Image
                    src={race.image}
                    alt={race.name}
                    fill
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/40" />

                </div>

              </div>

              {/* CONTENT */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center relative">

                {/* FAINT TOP LINE */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* TITLE */}
                <div>

                  <h2 className="text-5xl xl:text-6xl font-serif tracking-wide text-white">

                    {race.name}

                  </h2>

                  <p className="mt-3 text-zinc-400 italic text-xl">

                    {race.title}

                  </p>

                </div>

                {/* DIVIDER */}
                <div className="w-20 h-[2px] bg-zinc-600 mt-6 rounded-full" />

                {/* INFO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

                  {/* TRAITS */}
                  <div>

                    <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">

                      Traits

                    </h3>

                    <p className="text-zinc-300 leading-relaxed text-lg">

                      {race.traits}

                    </p>

                  </div>

                  {/* HOMELAND */}
                  <div>

                    <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">

                      Homeland

                    </h3>

                    <p className="text-zinc-300 leading-relaxed text-lg">

                      {race.homeland}

                    </p>

                  </div>

                </div>

                {/* DESCRIPTION */}
                <div className="mt-10">

                  <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4">

                    Description

                  </h3>

                  <p className="text-zinc-300 whitespace-pre-line leading-[2rem] text-lg max-w-4xl">

                    {race.description}

                  </p>

                </div>

                {/* DECORATIVE BOTTOM LINE */}
                <div className="mt-10 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}