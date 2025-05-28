"use client";

import Link from "next/link";

export default function Header({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <header className="container mx-auto px-4 py-4 md:py-10">
      <div className="flex justify-between items-center mb-16">
        <div>
          <img src="/logo.jpg" alt="" height={50} width={250} />
        </div>
        <Link
          href="https://linktr.ee/alumnaai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[#946DF0] text-[#946DF0] rounded-md hover:bg-[#946DF0]/10 transition-colors"
        >
          Follow Our Journey
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white animate-slide-up">
              TRANSFORMING
            </span>
            <span className="block text-[#946DF0] animate-slide-up animation-delay-100">
              HIGHER
            </span>
            <span className="block text-white animate-slide-up animation-delay-200">
              EDUCATION THROUGH
            </span>
            <span className="block text-[#E87DB3] animate-slide-up animation-delay-300">
              AI INNOVATION
            </span>
          </h2>

          <p className="mt-8 text-white/80 max-w-[60%] mx-auto text-sm md:text-base animate-fade-in animation-delay-400">
            Empowering students and institutions with AI-driven insights,
            transforming learning, career guidance, and management for a
            smarter, more connected future.
          </p>

          <button
            onClick={onContactClick}
            className="mt-8 px-8 py-3 bg-[#8C67E2] text-white rounded-md hover:bg-[#7d5ad3] transition-colors animate-fade-in animation-delay-500"
          >
            Join our waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
