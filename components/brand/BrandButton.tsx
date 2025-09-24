"use client";

import {Button as BaseButton} from "@heroui/button";
import {extendVariants} from "@heroui/system";

// BrandButton adds a warm orange glow and a glassy variant tailored for the orange background
export const BrandButton = extendVariants(BaseButton, {
  variants: {
    variant: {
      glow: [
        "relative",
        "text-black",
        "bg-gradient-to-r from-primary to-secondary",
        "ring-2 ring-primary/40",
        "shadow-[0_0_24px_rgba(45,212,191,0.55)]",
        "before:absolute before:inset-0 before:-z-10 before:rounded-inherit",
        "before:bg-[radial-gradient(120%_80%_at_50%_0%,rgba(45,212,191,0.35),transparent_70%)]",
        "hover:brightness-110",
      ].join(" "),
      glass: [
        "relative",
        "text-white",
        "bg-black/30",
        "backdrop-blur-lg backdrop-saturate-150",
        "border border-white/25",
        "shadow-none",
        "hover:bg-black/35 hover:border-white/40",
        // top highlight
        "before:absolute before:inset-0 before:rounded-inherit before:pointer-events-none",
        "before:bg-gradient-to-b before:from-white/15 before:to-transparent",
      ].join(" "),
    },
    color: {
      flame:
        "bg-gradient-to-r from-teal-400 to-blue-400 text-black hover:from-teal-300 hover:to-blue-300",
    },
  },
  defaultVariants: {
    color: "flame",
  },
  compoundVariants: [
    {
      variant: "glow",
      class: "ring-1 ring-primary/20",
    },
  ],
});

export type BrandButtonProps = React.ComponentProps<typeof BrandButton>;
