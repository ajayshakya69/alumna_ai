export default function ComingSoon() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="relative inline-block">
        {/* Radiating circles */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8C67E2] to-[#E87DB3] opacity-30 animate-pulse-ring"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8C67E2] to-[#E87DB3] opacity-20 animate-pulse-ring animation-delay-150"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8C67E2] to-[#E87DB3] opacity-10 animate-pulse-ring animation-delay-300"></div>

        {/* Main text */}
        <div className="relative bg-[#060606] bg-opacity-80 backdrop-blur-sm px-12 py-8 rounded-xl border border-[#946DF0]/30">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#946DF0] to-[#E87DB3] inline-block text-transparent bg-clip-text">
            COMING SOON
          </h2>
          <p className="mt-4 text-white/70">Our platform is under development. Stay tuned for the launch.</p>
        </div>
      </div>
    </section>
  )
}
