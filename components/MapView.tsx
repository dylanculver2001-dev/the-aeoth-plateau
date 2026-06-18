"use client";

import Image from "next/image";
import { useState } from "react";

import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";

import { locations } from "@/data/locations";

import {
  Castle,
  Trees,
  Waves,
  Flag,
  House,
  Component,
  X,
} from "lucide-react";

export default function MapView() {
  const [selectedLocation, setSelectedLocation] =
    useState<(typeof locations)[0] | null>(null);

  const [hoveredLocation, setHoveredLocation] =
    useState<string | null>(null);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem]">

      {/* BACKGROUND FX */}
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">

        {/* Noise */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.06] mix-blend-soft-light" />

        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)]" />

        {/* Ambient Lighting */}
        <div className="absolute -top-[20%] -left-[10%] w-[900px] h-[900px] bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute -bottom-[20%] -right-[10%] w-[1000px] h-[1000px] bg-purple-500/10 blur-3xl rounded-full" />

      </div>

      {/* LOCATION PANEL */}
      {selectedLocation && (
        <div className="absolute top-5 left-5 z-40 w-[360px] max-h-[calc(100%-40px)] overflow-y-auto rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.45)] animate-in slide-in-from-left duration-500">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-white/10 bg-black/40 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-90 active:scale-95"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-7">

            {/* TITLE */}
            <div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-3">
                Location Archive
              </p>

              <h2 className="text-4xl font-serif text-white leading-tight pr-10">
                {selectedLocation.name}
              </h2>

              <div className="w-16 h-[2px] bg-zinc-600 mt-5 rounded-full" />

            </div>

            {/* IMAGE */}
            {selectedLocation.image && (
              <div className="relative mt-7 w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl">

                <Image
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>
            )}

            {/* DESCRIPTION */}
            <div className="mt-7 space-y-7">

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  Description
                </h3>

                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {selectedLocation.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  Lore
                </h3>

                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {selectedLocation.lore}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  Ruler
                </h3>

                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {selectedLocation.ruler}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  Important People
                </h3>

                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {selectedLocation.ImportantPeople}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-3">
                  Danger Level
                </h3>

                <p className="text-zinc-200">
                  {selectedLocation.dangerLevel}
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* MAP AREA */}
      <div className="relative z-10 w-full h-full overflow-hidden rounded-[2rem]">

        <TransformWrapper
          initialScale={0.82}
          minScale={0.82}
          maxScale={5}
          centerOnInit
          centerZoomedOut={false}
          limitToBounds={true}
          smooth={true}
          wheel={{
            step: 0.008,
          }}
          panning={{
            velocityDisabled: false,
            lockAxisX: false,
            lockAxisY: false,
          }}
        >

          <TransformComponent
            wrapperClass="!w-full !h-full"
            contentClass="flex items-center justify-center"
          >

            {/* INTERNAL MAP CANVAS */}
            <div
              className="
                relative
                mx-auto
                my-auto
                w-full
                max-w-[1250px]
                aspect-[4/3]
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
              "
            >

              {/* FOG FX */}
              <div className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-screen">

                <div className="absolute top-[5%] left-[-15%] w-[900px] h-[350px] bg-white/10 blur-3xl rounded-full" />

                <div className="absolute bottom-[0%] right-[-10%] w-[800px] h-[300px] bg-cyan-200/10 blur-3xl rounded-full" />

              </div>

              {/* MAP IMAGE */}
              <Image
                src="/aeoth-plateau-v2.png"
                alt="Fantasy World Map"
                width={4096}
                height={3072}
                priority
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-[2rem]
                  select-none
                  pointer-events-none
                  drop-shadow-2xl
                "
              />

              {/* MARKERS */}
              {locations.map((location) => {
                const isSelected =
                  selectedLocation?.id === location.id;

                return (
                  <button
                    key={location.id}
                    onClick={() =>
                      setSelectedLocation(location)
                    }
                    onMouseEnter={() =>
                      setHoveredLocation(location.name)
                    }
                    onMouseLeave={() =>
                      setHoveredLocation(null)
                    }
                    className="absolute z-20 flex items-center justify-center transition-all duration-300 hover:scale-125"
                    style={{
                      left: location.left,
                      top: location.top,
                    }}
                  >

                    {/* GLOW */}
                    {(hoveredLocation ===
                      location.name ||
                      isSelected) && (
                      <div
                        className={`
                          absolute
                          w-20
                          h-20
                          rounded-full
                          blur-3xl
                          opacity-40
                          animate-pulse

                          ${
                            location.type === "city"
                              ? "bg-blue-500"
                              : location.type === "town"
                              ? "bg-red-400"
                              : location.type === "nature"
                              ? "bg-green-500"
                              : location.type === "sea"
                              ? "bg-purple-500"
                              : location.type === "info"
                              ? "bg-orange-500"
                              : "bg-yellow-500"
                          }
                        `}
                      />
                    )}

                    {/* ACTIVE PING */}
                    {isSelected && (
                      <div className="absolute w-14 h-14 rounded-full border border-white/40 animate-ping" />
                    )}

                    {/* MARKER */}
                    <div
                      className={`
                        relative
                        z-10
                        w-9
                        h-9
                        rounded-full
                        border-2
                        border-white/80
                        flex
                        items-center
                        justify-center
                        shadow-xl
                        backdrop-blur-sm
                        transition-all
                        duration-300

                        ${
                          location.type === "city"
                            ? "bg-blue-500/90"
                            : location.type === "town"
                            ? "bg-red-400/90"
                            : location.type === "nature"
                            ? "bg-green-600/90"
                            : location.type === "sea"
                            ? "bg-purple-600/90"
                            : location.type === "info"
                            ? "bg-orange-600/90"
                            : "bg-yellow-600/90"
                        }

                        ${
                          isSelected
                            ? "scale-125 border-white"
                            : ""
                        }
                      `}
                    >

                      {location.type === "city" ? (
                        <Castle size={16} />
                      ) : location.type === "town" ? (
                        <House size={16} />
                      ) : location.type === "nature" ? (
                        <Trees size={16} />
                      ) : location.type === "sea" ? (
                        <Waves size={16} />
                      ) : location.type === "info" ? (
                        <Component size={16} />
                      ) : (
                        <Flag size={16} />
                      )}

                    </div>

                    {/* LABEL */}
                    {hoveredLocation ===
                      location.name && (
                      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-xl shadow-2xl">

                        {location.name}

                      </div>
                    )}

                  </button>
                );
              })}

            </div>

          </TransformComponent>

        </TransformWrapper>

      </div>

    </div>
  );
}