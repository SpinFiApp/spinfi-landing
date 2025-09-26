"use client";

import { Image } from "@heroui/image";
import { BrandButton as Button } from "@/components/brand";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-24" style={{ zIndex: 2 }}>
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          {/* Logo and Brand */}
          <motion.div
            animate={{ rotate: 360 }}
            className="mb-8 drop-shadow-2xl"
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <Image
              src="/logo.webp"
              alt="SpinFi Logo"
              width={160}
              height={160}
              removeWrapper
            />
          </motion.div>
          <h1
            className="neon-text text-6xl md:text-8xl font-bold tracking-wide uppercase font-orbitron whitespace-nowrap"
          >
            SPINFI
          </h1>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h2
              className="neon-text text-2xl md:text-3xl font-semibold mb-6 font-orbitron tracking-wide"
            >
              Spin NFTs, Earn Rewards
            </h2>
            <p
              className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
              style={{ color: 'rgba(229, 231, 235, 0.9)' }}
            >
              Revolutionary NFT gacha platform where users spin to win exclusive NFTs
              while depositors earn yield per spin.
            </p>

            <Button
              as={Link}
              href="https://x.com/SpinFiApp"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="glass"
              startContent={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              }
            >
              Follow @SpinFiApp
            </Button>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
