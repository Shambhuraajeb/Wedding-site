import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'

import './GallerySection.css'

const gallery = [
  { src: pic1, title: 'A Beautiful Beginning' },
  { src: pic2, title: 'Together Forever' },
  { src: pic3, title: 'Meant To Be' },
]

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-24 text-rosewood sm:py-32 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-sm uppercase tracking-[0.32em] text-rosewood/70">
            Our Beautiful Moments
          </p>

          <h2 className="mt-4 text-4xl font-serif text-rosewood sm:text-5xl">
            Prashant & Sakshi
          </h2>

          <p className="mt-6 text-base leading-8 text-rosewood/70 sm:text-lg">
            A cinematic collection of warm memories, royal details, and the tender
            beginning of their forever.
          </p>
        </div>

        {/* Photo Stack Container */}
        <div className="flex justify-center items-center">
          <div className="photo-stack-container">

            {gallery.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveImage(item)}
                className={`photo-card card-${index + 1}`}
              >
                <div className="photo-card-content">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="photo-card-image"
                  />

                  <div className="photo-card-label">
                    <p className="text-xs uppercase tracking-wider text-rosewood/60">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* Heart */}
            <motion.div
              className="stack-heart"
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0, 0, 1, 1.15, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.div>

          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-white/80 px-6 py-10 backdrop-blur-md"
          >

            <motion.button
              onClick={() => setActiveImage(null)}
              className="absolute right-6 top-6 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-rosewood transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-champagne shadow-2xl"
            >

              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-baby">
                  Gallery
                </p>

                <h3 className="mt-3 text-3xl font-serif text-rosewood">
                  {activeImage.title}
                </h3>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}