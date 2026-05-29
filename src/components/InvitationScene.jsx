import { useRef } from 'react'
import { gsap } from 'gsap'
import videoUrl from '../assets/entry.mp4'

export default function InvitationScene({ onOpen }) {
  const overlayRef = useRef(null)
  const videoRef = useRef(null)
  const startedRef = useRef(false)

  const startOpenSequence = () => {
    const timeline = gsap.timeline({
      defaults: {
        ease: 'power3.out',
      },
    })

    timeline.to(overlayRef.current, {
      opacity: 0,
      duration: 1.2,
    })

    timeline.call(() => {
      if (onOpen) onOpen()
    })
  }

  const startVideo = async () => {
    if (startedRef.current) return

    startedRef.current = true

    const video = videoRef.current

    if (!video) return

    try {
      video.pause()
      video.currentTime = 0

      // Since user clicked/touched, sound is allowed
      video.muted = false
      video.volume = 1

      await video.play()
    } catch (err) {
      console.error('Video play failed:', err)

      // Fallback: try muted autoplay
      try {
        video.muted = true
        await video.play()
      } catch (e) {
        console.error('Muted fallback failed:', e)
        startOpenSequence()
      }
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={startVideo}
      onTouchStart={startVideo}
      className="fixed inset-0 z-[9999] bg-black cursor-pointer"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        onEnded={startOpenSequence}
        onError={(e) => {
          console.error('Video error:', e)
          startOpenSequence()
        }}
      />
    </div>
  )
}