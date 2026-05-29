import { motion } from 'framer-motion'

const storyCards = [
  {
    title: 'A Beautiful Beginning',
    text: 'Two souls, one heart. The start of our forever.',
    accent: 'Forever Us',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Together Forever',
    text: 'Every moment together feels magical and timeless.',
    accent: 'Meant To Be',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Our Beautiful Moments',
    text: 'A journey filled with laughter, love, and cherished memories.',
    accent: 'Soulmates',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function LoveStorySection() {
  return (
    <section className="relative min-h-screen md:min-h-0 overflow-hidden bg-baby py-28 text-rosewood sm:py-36">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,245,233,0.08),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(229,128,184,0.12),_transparent_28%)]" />

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-baby-dark/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.45em] text-baby">
            Our Love Story
          </p>

          <h2 className="mt-5 text-5xl font-serif leading-tight text-rosewood sm:text-6xl">
            Forever Begins Here
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-baby-dark to-transparent" />

          <p className="mt-8 text-lg leading-9 text-rosewood/70">
            A timeless journey woven with love, destiny, laughter, and unforgettable memories that lead us to forever.
          </p>
        </div>

        {/* Cards */}
          <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {storyCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-champagne/80 shadow-luxe backdrop-blur-xl"
            >

              {/* Image */}
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-[1800ms] group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Glow */}
                <div className="absolute inset-0 bg-transparent transition duration-700 group-hover:bg-black/40" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-8">

                <div className="inline-flex items-center rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white backdrop-blur-md">
                  {card.accent}
                </div>

                <h3 className="mt-5 text-3xl font-serif text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-white/85">
                  {card.text}
                </p>
              </div>

              {/* Border */}
              <div className="pointer-events-none absolute inset-0 rounded-[38px] border border-white/5" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}






