import { Image } from "@heroui/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url(/background.webp)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" style={{ zIndex: 0 }} />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4" style={{ zIndex: 1 }}>
        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-16">
          <Image
            src="/logo.webp"
            alt="SpinFi Logo"
            width={140}
            height={140}
            className="mb-6"
          />
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight uppercase font-orbitron"
            style={{
              color: 'white',
              letterSpacing: '0.08em'
            }}
          >
            SPINFI
          </h1>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SpinFi. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
