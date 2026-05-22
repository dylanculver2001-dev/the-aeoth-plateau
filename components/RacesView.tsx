"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { races } from "@/data/races";

export default function RacesView() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const selectedRace = races[activeIndex];

  const nextRace = () => {
    setActiveIndex((prev) =>
      prev === races.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousRace = () => {
    setActiveIndex((prev) =>
      prev === 0
        ? races.length - 1
        : prev - 1
    );
  };

  return (
    <motion.div
      animate={{
        background:
          selectedRace.background,
      }}
      transition={{
        duration: 1.2,
      }}
      className="
        relative
        w-full
        h-full
        overflow-hidden
        rounded-[2rem]
      "
    >

      {/* BACKGROUND ATMOSPHERE */}
      <AnimatePresence mode="wait">

        <motion.div
          key={selectedRace.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >

          {/* PRIMARY GLOW */}
          <div
            className={`
              absolute
              inset-0
              opacity-20
              blur-2xl

              ${selectedRace.backgroundGlow}
            `}
          />

          {/* FLOATING BOKEH GLOWS */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className={`
                absolute
                rounded-full
                blur-2xl

                ${
                  i % 2 === 0
                    ? selectedRace.orb
                    : selectedRace.orbSecondary
                }
              `}
              style={{
                width: `${180 + i * 45}px`,
                height: `${180 + i * 45}px`,
                top: `${5 + (i * 12) % 75}%`,
                left: `${5 + (i * 13) % 85}%`,
              }}
            />
          ))}

          {/* VIGNETTE */}
          <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.65)]" />

          {/* NOISE */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]" />

        </motion.div>

      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-[1600px]
          h-full
          mx-auto
          flex
          items-center
          justify-center
          px-10
          xl:px-16
        "
      >

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedRace.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              flex
              flex-col
              xl:flex-row
              items-center
              justify-between
              gap-12
              xl:gap-16
            "
          >

            {/* LEFT SIDE */}
            <div className="flex-1 flex items-center justify-center">

              <div className="relative flex items-center justify-center">

                {/* GLOW */}
                <div
                  className={`
                    absolute
                    w-[500px]
                    h-[500px]
                    rounded-[3rem]
                    blur-3xl
                    opacity-30

                    ${selectedRace.glow}
                  `}
                />

                {/* OUTER ARCANE FRAME */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`
                    absolute
                    w-[500px]
                    h-[500px]
                    rounded-[3rem]
                    border
                    opacity-10
                    pointer-events-none

                    ${selectedRace.divider.replace("bg", "border")}
                  `}
                />

                {/* INNER ARCANE FRAME */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`
                    absolute
                    w-[460px]
                    h-[460px]
                    rounded-[2.5rem]
                    border
                    opacity-20
                    pointer-events-none

                    ${selectedRace.divider.replace("bg", "border")}
                  `}
                />

                {/* IMAGE */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    relative
                    w-[28vw]
                    max-w-[440px]
                    min-w-[300px]
                    aspect-square
                    rounded-[2rem]
                    overflow-hidden
                    z-20
                  "
                >

                  {/* HIGHLIGHT */}
                  <div
                    className="
                      absolute
                      inset-0
                      z-30
                      rounded-[2rem]
                      pointer-events-none
                      bg-gradient-to-br
                      from-white/10
                      via-transparent
                      to-black/20
                    "
                  />

                  {/* EDGE SHADOW */}
                  <div
                    className="
                      absolute
                      inset-0
                      z-20
                      rounded-[2rem]
                      shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]
                      pointer-events-none
                    "
                  />

                  <Image
                    src={selectedRace.image}
                    alt={selectedRace.name}
                    fill
                    unoptimized
                    draggable={false}
                    className="
                      object-cover
                      rounded-[2rem]
                      select-none
                    "
                  />

                </motion.div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                w-[460px]
                min-w-[460px]
                flex
                flex-col
                gap-5
                relative
                -translate-y-6
              "
            >

              {/* TITLE BOX */}
              <div
                className={`
                  relative
                  rounded-[2rem]
                  border
                  px-8
                  pt-7
                  pb-6
                  backdrop-blur-2xl
                  backdrop-saturate-150
                  shadow-2xl

                  ${selectedRace.panel}
                `}
              >

                {/* TITLE BOX GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-10
                    blur-2xl
                    rounded-[2rem]

                    ${selectedRace.backgroundGlow}
                  `}
                />

                <div className="relative z-10">

                  {/* RACE NAME */}
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                    className={`
                      text-5xl
                      font-serif
                      mb-5

                      ${selectedRace.titleColor}
                    `}
                  >
                    {selectedRace.name}
                  </motion.h1>

                  {/* SUBTITLE */}
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className={`
                      text-[11px]
                      uppercase
                      tracking-[0.4em]

                      ${selectedRace.accent}
                    `}
                  >
                    {selectedRace.subtitle}
                  </motion.p>

                </div>

              </div>

              {/* INFO BOX */}
              <div
                className={`
                  relative
                  max-h-[58vh]
                  overflow-y-auto
                  overflow-x-hidden
                  rounded-[2rem]
                  border
                  backdrop-blur-2xl
                  backdrop-saturate-150
                  shadow-2xl

                  ${selectedRace.panel}
                `}
              >

                {/* INFO BOX GLOW */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-10
                    blur-2xl
                    rounded-[2rem]

                    ${selectedRace.backgroundGlow}
                  `}
                />

                <div className="relative z-10 p-8">

                  {/* ABOUT */}
                  <section className="mb-8">

                    <h3 className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-4">
                      About
                    </h3>

                    <p className="text-[13px] leading-relaxed text-zinc-300">
                      {selectedRace.about}
                    </p>

                  </section>

                  {/* HISTORY */}
                  <section className="mb-8">

                    <h3 className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-4">
                      History
                    </h3>

                    <p className="text-[13px] leading-relaxed text-zinc-300">
                      {selectedRace.history}
                    </p>

                  </section>

                  {/* LOCATIONS */}
                  <section className="mb-8">

                    <h3 className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-4">
                      Locations
                    </h3>

                    <p className="text-[13px] leading-relaxed text-zinc-300">
                      {selectedRace.locations}
                    </p>

                  </section>

                  {/* DIALECT */}
                  <section>

                    <h3 className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-4">
                      Dialect
                    </h3>

                    <p className="text-[13px] leading-relaxed text-zinc-300">
                      {selectedRace.dialect}
                    </p>

                  </section>

                </div>

              </div>

            </div>

          </motion.div>

          {/* GLOBAL NAVIGATION */}
          <div
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              z-40
              flex
              items-center
              justify-center
              gap-6
            "
          >

            {/* LEFT */}
            <button
              onClick={previousRace}
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white/70
                text-lg
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/10
                hover:text-white
              "
            >
              ←
            </button>

            {/* RACE SIGILS */}
            <div className="flex items-center gap-2">

              {races.map((race, index) => {
                const active =
                  activeIndex === index;

                return (
                  <button
                    key={race.id}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    className={`
                      relative
                      w-3
                      h-3
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        active
                          ? `
                            scale-150
                            ${race.glow}
                          `
                          : "bg-white/20 hover:bg-white/40"
                      }
                    `}
                  />
                );
              })}

            </div>

            {/* RIGHT */}
            <button
              onClick={nextRace}
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                text-white/70
                text-lg
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/10
                hover:text-white
              "
            >
              →
            </button>

          </div>

        </AnimatePresence>

      </div>

    </motion.div>
  );
}