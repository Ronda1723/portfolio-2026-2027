import { useEffect, useRef, useState } from 'react'

const W = 340, H = 540
const GAP = 158, PIPE_W = 60, SPEED = 2.4, GRAV = 0.5, FLAP = -7.6
const BIRD_X = 86, BIRD_R = 13, SPAWN = 96

// A playable Flappy-Bird — Artemis II tribute: fly the capsule through asteroid fields.
export default function FlappyGame() {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | playing | over
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  const g = useRef({ bird: { y: H / 2, v: 0 }, pipes: [], frame: 0, score: 0, status: 'idle', stars: [] })

  // stable game actions
  const actions = useRef({})
  actions.current.start = () => {
    const s = g.current
    s.bird = { y: H / 2, v: FLAP }
    s.pipes = []
    s.frame = 0
    s.score = 0
    s.status = 'playing'
    setScore(0)
    setStatus('playing')
  }
  actions.current.over = () => {
    g.current.status = 'over'
    setStatus('over')
    setBest((b) => Math.max(b, g.current.score))
  }
  actions.current.input = () => {
    const s = g.current
    if (s.status === 'playing') s.bird.v = FLAP
    else actions.current.start()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    // starfield
    g.current.stars = Array.from({ length: 46 }, () => ({ x: Math.random() * W, y: Math.random() * H, s: Math.random() * 1.6 + 0.4, sp: Math.random() * 0.5 + 0.15 }))

    let raf
    const rand = (a, b) => a + Math.random() * (b - a)

    const loop = () => {
      const s = g.current
      s.frame++

      if (s.status === 'playing') {
        s.bird.v += GRAV
        s.bird.y += s.bird.v
        if (s.frame % SPAWN === 0) s.pipes.push({ x: W, gap: rand(96, H - 96 - GAP), scored: false })
        s.pipes.forEach((p) => (p.x -= SPEED))
        s.pipes = s.pipes.filter((p) => p.x + PIPE_W > -4)
        // score + collision
        for (const p of s.pipes) {
          if (!p.scored && p.x + PIPE_W < BIRD_X) { p.scored = true; s.score++; setScore(s.score) }
          const inX = BIRD_X + BIRD_R > p.x && BIRD_X - BIRD_R < p.x + PIPE_W
          const hit = inX && (s.bird.y - BIRD_R < p.gap || s.bird.y + BIRD_R > p.gap + GAP)
          if (hit) actions.current.over()
        }
        if (s.bird.y + BIRD_R > H || s.bird.y - BIRD_R < 0) actions.current.over()
      }

      draw(ctx, s)
      raf = requestAnimationFrame(loop)
    }
    loop()

    const onKey = (e) => { if (e.code === 'Space' || e.key === ' ') { e.preventDefault(); actions.current.input() } }
    window.addEventListener('keydown', onKey)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-4" style={{ background: '#0b1020' }}>
      <div style={{ position: 'relative', width: W, height: H, maxWidth: '100%' }}>
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => { e.preventDefault(); actions.current.input() }}
          style={{ width: W, height: H, maxWidth: '100%', border: '1.5px solid #000', borderRadius: 10, cursor: 'pointer', touchAction: 'none', display: 'block' }}
        />
        {status !== 'playing' && (
          <div style={{ position: 'absolute', inset: 0 }} className="flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="bg-white/90 border border-black rounded-xl px-5 py-4 pointer-events-auto" style={{ boxShadow: '4px 5px 0 rgba(0,0,0,0.5)' }}>
              <div className="headline text-lg">{status === 'over' ? 'Mission Over 🚀' : 'Artemis II'}</div>
              {status === 'over'
                ? <div className="text-[13px] mt-1">Score <b>{score}</b> · Best <b>{best}</b></div>
                : <div className="text-[12px] mt-1" style={{ color: 'var(--muted)' }}>Fly the capsule through the asteroids.</div>}
              <button className="mac-btn mac-btn-primary mt-3" style={{ background: '#1d4aff' }} onClick={() => actions.current.start()}>
                {status === 'over' ? '↻ Play again' : '▶ Launch'}
              </button>
              <div className="text-[11px] mt-2" style={{ color: 'var(--muted)' }}>Click / tap / Space to flap</div>
            </div>
          </div>
        )}
      </div>
      <div className="text-white/70 text-[11px] mt-3 pixel">Day 8 of the build challenge · Artemis II tribute</div>
    </div>
  )
}

function draw(ctx, s) {
  // space background
  ctx.fillStyle = '#0b1020'
  ctx.fillRect(0, 0, W, H)
  // stars (parallax drift)
  ctx.fillStyle = '#aab4e8'
  for (const st of s.stars) {
    if (s.status === 'playing') { st.x -= st.sp; if (st.x < 0) { st.x = W; st.y = Math.random() * H } }
    ctx.globalAlpha = 0.5 + st.s / 4
    ctx.fillRect(st.x, st.y, st.s, st.s)
  }
  ctx.globalAlpha = 1

  // asteroid pillars
  for (const p of s.pipes) {
    drawRock(ctx, p.x, 0, PIPE_W, p.gap)
    drawRock(ctx, p.x, p.gap + GAP, PIPE_W, H - (p.gap + GAP))
  }

  // capsule (rocket emoji rotated by velocity)
  const angle = Math.max(-0.5, Math.min(1.1, s.bird.v / 12))
  ctx.save()
  ctx.translate(BIRD_X, s.bird.y)
  ctx.rotate(angle)
  ctx.font = '26px serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('🚀', 0, 0)
  ctx.restore()

  // score
  if (s.status === 'playing') {
    ctx.fillStyle = '#fff'
    ctx.font = '700 30px "Space Grotesk", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    ctx.fillText(String(s.score), W / 2, 16)
  }
}

function drawRock(ctx, x, y, w, h) {
  ctx.fillStyle = '#5b5560'
  ctx.strokeStyle = '#1c1c1a'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect ? ctx.roundRect(x, y, w, h, 6) : ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.stroke()
  // a couple of craters for texture
  ctx.fillStyle = '#4a444f'
  ctx.beginPath(); ctx.arc(x + w * 0.35, y + Math.min(h - 8, 22), 5, 0, 7); ctx.fill()
  ctx.beginPath(); ctx.arc(x + w * 0.65, y + Math.max(8, h - 26), 4, 0, 7); ctx.fill()
}
