"use client";

import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" style={{ zIndex: 0 }} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4" style={{ zIndex: 1 }}>
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <Image
              src="/logo.webp"
              alt="SpinFi Logo"
              width={120}
              height={120}
              className="mb-6"
            />
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight uppercase font-orbitron"
              style={{
                color: 'white',
                letterSpacing: '0.08em'
              }}
            >
              SPINFI
            </h1>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 font-orbitron"
            >
              Spin NFTs, Earn Rewards
            </h2>
            <p
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
            >
              Revolutionary NFT gacha platform where users spin to win exclusive NFTs
              while depositors earn yield per spin.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-16 py-8 text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                as={Link}
                href="/app"
              >
                START SPINNING
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SpinFi. All rights reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}
