export default function FooterSection() {
  return (
    <footer className="relative min-h-screen md:min-h-0 bg-baby py-16 text-center text-rosewood">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,222,235,0.12),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(208,119,162,0.1),_transparent_28%)]" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="mx-auto h-16 w-16 rounded-full border border-white/10 bg-baby/80 backdrop-blur-xl">
            <span className="flex h-full w-full items-center justify-center font-script text-3xl text-baby-dark">P&S</span>
          </div>
          <p className="text-lg leading-8 text-rosewood/70">
            Sealed with sacred vows, blessed by two loving families — we begin our forever with graceful hearts.
          </p>
          <p className="text-sm uppercase tracking-[0.32em] text-rosewood/60">Prashant & Sakshi</p>
          <p className="text-sm uppercase tracking-[0.32em] text-rosewood/60">Tayade · Walse</p>
        </div>
      </div>
    </footer>
  )
}





