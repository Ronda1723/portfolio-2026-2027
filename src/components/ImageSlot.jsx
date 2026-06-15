import { useState } from 'react'

// Renders an image if it exists at /images/<base>/<id>.png, otherwise a labeled
// placeholder showing exactly where to drop the file.
export default function ImageSlot({ slot, base, open, className = '' }) {
  const src = `/images/${base}/${slot.id}.png`
  const [status, setStatus] = useState('loading')
  const ratio = `${slot.w} / ${slot.h}`

  return (
    <figure className={className} style={{ margin: 0 }}>
      <div style={{ aspectRatio: ratio, position: 'relative', width: '100%' }}>
        {status === 'ok' ? (
          <button
            className="img-real w-full h-full"
            onClick={() => open && open('picture', { src, label: slot.label }, slot.label)}
            title="Click to enlarge"
          >
            <img src={src} alt={slot.label} />
          </button>
        ) : (
          <div className="img-slot w-full h-full">
            <span className="text-2xl">🖼️</span>
            <span className="tag">{slot.label}</span>
            <span className="path">{`/images/${base}/${slot.id}.png · ${slot.w}×${slot.h}`}</span>
          </div>
        )}
        {/* hidden probe to detect whether the file exists */}
        {status === 'loading' && (
          <img
            src={src}
            alt=""
            style={{ display: 'none' }}
            onLoad={() => setStatus('ok')}
            onError={() => setStatus('error')}
          />
        )}
      </div>
      {slot.caption && <figcaption className="img-caption">{slot.caption}</figcaption>}
    </figure>
  )
}
