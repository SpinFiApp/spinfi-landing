"use client";

import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black/20" style={{ zIndex: 0 }} />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-24" style={{ zIndex: 2 }}>
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-12"
          >
            <Image
              src="/logo.webp"
              alt="SpinFi Logo"
              width={160}
              height={160}
              className="mb-8 drop-shadow-2xl"
            />
            <h1
              className="text-6xl md:text-8xl font-bold tracking-tighter uppercase font-orbitron"
              style={{
                color: 'white',
                letterSpacing: '0.05em',
                textShadow: '0 4px 20px rgba(251, 146, 60, 0.3)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              SPINFI
            </h1>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-8 font-orbitron"
              style={{
                color: 'white',
                textShadow: '0 2px 10px rgba(251, 146, 60, 0.2)',
                letterSpacing: '0.03em'
              }}
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-20 py-10 text-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                as={Link}
                href="#"
              >
                COMING SOON
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SpinFi. All rights reserved.
          </p>
        </footer>
      </section>

      </div>
  );
}
