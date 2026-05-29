import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import heroImage from '../assets/hero.png'
import ganeshImage from '../assets/ganesh.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-baby text-rosewood">

      {/* Background */}
      <div className="absolute inset-0">

        {/* Main Background Image */}
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover scale-105 opacity-25"
        />

        {/* Luxury Overlay (baby pink theme) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,214,232,0.10),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(196,79,118,0.08),_transparent_30%)]" />

        {/* Subtle darkening to lift content (derived from baby-pink) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,79,118,0.06)] via-[rgba(196,79,118,0.04)] to-transparent" />

        {/* Golden Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-baby-dark/10 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-16 sm:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-champagne/75 p-7 shadow-luxe backdrop-blur-2xl sm:p-10 md:p-14"
        >

          {/* Baby Glow */}
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-baby-dark/10 blur-[80px]" />

          {/* Ganesh */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="relative z-10"
          >

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-baby/30 bg-white/10 p-2 shadow-[0_0_45px_rgba(212,163,115,0.25)] backdrop-blur-md sm:h-32 sm:w-32">

              <img
                src={ganeshImage}
                alt="Shree Ganesh"
                className="h-full w-full rounded-full object-cover mix-blend-lighten"
              />
            </div>

            <p className="mt-5 text-center text-xs uppercase tracking-[0.45em] text-baby sm:text-sm">
              ॥ श्री गणेशाय नमः ॥
            </p>
          </motion.div>

          {/* Family Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="mt-8 text-center text-sm sm:text-base uppercase tracking-[0.4em] text-blush"
          >
            Together with their families
          </motion.p>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 1.2,
            }}
            className="mt-7 text-center"
          >
            <h1
              className="text-6xl leading-tight text-rosewood sm:text-7xl md:text-8xl"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              Prashant
            </h1>

            <div className="my-6 flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-baby-dark" />
              <span className="text-4xl text-baby-dark">✤</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-baby-dark" />
            </div>

            <h1
              className="text-6xl leading-tight text-rosewood sm:text-7xl md:text-8xl"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              Sakshi
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mt-5 text-center text-xl tracking-[0.2em] text-rosewood sm:text-2xl"
          >
            WE ARE GETTING MARRIED
          </motion.p>

          {/* Divider */}
          <div className="mx-auto mt-8 h-px w-36 bg-gradient-to-r from-transparent via-baby-dark to-transparent" />

          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="mx-auto mt-10 max-w-2xl rounded-[34px] border border-white/10 bg-blush/70 p-7 shadow-luxe backdrop-blur-xl sm:p-10"
          >

            <p className="text-center text-sm uppercase tracking-[0.4em] text-rosewood sm:text-base">
              Wedding Date
            </p>

            <h2
              className="mt-5 text-center text-5xl text-rosewood sm:text-6xl"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              8 July 2026
            </h2>

            <p className="mt-4 text-center text-sm uppercase tracking-[0.35em] text-baby sm:text-base">
              Wednesday • 12:10 PM
            </p>

            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-baby-dark to-transparent" />

            <p className="mt-6 text-center text-lg leading-8 text-rosewood sm:text-xl">
              Suman Mangal Karyalay, Purna
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-rosewood"
      >

        <span>Scroll to Reveal</span>

        <ArrowDown className="h-5 w-5 animate-bounce text-baby-dark" />
      </motion.div>
    </section>
  )
}






