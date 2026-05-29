import { motion } from 'framer-motion'

import haldiVideo from '../assets/haladi.mp4'
import weddingVideo from '../assets/wedding.mp4'
import receptionVideo from '../assets/reception.mp4'

const events = [
  {
    video: haldiVideo
  },

  {
    video: weddingVideo
  },

  {
    video: receptionVideo
  },
]

export default function EventDetailsSection() {
  return (
    <section className="relative min-h-screen md:min-h-0 overflow-hidden bg-baby py-24 text-rosewood sm:py-32">

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-baby/10 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-baby/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-baby">
            The Celebrations Unfold
          </p>

          <h2 className="mt-5 text-5xl font-serif leading-tight text-rosewood sm:text-6xl">
            Wedding Events
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-baby-dark to-transparent" />

          <p className="mt-8 text-lg leading-9 text-rosewood">
            Three royal chapters in a luxurious journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 1,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-champagne/90 shadow-luxe"
            >

              {/* Video */}
              <div className="absolute inset-0 overflow-hidden">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover transition duration-[2500ms] group-hover:scale-110"
                >
                  <source src={event.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-baby-dark via-baby-dark/70 to-baby-dark/20" />

              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[470px] flex-col justify-end p-8">
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





