"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import MapView from "@/components/MapView";
import PantheonView from "@/components/PantheonView";
import RacesView from "@/components/RacesView";

export default function Home() {
  const [activeView, setActiveView] =
    useState<"map" | "pantheon" | "races">("map");

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 flex overflow-hidden text-white p-4 gap-4 relative">

      {/* GLOBAL BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-10%] left-[-10%] w-[1200px] h-[1200px] bg-violet-500/10 rounded-full blur-3xl animate-[floatUltraSlow_60s_ease-in-out_infinite]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[1400px] h-[1400px] bg-cyan-500/10 rounded-full blur-3xl animate-[floatUltraSlowReverse_70s_ease-in-out_infinite]" />

      </div>

      {/* SIDEBAR */}
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          flex-1
          flex items-center justify-center
          transition-all duration-700
        "
      >

        {activeView === "map" ? (

          <div className="h-full flex-1 flex items-center justify-center bg-transparent">

            <div className="w-full h-full max-w-[1600px] aspect-[16/10]">

              <MapView />

            </div>

          </div>

        ) : activeView === "pantheon" ? (

          <PantheonView />

        ) : (

          <RacesView />

        )}

      </div>

    </main>
  );
}