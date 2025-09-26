"use client";
import { Button as BaseButton } from "@heroui/button";
import { extendVariants } from "@heroui/system";

export const BrandButton = extendVariants(BaseButton, {
  variants: {
    variant: {
      glow: "relative rounded-lg bg-gradient-to-r from-[#fb923c] to-[#f97316] ring-2 ring-[#fb923c]/40 shadow-[0_0_28px_rgba(251,146,60,0.5)] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:rounded-inherit before:bg-[radial-gradient(120%_80%_at_50%_0%,rgba(251,146,60,0.3),transparent_70%)] hover:shadow-[0_0_40px_rgba(251,146,60,0.7)] hover:ring-[#fb923c]/60 hover:brightness-110 transition-all duration-300 ease-out",
      glass: "relative rounded-lg bg-black/30 backdrop-blur-xl backdrop-saturate-150 border border-white/20 shadow-[0_0_20px_rgba(251,146,60,0.25)] hover:bg-black/35 hover:border-white/35 hover:shadow-[0_0_32px_rgba(251,146,60,0.4)] before:absolute before:inset-0 before:rounded-lg before:rounded-inherit before:pointer-events-none before:bg-gradient-to-b before:from-white/10 before:to-transparent transition-all duration-300 ease-out",
    },
    color: {
      orange: "",
    },
    size: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    },
    radius: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "shadow",
    color: "primary",
    size: "md",
    radius: "md",
  },
});

export type BrandButtonProps = React.ComponentProps<typeof BrandButton>;

