import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useSmoothReveal() {
  useEffect(() => {

    const elements = gsap.utils.toArray(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
    )

    elements.forEach((el) => {

      let animation = {}

      if (el.classList.contains('reveal-left')) {
        animation = {
          x: -80,
          opacity: 0,
        }
      }

      else if (el.classList.contains('reveal-right')) {
        animation = {
          x: 80,
          opacity: 0,
        }
      }

      else if (el.classList.contains('reveal-scale')) {
        animation = {
          scale: 0.88,
          opacity: 0,
        }
      }

      else {
        animation = {
          y: 80,
          opacity: 0,
        }
      }

      gsap.fromTo(
        el,
        animation,
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',

          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}