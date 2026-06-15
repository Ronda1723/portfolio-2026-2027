import { useEffect, useRef } from 'react'

// Classic warp-speed starfield. Any input wakes it.
export default function Screensaver({ onWake }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const stars = Array.from({ length: 220 }, () => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
      z: Math.random() * w,
    }))

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.fillStyle = '#05060a'
      ctx.fillRect(0, 0, w, h)
      ctx.save()
      ctx.translate(w / 2, h / 2)
      for (const s of stars) {
        s.z -= 6
        if (s.z <= 0) { s.x = (Math.random() - 0.5) * w; s.y = (Math.random() - 0.5) * h; s.z = w }
        const k = 128 / s.z
        const px = s.x * k
        const py = s.y * k
        const size = (1 - s.z / w) * 3
        const shade = Math.min(255, Math.floor((1 - s.z / w) * 255))
        ctx.fillStyle = `rgb(${shade},${shade},${shade})`
        ctx.fillRect(px, py, size, size)
      }
      ctx.restore()
      raf = requestAnimationFrame(draw)
    }
    draw()

    const wake = () => onWake()
    window.addEventListener('mousemove', wake)
    window.addEventListener('mousedown', wake)
    window.addEventListener('keydown', wake)
    window.addEventListener('touchstart', wake)
    window.addEventListener('wheel', wake)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', wake)
      window.removeEventListener('mousedown', wake)
      window.removeEventListener('keydown', wake)
      window.removeEventListener('touchstart', wake)
      window.removeEventListener('wheel', wake)
    }
  }, [onWake])

  return (
    <div className="fixed inset-0 z-[9700]" style={{ cursor: 'none' }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[12px] blink">move the mouse to wake</div>
    </div>
  )
}
