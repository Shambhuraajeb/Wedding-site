import { useEffect, useRef } from 'react'

const colors = ['#f8c2db', '#edb0d8', '#fce8f4', '#f8f1eb', '#fff7ef']

export default function PetalField({ active = true }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const petalsRef = useRef([])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const createPetal = () => ({
      x: Math.random() * width,
      y: Math.random() * -height,
      size: Math.random() * 12 + 10,
      speedY: Math.random() * 2 + 1,
      speedX: Math.random() * 1 - 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    })

    petalsRef.current = Array.from({ length: 30 }, createPetal)

    const drawPetal = petal => {
      ctx.save()

      ctx.translate(petal.x, petal.y)
      ctx.rotate((petal.rotation * Math.PI) / 180)

      ctx.beginPath()

      ctx.moveTo(0, 0)

      ctx.bezierCurveTo(
        petal.size / 2,
        -petal.size / 2,
        petal.size,
        petal.size / 2,
        0,
        petal.size
      )

      ctx.bezierCurveTo(
        -petal.size,
        petal.size / 2,
        -petal.size / 2,
        -petal.size / 2,
        0,
        0
      )

      ctx.fillStyle = petal.color
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      petalsRef.current.forEach(petal => {
        petal.y += petal.speedY
        petal.x += petal.speedX + Math.sin(petal.y * 0.01)
        petal.rotation += petal.rotationSpeed

        if (petal.y > height + 20) {
          Object.assign(petal, createPetal())
          petal.y = -20
        }

        drawPetal(petal)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999]"
    />
  )
}