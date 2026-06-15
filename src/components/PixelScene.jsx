import { useEffect, useRef } from 'react'

// Handcrafted pixel-art diorama: a cozy villa, animated fountain, swaying trees,
// and a girl chasing a cat in a seamless ~13s loop. Rendered at low internal
// resolution and upscaled with nearest-neighbor for crisp pixels (no AA).
const W = 280, H = 210
const LOOP = 13000 // ms

// palette
const C = {
  grass1: '#7cbf57', grass2: '#69ad48', grass3: '#5a9b3e', grassDk: '#4d8a36',
  path: '#d8c08c', path2: '#c7ac74', pathEdge: '#b89a63',
  wall: '#f3e7cd', wallSh: '#e2d0ab', wallDk: '#d2bd92',
  roof: '#c2573b', roofDk: '#9d4530', roofHi: '#d77b5b',
  win: '#3a2a1c', glow: '#ffd98a', glowHi: '#ffeab2',
  door: '#7a4a2a', doorDk: '#5e3820',
  stone: '#bdb6a6', stoneDk: '#938c7c', stoneHi: '#d6cfbf',
  water1: '#6fcfe0', water2: '#9fe6f0', water3: '#ffffff',
  trunk: '#6b4a2f', trunkDk: '#4f351f',
  leaf1: '#3f8f4a', leaf2: '#54a85b', leaf3: '#6fc06f', leafDk: '#2f7339',
  flowerR: '#e8554e', flowerY: '#f2c44d', flowerP: '#f08fb0', flowerW: '#fdf6e3',
  hair: '#5a3a26', skin: '#f1c9a5', dress: '#e8709a', dressDk: '#cf5780',
  cat: '#e6913f', catDk: '#c06f26', catLt: '#f6d3a0',
  shadow: 'rgba(30,40,25,0.18)',
}

export default function PixelScene() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    // deterministic decor
    const rnd = mulberry(1337)
    const tufts = Array.from({ length: 70 }, () => ({ x: Math.floor(rnd() * W), y: 92 + Math.floor(rnd() * (H - 96)), c: rnd() < 0.5 ? C.grassDk : C.grass3 }))
    const flowers = Array.from({ length: 26 }, () => ({ x: 14 + Math.floor(rnd() * (W - 28)), y: 110 + Math.floor(rnd() * (H - 118)), c: [C.flowerR, C.flowerY, C.flowerP, C.flowerW][Math.floor(rnd() * 4)], ph: rnd() * 6.28 }))
    const trees = [
      { x: 44, y: 120, s: 1.15, ph: 0.0 },   // big left (the hiding tree) — drawn last
      { x: 236, y: 116, s: 1.0, ph: 1.4 },
      { x: 206, y: 56, s: 0.8, ph: 2.6 },
      { x: 30, y: 64, s: 0.78, ph: 3.7 },
    ]
    const butterflies = [
      { cx: 110, cy: 120, rx: 34, ry: 16, sp: 0.0006, ph: 0, c: C.flowerY },
      { cx: 196, cy: 150, rx: 26, ry: 20, sp: -0.0008, ph: 2, c: C.flowerP },
    ]
    const birds = [{ x: 168, y: 188, ph: 0 }, { x: 96, y: 96, ph: 3 }]

    // ---- character loop paths (frac 0..1) ----
    const FC = { x: 150, y: 150 } // fountain center
    const catPath = [
      { t: 0.00, x: 150, y: 116 },
      { t: 0.12, x: 150, y: 132 },
      { t: 0.20, x: 182, y: 150 },
      { t: 0.30, x: 150, y: 172 },
      { t: 0.40, x: 118, y: 150 },
      { t: 0.50, x: 86, y: 134 },
      { t: 0.60, x: 50, y: 120 },
      { t: 0.72, x: 48, y: 120 }, // hidden behind big tree
      { t: 0.80, x: 78, y: 138 },
      { t: 0.90, x: 116, y: 178 },
      { t: 1.00, x: 150, y: 116 },
    ]
    const girlPath = [
      { t: 0.00, x: 150, y: 100 },
      { t: 0.16, x: 150, y: 126 },
      { t: 0.26, x: 184, y: 150 },
      { t: 0.37, x: 150, y: 176 },
      { t: 0.48, x: 116, y: 150 },
      { t: 0.57, x: 92, y: 132 },
      { t: 0.65, x: 74, y: 116 },  // searching around tree
      { t: 0.72, x: 86, y: 128 },
      { t: 0.79, x: 72, y: 122 },
      { t: 0.90, x: 120, y: 176 },
      { t: 1.00, x: 150, y: 100 },
    ]

    let raf, start = null
    const draw = (now) => {
      if (start == null) start = now
      const elapsed = now - start
      const frac = (elapsed % LOOP) / LOOP
      const t = elapsed // ms for ambient

      // ground
      for (let y = 88; y < H; y++) {
        ctx.fillStyle = y < 110 ? C.grass2 : (y < 150 ? C.grass1 : C.grass2)
        ctx.fillRect(0, y, W, 1)
      }
      ctx.fillStyle = C.grass1; ctx.fillRect(0, 88, W, 6)
      for (const g of tufts) { ctx.fillStyle = g.c; ctx.fillRect(g.x, g.y, 2, 1); ctx.fillRect(g.x + 1, g.y - 1, 1, 1) }

      drawPath(ctx)
      drawVilla(ctx, t)
      // back trees
      for (let i = 1; i < trees.length; i++) drawTree(ctx, trees[i], t)
      drawFlowers(ctx, flowers, t)
      drawFountain(ctx, FC, t)

      // characters
      const cat = sample(catPath, frac)
      const catPrev = sample(catPath, (frac + 0.99) % 1)
      const hidden = frac > 0.615 && frac < 0.715
      const girl = sample(girlPath, frac)
      const girlPrev = sample(girlPath, (frac + 0.99) % 1)

      // depth: draw the higher one first
      const drawGirl = () => drawGirlSprite(ctx, girl.x, girl.y, sign(girl.x - girlPrev.x), t)
      const drawCat = () => { if (!hidden) drawCatSprite(ctx, cat.x, cat.y, sign(cat.x - catPrev.x), t) }
      if (girl.y <= cat.y) { drawGirl(); drawCat() } else { drawCat(); drawGirl() }

      // big front tree occludes the hiding cat
      drawTree(ctx, trees[0], t)

      drawButterflies(ctx, butterflies, t)
      drawBirds(ctx, birds, t)

      // soft vignette edges
      vignette(ctx)

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="pixel-scene" aria-hidden="true">
      <canvas ref={ref} width={W} height={H} />
      <div className="pixel-scene-label pixel">samita’s place</div>
    </div>
  )
}

// ---------------- drawing helpers ----------------
function px(ctx, x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(x | 0, y | 0, w, h) }

function drawPath(ctx) {
  // path circling the fountion, with a spur to the villa door
  px(ctx, 196, 116, 10, 30, C.path)
  for (let i = 0; i < 360; i += 6) {
    const a = (i * Math.PI) / 180
    const x = 150 + Math.cos(a) * 40, y = 150 + Math.sin(a) * 26
    px(ctx, x - 4, y - 2, 8, 4, (i % 12 === 0) ? C.path2 : C.path)
  }
  px(ctx, 110, 178, 80, 8, C.path)
  px(ctx, 110, 178, 80, 1, C.pathEdge)
}

function drawVilla(ctx, t) {
  const bx = 116, by = 40, bw = 96, bh = 56
  // body
  px(ctx, bx, by, bw, bh, C.wall)
  px(ctx, bx, by + bh - 8, bw, 8, C.wallSh)
  px(ctx, bx, by, 3, bh, C.wallDk)
  px(ctx, bx + bw - 3, by, 3, bh, C.wallDk)
  // roof (stepped for pixel look)
  for (let i = 0; i < 16; i++) { px(ctx, bx - 6 + i * 3, by - i, bw + 12 - i * 6, 2, i % 2 ? C.roof : C.roofDk) }
  px(ctx, bx - 6, by - 1, bw + 12, 2, C.roofHi)
  // chimney
  px(ctx, bx + bw - 22, by - 18, 8, 12, C.roofDk)
  px(ctx, bx + bw - 23, by - 19, 10, 3, C.stoneDk)
  // windows with warm flicker
  const fl = 0.78 + 0.12 * Math.sin(t * 0.004) + (Math.sin(t * 0.013) > 0.94 ? 0.12 : 0)
  const winG = mix(C.glow, C.glowHi, Math.max(0, Math.min(1, fl)))
  for (const wx of [bx + 12, bx + 42, bx + 72]) {
    px(ctx, wx, by + 14, 14, 18, C.win)
    px(ctx, wx + 2, by + 16, 10, 14, winG)
    px(ctx, wx + 6, by + 16, 1, 14, C.win)
    px(ctx, wx + 2, by + 22, 10, 1, C.win)
  }
  // door
  px(ctx, bx + bw / 2 - 7, by + bh - 18, 14, 18, C.doorDk)
  px(ctx, bx + bw / 2 - 6, by + bh - 17, 12, 17, C.door)
  px(ctx, bx + bw / 2 + 2, by + bh - 10, 1, 2, C.glowHi)
  // flower pots by the door
  for (const ox of [-12, 12]) {
    const px0 = bx + bw / 2 + ox
    px(ctx, px0 - 2, by + bh - 5, 5, 4, C.roofDk)
    px(ctx, px0 - 2, by + bh - 8, 5, 3, C.leaf2)
    px(ctx, px0, by + bh - 9, 1, 1, C.flowerR)
  }
}

function drawTree(ctx, tr, t) {
  const sway = Math.round(Math.sin(t * 0.0016 + tr.ph) * 1)
  const s = tr.s
  const cw = Math.round(34 * s), ch = Math.round(30 * s)
  const x = tr.x, y = tr.y
  // trunk
  px(ctx, x - 3, y, 6, Math.round(16 * s), C.trunk)
  px(ctx, x - 3, y, 2, Math.round(16 * s), C.trunkDk)
  // canopy (layered blobs)
  const cx = x + sway, cy = y - Math.round(20 * s)
  px(ctx, cx - cw / 2, cy, cw, ch, C.leaf1)
  px(ctx, cx - cw / 2 + 2, cy - 5, cw - 4, ch, C.leaf2)
  px(ctx, cx - cw / 2 + 6, cy - 8, cw - 14, ch - 6, C.leaf3)
  px(ctx, cx - cw / 2, cy + ch - 4, cw, 4, C.leafDk)
  // shimmer leaves
  for (let i = 0; i < 5; i++) {
    const lx = cx - cw / 2 + 4 + ((i * 7 + Math.floor(t * 0.02)) % (cw - 8))
    const ly = cy + 3 + ((i * 5) % (ch - 8))
    px(ctx, lx, ly, 1, 1, (Math.sin(t * 0.01 + i) > 0) ? C.leaf3 : C.leafDk)
  }
}

function drawFlowers(ctx, flowers, t) {
  for (const f of flowers) {
    const sway = Math.round(Math.sin(t * 0.003 + f.ph))
    px(ctx, f.x, f.y - 2, 1, 3, C.leafDk)
    px(ctx, f.x - 1 + sway, f.y - 3, 3, 1, f.c)
    px(ctx, f.x + sway, f.y - 4, 1, 3, f.c)
    px(ctx, f.x + sway, f.y - 3, 1, 1, C.flowerY)
  }
}

function drawFountain(ctx, FC, t) {
  const { x, y } = FC
  // outer basin (stacked rects → rounded pixel look)
  const rows = [[28, 0], [32, 4], [30, 9], [22, 13]]
  for (const [w, dy] of rows) { px(ctx, x - w / 2, y - 6 + dy, w, 4, C.stoneDk) }
  px(ctx, x - 30, y - 6, 60, 4, C.stoneHi)
  px(ctx, x - 28, y - 4, 56, 8, C.stone)
  // water pool with shimmer
  for (let r = 0; r < 5; r++) {
    const w = 44 - r * 4
    const shade = (Math.sin(t * 0.006 + r) > 0) ? C.water2 : C.water1
    px(ctx, x - w / 2, y - 3 + r, w, 1, shade)
  }
  // center spout column
  px(ctx, x - 2, y - 14, 4, 12, C.stoneDk)
  px(ctx, x - 1, y - 14, 1, 12, C.stoneHi)
  // animated streams
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + t * 0.001
    const ph = (t * 0.012 + i) % 6
    const dx = Math.cos(a) * (3 + ph), dy = -10 + ph * 2.4
    px(ctx, x + dx, y + dy, 1, 1, ph < 3 ? C.water3 : C.water2)
  }
  px(ctx, x - 1, y - 16, 2, 2, C.water3)
  // ripple
  const rip = (t * 0.02) % 20
  ctx.globalAlpha = Math.max(0, 0.5 - rip / 40)
  px(ctx, x - rip / 2, y, rip, 1, C.water3)
  ctx.globalAlpha = 1
}

function shadowBlob(ctx, x, y, w) { ctx.fillStyle = C.shadow; ctx.fillRect(x - w / 2, y, w, 2) }

function drawCatSprite(ctx, x, y, dir, t) {
  x = Math.round(x); y = Math.round(y)
  const step = Math.floor(t * 0.02) % 2
  const d = dir < 0 ? -1 : 1
  shadowBlob(ctx, x, y + 1, 9)
  const bob = step === 0 ? 0 : -1
  y += bob
  // tail
  px(ctx, x - d * 6, y - 5, 2, 2, C.cat)
  px(ctx, x - d * 6, y - 7, 2, 2, C.cat)
  // body
  px(ctx, x - 4, y - 4, 9, 4, C.cat)
  px(ctx, x - 4, y, 2, 2, C.catDk) // leg
  px(ctx, x + 3, y, 2, 2, C.catDk)
  px(ctx, x - 4, y - 1, 9, 1, C.catDk)
  // head
  px(ctx, x + d * 4, y - 7, 4, 4, C.cat)
  px(ctx, x + d * 4, y - 9, 1, 2, C.cat) // ears
  px(ctx, x + d * 6, y - 9, 1, 2, C.cat)
  px(ctx, x + d * 5, y - 6, 1, 1, C.catDk) // eye
}

function drawGirlSprite(ctx, x, y, dir, t) {
  x = Math.round(x); y = Math.round(y)
  const step = Math.floor(t * 0.018) % 2
  const d = dir < 0 ? -1 : 1
  shadowBlob(ctx, x, y + 1, 8)
  const bob = step === 0 ? 0 : -1
  const yy = y + bob
  // legs
  px(ctx, x - 2, y - 2, 2, 3, C.skin)
  px(ctx, x + 1, y - 2, 2, 3, C.skin)
  if (step === 0) px(ctx, x - 2, y + 1, 2, 1, C.dressDk); else px(ctx, x + 1, y + 1, 2, 1, C.dressDk)
  // dress
  px(ctx, x - 3, yy - 8, 7, 7, C.dress)
  px(ctx, x - 3, yy - 2, 7, 1, C.dressDk)
  px(ctx, x + d * 3, yy - 6, 2, 4, C.skin) // arm reaching
  // head + hair
  px(ctx, x - 2, yy - 14, 5, 6, C.skin)
  px(ctx, x - 3, yy - 15, 7, 3, C.hair)
  px(ctx, x - 3, yy - 13, 1, 4, C.hair)
  px(ctx, x + 3, yy - 13, 1, 4, C.hair)
  px(ctx, x + d * 1, yy - 12, 1, 1, C.hair) // eye
  px(ctx, x + d * 2 - (d < 0 ? 1 : 0), yy - 10, 1, 1, C.flowerR) // smile dot
}

function drawButterflies(ctx, list, t) {
  for (const b of list) {
    const x = Math.round(b.cx + Math.cos(t * b.sp + b.ph) * b.rx)
    const y = Math.round(b.cy + Math.sin(t * b.sp * 1.7 + b.ph) * b.ry)
    const flap = Math.floor(t * 0.03) % 2
    px(ctx, x, y, 1, 1, C.trunkDk)
    if (flap) { px(ctx, x - 1, y - 1, 1, 2, b.c); px(ctx, x + 1, y - 1, 1, 2, b.c) }
    else { px(ctx, x - 2, y, 2, 1, b.c); px(ctx, x + 1, y, 2, 1, b.c) }
  }
}

function drawBirds(ctx, list, t) {
  for (const b of list) {
    const cycle = (t * 0.001 + b.ph) % 6
    const hop = cycle < 3 ? (Math.floor(cycle * 4) % 2 ? -1 : 0) : 0
    const x = Math.round(b.x + (cycle < 3 ? cycle * 3 : 9 - (cycle - 3) * 3))
    const y = b.y + hop
    px(ctx, x, y, 2, 2, C.trunk)
    px(ctx, x + 2, y, 1, 1, C.roofDk) // beak
    px(ctx, x, y - 1, 1, 1, C.trunkDk) // head
  }
}

function vignette(ctx) {
  ctx.fillStyle = 'rgba(40,55,30,0.10)'
  ctx.fillRect(0, 0, W, 4); ctx.fillRect(0, H - 4, W, 4)
  ctx.fillRect(0, 0, 4, H); ctx.fillRect(W - 4, 0, 4, H)
}

// ---------------- math ----------------
function sample(path, frac) {
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1]
    if (frac >= a.t && frac <= b.t) {
      const k = (frac - a.t) / (b.t - a.t || 1)
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k }
    }
  }
  return path[path.length - 1]
}
function sign(n) { return n < -0.01 ? -1 : 1 }
function mulberry(seed) { return function () { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let tt = Math.imul(seed ^ (seed >>> 15), 1 | seed); tt = (tt + Math.imul(tt ^ (tt >>> 7), 61 | tt)) ^ tt; return ((tt ^ (tt >>> 14)) >>> 0) / 4294967296 } }
function hexToRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255] }
function mix(a, b, k) { const A = hexToRgb(a), B = hexToRgb(b); const r = A.map((v, i) => Math.round(v + (B[i] - v) * k)); return `rgb(${r[0]},${r[1]},${r[2]})` }
