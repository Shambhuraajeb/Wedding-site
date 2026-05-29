import { useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Music2, CalendarPlus  } from 'lucide-react'

import InvitationScene from './components/InvitationScene'
import PetalField from './components/PetalField'
import HeroSection from './components/HeroSection'
import CountdownSection from './components/CountdownSection'
import LoveStorySection from './components/LoveStorySection'
import GallerySection from './components/GallerySection'
import EventDetailsSection from './components/EventDetailsSection'
import LocationSection from './components/LocationSection'
import FooterSection from './components/FooterSection'

import useLenis from './hooks/useLenis'
import useSmoothReveal from './hooks/useSmoothReveal'

import musicSrc from './assets/JaaneTu.mp3'

function fadeAudio(audio, targetVolume, step = 0.04, intervalMs = 80) {
  if (!audio) return

  window.clearInterval(audio._fadeInterval)

  audio._fadeInterval = window.setInterval(() => {

    const nextVolume = Math.max(
      0,
      Math.min(
        1,
        audio.volume + (
          targetVolume > audio.volume
            ? step
            : -step
        )
      )
    )

    audio.volume = nextVolume

    if (Math.abs(nextVolume - targetVolume) < 0.01) {

      audio.volume = targetVolume

      window.clearInterval(audio._fadeInterval)

      if (targetVolume === 0) {
        audio.pause()
      }
    }
  }, intervalMs)
}

export default function App() {

  const [invitationOpened, setInvitationOpened] = useState(false)

  const [musicOn, setMusicOn] = useState(false)

  const audioRef = useRef(null)

  useLenis()

  useSmoothReveal()

  const handleOpenInvitation = () => {

    setInvitationOpened(true)

    setMusicOn(true)

    if (audioRef.current) {

      audioRef.current.currentTime = 0

      audioRef.current.volume = 0

      audioRef.current.muted = false

      audioRef.current.play()

      fadeAudio(audioRef.current, 0.55)
    }
  }

  const toggleMusic = () => {

    if (!audioRef.current) return

    if (musicOn) {

      fadeAudio(audioRef.current, 0)

      setMusicOn(false)
    }

    else {

      audioRef.current.play().catch(() => null)

      fadeAudio(audioRef.current, 0.55)

      setMusicOn(true)
    }
  }


  const googleCalendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=Prashant%20%26%20Sakshi%20Wedding' +
  '&dates=20260708T121000Z/20260708T181000Z' +
  '&details=Join%20us%20for%20our%20wedding%20celebration' +
  '&location=Pune%2C%20Maharashtra'

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent text-rosewood">

      <PetalField active={invitationOpened} />

      <AnimatePresence>
        {!invitationOpened && (
          <InvitationScene onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {invitationOpened && (
        <>

          {/* Luxury Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,230,245,0.08),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(231,136,193,0.10),_transparent_26%)]" />

          {/* Main */}
          <main className="relative z-10">

            <div className="reveal-scale">
              <HeroSection />
            </div>

            <div className="reveal-up">
              <CountdownSection />
            </div>

            <div className="reveal-up">
              <LoveStorySection />
            </div>

            <div className="reveal-up">
              <GallerySection />
            </div>

            <div className="reveal-up">
              <EventDetailsSection />
            </div>

            <div className="reveal-up">
              <LocationSection />
            </div>

            <div className="reveal-up">
              <FooterSection />
            </div>

          </main>

          {/* Save Date Button */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 left-5 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-white/20 px-5 py-3 text-[#5d2d53] shadow-[0_10px_40px_rgba(92,15,74,0.18)] backdrop-blur-xl transition duration-500 hover:scale-105 hover:bg-white/40"
          >

            <CalendarPlus
              className="h-5 w-5 text-[#F57799]"
            />

            <span className="hidden sm:block text-sm font-medium">
              Save Date
            </span>

          </a>

          {/* Music Button */}
          <button
            type="button"
            onClick={toggleMusic}
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/20 text-[#5d2d53] shadow-[0_10px_40px_rgba(92,15,74,0.18)] backdrop-blur-xl transition duration-500 hover:scale-110 hover:bg-white/40 sm:h-16 sm:w-16"
            aria-label="Toggle music"
          >

            <Music2
              className={`h-6 w-6 ${
                musicOn
                  ? 'text-[#F57799]'
                  : 'text-[#5d2d53]/60'
              }`}
            />
          </button>
        </>
      )}

      {/* Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src={musicSrc}
      />
    </div>
  )
}