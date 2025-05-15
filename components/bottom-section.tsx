"use client"

export default function BottomSection({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="max-w-[800px] mx-auto">
        <p className="text-lg md:text-xl">
          <span className="text-[#E87DB3] font-semibold">Alumna.ai</span> is redefining the future of education —where
          AI meets opportunity, and learning never stops.
        </p>

        <button
          onClick={onContactClick}
          className="mt-8 px-8 py-3 bg-[#8C67E2] text-white rounded-md hover:bg-[#7d5ad3] transition-colors"
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}
