import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function pad(value) {
  return String(value).padStart(2, '0')
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  useEffect(() => {
    const targetDate = new Date('2026-07-08T12:10:00').getTime()

    const timer = window.setInterval(() => {
      const now = Date.now()
      const distance = Math.max(0, targetDate - now)

      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: pad(Math.floor((distance / (1000 * 60)) % 60)),
        seconds: pad(Math.floor((distance / 1000) % 60)),
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="relative min-h-screen md:min-h-0 bg-ivory py-24 text-rosewood sm:py-28 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,206,236,0.12),_transparent_20%),radial-gradient(circle_at_bottom,_rgba(207,100,168,0.14),_transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-rosewood/60">
            Countdown
          </p>

          <h2 className="mt-4 text-4xl font-serif text-rosewood sm:text-5xl">
            The Day We Say Forever
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-rosewood/70 sm:text-lg">
            A cinematic timer that holds every heartbeat until the ceremony begins.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-16 flex flex-wrap justify-center gap-5"
        >
          {countdownItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
              className="w-[140px] h-[140px] rounded-[30px] border border-white/30 bg-white/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center"
            >
              <span className="text-5xl sm:text-6xl font-serif text-rosewood tracking-[-0.05em]">
                {item.value}
              </span>

              <span className="mt-3 text-[11px] uppercase tracking-[0.35em] text-rosewood/60">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
