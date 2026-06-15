// Tiny WebAudio synth — retro beeps & a startup chord. No audio files needed.
let ctx = null
let muted = false

function ac() {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) ctx = new AC()
  }
  return ctx
}

export function setMuted(v) { muted = v }
export function isMuted() { return muted }

function blip(freq, start, dur, type = 'square', gain = 0.05) {
  const a = ac()
  if (!a || muted) return
  const t0 = a.currentTime + start
  const osc = a.createOscillator()
  const g = a.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  g.gain.setValueAtTime(0, t0)
  g.gain.linearRampToValueAtTime(gain, t0 + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(a.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}

export const sfx = {
  chime() {
    // a warm major chord arpeggio (Mac-startup nod)
    if (muted) return
    ;[261.6, 329.6, 392.0, 523.3].forEach((f, i) => blip(f, i * 0.09, 0.9, 'triangle', 0.06))
  },
  open() { blip(620, 0, 0.08, 'square', 0.04); blip(880, 0.05, 0.1, 'square', 0.04) },
  close() { blip(440, 0, 0.08, 'square', 0.04); blip(300, 0.05, 0.1, 'square', 0.04) },
  click() { blip(1200, 0, 0.03, 'square', 0.03) },
  trash() { blip(200, 0, 0.18, 'sawtooth', 0.05); blip(120, 0.08, 0.22, 'sawtooth', 0.05) },
}

// resume audio context on first user gesture (browser autoplay policy)
export function resumeAudio() {
  const a = ac()
  if (a && a.state === 'suspended') a.resume()
}
