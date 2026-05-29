import { motion } from 'framer-motion'
import { MapPin, Compass, Sparkles } from 'lucide-react'

import venueImage from '../assets/Venue.webp'

export default function LocationSection() {
  return (
    <section className="relative min-h-screen md:min-h-0 overflow-hidden bg-ivory py-28 text-rosewood sm:py-36">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,214,232,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(196,79,118,0.12),_transparent_30%)]" />

        {/* Baby Glow */}
        <div className="absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-baby-dark/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-8"
          >

            {/* Top Label */}
            <div className="inline-flex items-center gap-3 rounded-full border border-baby/20 bg-baby/10 px-5 py-3 text-xs uppercase tracking-[0.35em] text-rosewood/70 backdrop-blur-md">

              <MapPin className="h-4 w-4 text-baby-dark" />

              Our Wedding Destination
            </div>

            {/* Heading */}
            <div>

              <h2 className="text-5xl font-serif leading-tight text-rosewood sm:text-6xl">
                Suman Mangal Karyalay
              </h2>

              <div className="mt-5 h-px w-32 bg-gradient-to-r from-baby-dark to-transparent" />
            </div>

            {/* Location */}
            <div className="space-y-5">

              <p className="flex items-center gap-3 text-lg text-rosewood/70">

                <Sparkles className="h-5 w-5 text-baby-dark" />

                Purna, Dist. Parbhani
              </p>

              <p className="max-w-xl text-lg leading-9 text-rosewood/70">
                A royal wedding venue where sacred vows meet celebration under
                golden skies, surrounded by love, lights, and timeless
                traditions.
              </p>
            </div>

            {/* Button */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 rounded-full border border-baby/20 bg-champagne/80 px-8 py-4 text-sm uppercase tracking-[0.3em] text-rosewood shadow-luxe backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-baby/40 hover:bg-ivory"
            >

              <Compass className="h-5 w-5 text-baby transition duration-500 group-hover:rotate-45" />

              Navigate to Venue
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[42px] border border-white/10 bg-champagne/80 shadow-luxe"
          >

            {/* Image */}
            <img
              src={venueImage}
              alt="Suman Mangal Karyalay"
              className="h-[650px] w-full object-cover object-center transition duration-[2000ms] group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,214,232,0.95)] via-[rgba(255,214,232,0.25)] to-transparent" />

            {/* Bottom Card */}
            <div className="absolute bottom-0 left-0 right-0 p-8">

              <div className="rounded-[28px] border border-white/10 bg-white/20 p-6 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-[0.35em] text-baby">
                  Wedding Venue
                </p>

                <h3 className="mt-4 text-3xl font-serif text-rosewood">
                  Suman Mangal Karyalay
                </h3>

                <p className="mt-4 text-base leading-8 text-rosewood">
                  An elegant celebration space crafted for unforgettable
                  wedding memories and royal moments.
                </p>
              </div>
            </div>

            {/* Border Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[42px] border border-white/5" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}







