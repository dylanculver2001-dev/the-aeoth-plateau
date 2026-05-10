"use client";

import { Map, Sparkles, Users } from "lucide-react";

interface SidebarProps {
  activeView: "map" | "pantheon" | "races";
  setActiveView: (
    view: "map" | "pantheon" | "races"
  ) => void;
}

export default function Sidebar({
  activeView,
  setActiveView,
}: SidebarProps) {
  const navItems = [
    {
      id: "map",
      icon: Map,
      gradient:
        "from-cyan-400/20 via-blue-500/20 to-indigo-500/20",
      hoverGlow: "hover:shadow-cyan-500/20",
    },
    {
      id: "pantheon",
      icon: Sparkles,
      gradient:
        "from-fuchsia-400/20 via-violet-500/20 to-purple-500/20",
      hoverGlow: "hover:shadow-fuchsia-500/20",
    },
    {
      id: "races",
      icon: Users,
      gradient:
        "from-emerald-400/20 via-green-500/20 to-lime-500/20",
      hoverGlow: "hover:shadow-emerald-500/20",
    },
  ];

  return (
    <aside
      className="
        relative
        h-full
        w-[230px]
        rounded-[2rem]
        border
        border-white/10
        bg-gradient-to-b
        from-white/[0.05]
        to-white/[0.02]
        backdrop-blur-2xl
        overflow-hidden
        flex
        flex-col
        items-center
        px-6
        py-7
        shadow-[0_0_60px_rgba(0,0,0,0.35)]
      "
    >

      {/* AMBIENT BACKGROUNDS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-20 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-0 -right-24 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-soft-light" />

      </div>

      {/* TITLE */}
      <div className="relative z-10 w-full mb-12">

        <p className="text-[11px] tracking-[0.35em] uppercase text-zinc-500 text-center leading-relaxed">
          The Aeoth
          <br />
          Plateau
        </p>

      </div>

      {/* NAVIGATION */}
      <div className="relative z-10 flex flex-col gap-6 items-center w-full">

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() =>
                setActiveView(
                  item.id as
                    | "map"
                    | "pantheon"
                    | "races"
                )
              }
              className={`
                group
                relative
                w-24
                h-24
                rounded-[2rem]
                border
                overflow-hidden
                transition-all
                duration-500
                flex
                items-center
                justify-center
                active:scale-90

                ${
                  isActive
                    ? "border-white/30 bg-white/[0.08] shadow-2xl scale-105"
                    : "border-white/10 bg-white/[0.03]"
                }

                ${item.hoverGlow}
              `}
            >

              {/* GRADIENT HOVER FX */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  ${item.gradient}
                `}
              />

              {/* ACTIVE GLOW */}
              {isActive && (
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${item.gradient}
                    opacity-70
                    blur-xl
                  `}
                />
              )}

              {/* ICON */}
              <div
                className="
                  relative
                  z-10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-active:scale-90
                "
              >
                <Icon
                  className={`
                    w-8
                    h-8
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-300 group-hover:text-white"
                    }
                  `}
                />
              </div>

            </button>
          );
        })}

      </div>

    </aside>
  );
}