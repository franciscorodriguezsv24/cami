import React, { useState, useRef, useEffect } from 'react'

/* ----------------------------------------------------------------
   EDITA AQUÍ: el texto de cada sección y los nombres.
   Las fotos van en  public/photos/1.jpg ... 4.jpg
------------------------------------------------------------------ */
const PARA = 'Cami'
const DE = 'Ale'

const SECTIONS = [
  {
    n: 'I', kicker: 'capítulo uno', title: 'Como me enamoré de ti',
    align: 'left', photo: '/photos/1.jpg', caption: 'nosotros',
    body: [
      'Querida Cami, recuerdo muy bien el día que te conocí y te vi por primera vez. Sin duda es de los días donde más nervioso me puse; jamás había experimentado algo así. Verte fue como un resplandor de luz en mi propia oscuridad.',
      'Ver tu hermosa sonrisa y tus hermosos ojos me hicieron entender que Dios responde las preguntas a través de sus bellas creaciones, como tú. Salir y comer papas fue tan sencillamente mágico, y luego manejar de camino al Denny\u2019s, conversar y pasarla increíble.',
      'Sentí paz, algo que en estos días es tan difícil de encontrar, pero tú me la transmites y me la aportas.',
    ],
  },
  {
    n: 'II', kicker: 'capítulo dos', title: 'Cuando supe que me gustabas',
    align: 'right', photo: '/photos/2.jpg', caption: 'tú',
    body: [
      'Aún recuerdo cuando estaba preparando las primeras flores que te envié. El sentimiento de regalártelas y hacerte feliz fue tan genuino que amé tu reacción al recibirlas.',
      'Ahí me di cuenta que una de las cosas que más disfruto hacer es hacerte feliz y sacarte esa sonrisa tan hermosa que tienes.',
    ],
  },
  {
    n: 'III', kicker: 'capítulo tres', title: 'Por qué tú',
    align: 'center', lilies: true,
    body: [
      'Porque todos los caminos, de una u otra manera, me llevaban a ti. Nunca había sentido tanta conexión, tanto amor, tanta reciprocidad: un sentimiento real, sin máscaras.',
      'Amo tu carisma, tu deseo de servir y ayudar, tu caridad con la gente. Amo cómo eres una hija excelente y una luz para todos los que te rodean.',
      'Amo tus ojos, amo tu sonrisa, y por encima de todo, amo que ames a Dios sobre todas las cosas.',
    ],
  },
  {
    n: 'IV', kicker: 'capítulo cuatro', title: 'Por qué quiero estar contigo',
    align: 'left', photo: '/photos/4.jpg', caption: 'contigo',
    body: [
      'Una de las razones por las que cada día te elijo es por la mujer increíble que eres. Me has demostrado ser un apoyo incondicional ante cualquier situación, sin reservas, sin condiciones.',
      'Te elijo porque me haces crecer, porque me ayudas a salir de mi zona de confort y a ser mejor. Cada día a tu lado me convierto en una mejor versión de mí mismo.',
      'Pero sobre todo te elijo porque sé que no hay mujer en esta tierra con un brillo tan hermoso como el tuyo. Contigo cualquier tempestad se pasa más feliz, y tu motivación es la gasolina de mi día a día.',
    ],
  },
]

/* ----------------------------------------------------------------  Lirio  */
function Lily({ w, rot = 0 }) {
  return (
    <svg viewBox="0 0 120 170" style={{ width: w, height: 'auto', display: 'block', flex: '0 0 auto', transform: `rotate(${rot}deg)`, overflow: 'visible' }}>
      <path d="M60 168 C60 132 60 108 60 78" stroke="#6fa86f" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M60 130 C40 124 28 104 32 84 C52 90 60 110 60 130Z" fill="#7cba7c" stroke="#4e8a4e" strokeWidth="1.2" />
      <path d="M60 112 C80 108 92 88 88 70 C70 76 60 92 60 112Z" fill="#9fd29f" stroke="#5e9a5e" strokeWidth="1.2" />
      <g transform="translate(60 60)">
        {[30, 150, 270].map((a, i) => (
          <ellipse key={`b${i}`} rx="12" ry="34" cy="-30" fill="#e5c4ff" stroke="#a86fd6" strokeWidth="1.4" transform={`rotate(${a})`} />
        ))}
        {[90, 210, 330].map((a, i) => (
          <ellipse key={`f${i}`} rx="12" ry="34" cy="-30" fill="#fff6fc" stroke="#c06fc0" strokeWidth="1.6" transform={`rotate(${a})`} />
        ))}
        {[90, 210, 330].map((a, i) => (
          <path key={`s${i}`} d="M0 -58 Q-5 -42 0 -28 Q5 -42 0 -58Z" fill="#ff7fc6" opacity="0.75" transform={`rotate(${a})`} />
        ))}
        {[90, 210, 330].map((a, i) => (
          <g key={`d${i}`} transform={`rotate(${a})`} fill="#a8419a" opacity="0.85">
            <circle cx="-3" cy="-38" r="1" />
            <circle cx="2" cy="-44" r="1.1" />
            <circle cx="-1" cy="-50" r="0.9" />
            <circle cx="4" cy="-34" r="0.8" />
          </g>
        ))}
        <circle r="6" fill="#fff0c2" stroke="#d6a35c" strokeWidth="1" />
        <g stroke="#b87a2e" strokeWidth="1.6" fill="#7a4a14" strokeLinecap="round">
          <line x1="0" y1="0" x2="-8" y2="-17" />
          <line x1="0" y1="0" x2="-3" y2="-21" />
          <line x1="0" y1="0" x2="3" y2="-21" />
          <line x1="0" y1="0" x2="8" y2="-17" />
          <ellipse cx="-8" cy="-17" rx="2.2" ry="1.4" transform="rotate(-25 -8 -17)" />
          <ellipse cx="-3" cy="-21" rx="2.2" ry="1.4" transform="rotate(-8 -3 -21)" />
          <ellipse cx="3" cy="-21" rx="2.2" ry="1.4" transform="rotate(8 3 -21)" />
          <ellipse cx="8" cy="-17" rx="2.2" ry="1.4" transform="rotate(25 8 -17)" />
        </g>
      </g>
    </svg>
  )
}

function Bloom({ w, rot, delay = 0 }) {
  return (
    <div data-reveal style={{ opacity: 0, transform: 'scale(.25) translateY(30px)', transformOrigin: 'bottom center', transition: `opacity 1.3s ease ${delay}s, transform 1.3s cubic-bezier(.34,1.56,.64,1) ${delay}s`, filter: 'drop-shadow(0 18px 30px rgba(140,70,170,.45)) drop-shadow(0 4px 8px rgba(110,40,140,.35))' }}>
      <Lily w={w} rot={rot} />
    </div>
  )
}

/* ----------------------------------------------------------------  Pétalos  */
function Petals() {
  const palette = [['#ffffff', '#f6e6ff'], ['#f0d8ff', '#ffffff'], ['#ffe7f4', '#efd9ff']]
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {Array.from({ length: 18 }).map((_, i) => {
        const left = (i * 5.6 + 2) % 100
        const size = 9 + (i % 5) * 4
        const dur = 9 + (i % 6) * 1.7
        const delay = -((i * 1.7) % 15)
        const c = palette[i % 3]
        return (
          <div key={i} style={{ position: 'absolute', top: 0, left: `${left}%`, width: size, height: size * 1.35, animation: `petalFall ${dur}s linear ${delay}s infinite`, willChange: 'transform' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '0 100% 0 100%', background: `linear-gradient(135deg,${c[0]},${c[1]})`, opacity: 0.7, boxShadow: '0 2px 6px rgba(214,150,220,.25)', animation: `petalSway ${3 + (i % 4)}s ease-in-out ${delay}s infinite alternate` }} />
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------  Foto polaroid  */
function Polaroid({ src, caption, rot }) {
  const [ok, setOk] = useState(true)
  return (
    <div data-reveal style={{ opacity: 0, transform: `scale(.92) rotate(${rot}deg)`, transition: 'all 1.1s ease', flex: '0 0 auto', position: 'relative' }}>
      <div style={{ background: '#fff', padding: '14px 14px 56px', borderRadius: 6, boxShadow: '0 18px 38px rgba(176,90,150,.22)', transform: `rotate(${rot}deg)` }}>
        <div style={{ width: 'min(280px,72vw)', height: 330, borderRadius: 4, overflow: 'hidden', background: 'linear-gradient(150deg,#ffe9fb,#f1e0ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {ok
            ? <img src={src} alt={caption} onError={() => setOk(false)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <span style={{ fontFamily: "'Cormorant Garamond',serif", color: '#c06fc0', fontSize: '1rem', textAlign: 'center', padding: 16 }}>Pon tu foto en<br /><code style={{ fontSize: '.85rem' }}>public{src}</code></span>}
        </div>
        <div style={{ position: 'absolute', bottom: 16, left: 0, width: '100%', textAlign: 'center', fontFamily: "'Dancing Script',cursive", fontSize: '1.25rem', color: '#b85aad' }}>{caption}</div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------  Sección  */
const KICKER = { fontFamily: "'Cormorant Garamond',serif", textTransform: 'uppercase', letterSpacing: '.4em', fontSize: '.78rem', color: '#c06fc0' }
const NUM = { fontFamily: "'Parisienne', cursive", textTransform: 'none', letterSpacing: 0, fontSize: '1.8rem', color: '#deb8ff' }
const H2 = { margin: 0, fontFamily: "'Dancing Script',cursive", fontWeight: 700, fontSize: 'clamp(2.6rem,7vw,4.4rem)', lineHeight: 1.05, color: '#a8419a' }
const BODY = { fontSize: 'clamp(1.1rem,2.2vw,1.4rem)', lineHeight: 1.9, color: '#6b3a6e' }

function Section({ s }) {
  const writeStyle = {
    overflow: 'hidden',
    clipPath: s.align === 'right' ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
    transition: 'clip-path 1.7s ease',
    ...H2,
  }
  const Text = (
    <div data-reveal style={{ opacity: 0, transform: 'translateY(26px)', transition: 'all 1.1s ease', flex: '1 1 320px', textAlign: s.align === 'right' ? 'right' : 'left', ...BODY }}>
      {s.body.map((p, i) => (
        <p key={i} style={{ margin: i < s.body.length - 1 ? '0 0 18px' : 0, fontStyle: i === s.body.length - 1 ? 'italic' : 'normal', color: i === s.body.length - 1 ? '#a8419a' : '#6b3a6e' }}>{p}</p>
      ))}
    </div>
  )

  if (s.align === 'center') {
    return (
      <section style={{ padding: '9vh 0', display: 'flex', flexDirection: 'column', gap: 30, alignItems: 'center', textAlign: 'center' }}>
        <header style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <div data-reveal style={{ opacity: 0, transform: 'translateY(18px)', transition: 'all 1s ease', display: 'flex', alignItems: 'center', gap: 14, ...KICKER }}>
            <span style={NUM}>{s.n}</span> {s.kicker}
          </div>
          <h2 data-write style={writeStyle}>{s.title}</h2>
        </header>
        <div style={{ display: 'flex', gap: '2vw', alignItems: 'flex-end', justifyContent: 'center', margin: '4px 0', maxWidth: '100%' }}>
          <Bloom w="min(96px,24vw)" rot={-12} delay={0} />
          <Bloom w="min(140px,32vw)" rot={0} delay={0.18} />
          <Bloom w="min(96px,24vw)" rot={12} delay={0.36} />
        </div>
        <div data-reveal style={{ opacity: 0, transform: 'translateY(26px)', transition: 'all 1.1s ease', maxWidth: 600, ...BODY }}>
          {s.body.map((p, i) => (
            <p key={i} style={{ margin: i < s.body.length - 1 ? '0 0 18px' : 0, fontStyle: i === s.body.length - 1 ? 'italic' : 'normal', color: i === s.body.length - 1 ? '#a8419a' : '#6b3a6e' }}>{p}</p>
          ))}
        </div>
      </section>
    )
  }

  const photo = <Polaroid src={s.photo} caption={s.caption} rot={s.align === 'right' ? 3 : -3} />
  return (
    <section style={{ padding: '9vh 0', display: 'flex', flexDirection: 'column', gap: 30 }}>
      <header style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: s.align === 'right' ? 'flex-end' : 'flex-start', textAlign: s.align === 'right' ? 'right' : 'left' }}>
        <div data-reveal style={{ opacity: 0, transform: 'translateY(18px)', transition: 'all 1s ease', display: 'flex', alignItems: 'center', gap: 14, ...KICKER }}>
          {s.align === 'right' ? <>{s.kicker} <span style={NUM}>{s.n}</span></> : <><span style={NUM}>{s.n}</span> {s.kicker}</>}
        </div>
        <h2 data-write style={writeStyle}>{s.title}</h2>
      </header>
      <div style={{ display: 'flex', flexWrap: s.align === 'right' ? 'wrap-reverse' : 'wrap', gap: 44, alignItems: 'center' }}>
        {s.align === 'right' ? <>{photo}{Text}</> : <>{Text}{photo}</>}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------  App  */
export default function App() {
  const rootRef = useRef(null)
  const [opened, setOpened] = useState(false)

  // bloquea el scroll hasta abrir el sobre
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [opened])

  // revela elementos al entrar en pantalla
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target
          el.style.opacity = '1'
          el.style.transform = 'none'
          if (el.hasAttribute('data-write')) el.style.clipPath = 'inset(0 0 0 0)'
          io.unobserve(el)
        }
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })
    root.querySelectorAll('[data-reveal],[data-write]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={rootRef} style={{ position: 'relative', minHeight: '100vh', width: '100%', overflow: 'hidden', background: 'linear-gradient(170deg,#fffaf3 0%, #f6ecff 45%, #ecdcff 100%)', fontFamily: "'Cormorant Garamond', serif", color: '#5e2b63' }}>
      {/* glows */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(60% 50% at 80% 12%, rgba(255,245,230,.55), transparent 70%), radial-gradient(55% 45% at 12% 88%, rgba(214,184,255,.42), transparent 70%)' }} />
      <Petals />

      {/* SOBRE */}
      <div onClick={() => setOpened(true)} style={{ position: 'fixed', inset: 0, zIndex: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 34, cursor: 'pointer', background: 'radial-gradient(120% 80% at 50% 30%, #fff7fb 0%, #f6e7ff 55%, #ecdcff 100%)', transition: 'opacity .9s ease, transform .9s ease', perspective: 1400, opacity: opened ? 0 : 1, transform: opened ? 'scale(1.08)' : 'none', pointerEvents: opened ? 'none' : 'auto', visibility: opened ? 'hidden' : 'visible', transitionProperty: 'opacity, transform, visibility', transitionDuration: '.9s, .9s, 0s', transitionDelay: opened ? '0s, 0s, .9s' : '0s' }}>
        {/* halo de fondo del sobre */}
        <div style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%,-50%)', width: 'min(640px,95vw)', height: 'min(640px,95vw)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,210,245,.55), rgba(214,184,255,.18) 55%, transparent 70%)', filter: 'blur(8px)', pointerEvents: 'none' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, transition: 'opacity .5s ease, transform .6s ease', opacity: opened ? 0 : 1, transform: opened ? 'translateY(-46px) scale(.92)' : 'none', position: 'relative' }}>
          <div style={{ position: 'relative', width: 'min(440px,84vw)', height: 'min(300px,58vw)', animation: 'floaty 6s ease-in-out infinite' }}>
            {/* sombra del sobre en el "suelo" */}
            <div style={{ position: 'absolute', left: '6%', right: '6%', bottom: '-10%', height: '14%', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(160,70,140,.32), rgba(160,70,140,0) 70%)', filter: 'blur(6px)' }} />

            {/* cuerpo del sobre */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(155deg,#fff8fd 0%, #ffe9f7 55%, #f7d6ee 100%)', boxShadow: 'inset 0 0 0 1px rgba(192,80,160,.18), inset 0 -28px 50px rgba(192,80,160,.10), 0 28px 50px rgba(176,90,150,.30), 0 8px 18px rgba(176,90,150,.18)' }}>
              {/* textura sutil de papel */}
              <div style={{ position: 'absolute', inset: 0, opacity: .35, mixBlendMode: 'overlay', background: 'repeating-linear-gradient(45deg, rgba(255,255,255,.18) 0 1px, transparent 1px 3px), repeating-linear-gradient(-45deg, rgba(170,90,150,.05) 0 1px, transparent 1px 4px)' }} />
              {/* triángulos laterales (back panels) */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '52%', height: '100%', background: 'linear-gradient(135deg,#fbe2f6 0%, #f4ccea 70%, #ebb8df 100%)', clipPath: 'polygon(0 18%, 0 100%, 100% 100%)', boxShadow: 'inset -1px 0 0 rgba(255,255,255,.5)' }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '52%', height: '100%', background: 'linear-gradient(225deg,#fbe2f6 0%, #f4ccea 70%, #ebb8df 100%)', clipPath: 'polygon(100% 18%, 100% 100%, 0 100%)', boxShadow: 'inset 1px 0 0 rgba(255,255,255,.5)' }} />
              {/* costura/línea diagonal sutil */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 49.6%, rgba(168,65,154,.18) 49.9%, rgba(168,65,154,.18) 50.1%, transparent 50.4%), linear-gradient(225deg, transparent 49.6%, rgba(168,65,154,.18) 49.9%, rgba(168,65,154,.18) 50.1%, transparent 50.4%)' }} />
              {/* destello especular */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(180deg, rgba(255,255,255,.45), rgba(255,255,255,0) 80%)', pointerEvents: 'none' }} />
              {/* borde interno */}
              <div style={{ position: 'absolute', inset: 8, border: '1px dashed rgba(168,65,154,.18)', borderRadius: 8, pointerEvents: 'none' }} />
            </div>

            {/* hoja de papel asomándose por arriba */}
            <div style={{ position: 'absolute', top: -6, left: '10%', right: '10%', height: '20%', background: 'linear-gradient(180deg,#ffffff,#fff4fb)', borderRadius: '6px 6px 2px 2px', boxShadow: '0 -2px 6px rgba(168,65,154,.10), 0 1px 0 rgba(168,65,154,.08) inset', zIndex: 2 }} />

            {/* solapa superior */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '62%', transformOrigin: 'top center', transformStyle: 'preserve-3d', transition: 'transform .8s cubic-bezier(.6,.02,.3,1)', zIndex: 3, clipPath: 'polygon(0 0, 100% 0, 50% 100%)', background: 'linear-gradient(180deg,#fde0f7 0%, #f5c4ed 70%, #eaa9de 100%)', borderTopLeftRadius: 12, borderTopRightRadius: 12, boxShadow: 'inset 0 -10px 20px rgba(168,65,154,.18), inset 0 1px 0 rgba(255,255,255,.7)', transform: opened ? 'rotateX(-172deg)' : 'none' }}>
              {/* destello en la solapa */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(180deg, rgba(255,255,255,.55), rgba(255,255,255,0))', clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            </div>

            {/* sello de cera (SVG con forma orgánica) */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 4, width: 130, height: 130, animation: 'sealPulse 3.2s ease-in-out infinite', borderRadius: '50%' }}>
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible', filter: 'drop-shadow(0 10px 14px rgba(90,15,70,.45)) drop-shadow(0 3px 4px rgba(90,15,70,.35))' }}>
                <defs>
                  <radialGradient id="waxBody" cx="38%" cy="32%" r="75%">
                    <stop offset="0%" stopColor="#e88ad0" />
                    <stop offset="35%" stopColor="#c25aa6" />
                    <stop offset="70%" stopColor="#9a2c80" />
                    <stop offset="100%" stopColor="#6b1656" />
                  </radialGradient>
                  <radialGradient id="waxImprint" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#a8347e" />
                    <stop offset="100%" stopColor="#7a1f63" />
                  </radialGradient>
                  <radialGradient id="waxShine" cx="35%" cy="28%" r="35%">
                    <stop offset="0%" stopColor="rgba(255,235,250,.9)" />
                    <stop offset="100%" stopColor="rgba(255,235,250,0)" />
                  </radialGradient>
                  <filter id="waxRough" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
                    <feDisplacementMap in="SourceGraphic" scale="1.5" />
                  </filter>
                </defs>

                {/* cuerpo orgánico de la cera */}
                <path
                  d="M100 18
                     C130 16, 150 26, 168 44
                     C188 60, 188 92, 178 110
                     C190 124, 184 148, 168 158
                     C152 178, 124 184, 104 178
                     C82 188, 56 182, 42 166
                     C24 154, 16 130, 24 110
                     C12 92, 18 64, 36 50
                     C52 30, 76 18, 100 18 Z"
                  fill="url(#waxBody)"
                  stroke="rgba(60,5,45,.35)"
                  strokeWidth="1"
                />

                {/* sombra interior para profundidad */}
                <ellipse cx="100" cy="115" rx="78" ry="62" fill="rgba(60,5,45,.28)" opacity=".55" />

                {/* impronta interior (círculo recesado) */}
                <circle cx="100" cy="100" r="56" fill="url(#waxImprint)" />
                <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(40,0,30,.55)" strokeWidth="2" />
                <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(255,220,240,.25)" strokeWidth="0.8" strokeDasharray="2 3" />

                {/* borde decorativo punteado del sello */}
                <circle cx="100" cy="100" r="48" fill="none" stroke="rgba(255,225,245,.45)" strokeWidth="0.6" strokeDasharray="1.4 2.4" />

                {/* monograma A&C */}
                <text x="100" y="114" textAnchor="middle" fontFamily="'Parisienne', cursive" fontSize="48" fill="#fff2fb" style={{ filter: 'drop-shadow(0 1px 1px rgba(40,0,30,.65))' }}>A&amp;C</text>

                {/* brillo especular superior */}
                <ellipse cx="78" cy="55" rx="36" ry="22" fill="url(#waxShine)" opacity=".75" />
                {/* highlight chico secundario */}
                <ellipse cx="148" cy="68" rx="10" ry="6" fill="rgba(255,235,250,.55)" transform="rotate(-25 148 68)" />
              </svg>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 18 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", textTransform: 'uppercase', letterSpacing: '.5em', fontSize: '.78rem', color: '#b85aad', marginBottom: 8 }}>una carta para ti</div>
            <div style={{ fontFamily: "'Parisienne', cursive", fontSize: 'clamp(2.6rem,8vw,4rem)', lineHeight: 1, color: '#a8419a', textShadow: '0 2px 18px rgba(255,184,249,.45)' }}>para {PARA}</div>
            {/* divisor floral */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 14 }}>
              <span style={{ width: 50, height: 1, background: 'linear-gradient(90deg, transparent, #d49ad0)' }} />
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2" fill="#c06fc0" />
                <circle cx="7" cy="2" r="1.4" fill="#deb8ff" />
                <circle cx="7" cy="12" r="1.4" fill="#deb8ff" />
                <circle cx="2" cy="7" r="1.4" fill="#deb8ff" />
                <circle cx="12" cy="7" r="1.4" fill="#deb8ff" />
              </svg>
              <span style={{ width: 50, height: 1, background: 'linear-gradient(270deg, transparent, #d49ad0)' }} />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, animation: 'hintBob 2.4s ease-in-out infinite' }}>
          <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.35rem', color: '#b85aad' }}>toca para abrir</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b85aad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>

      {/* CARTA */}
      <main style={{ position: 'relative', zIndex: 2, maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 18 }}>
          <div data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 1.1s ease, transform 1.1s ease', ...KICKER, fontSize: '.85rem' }}>para {PARA} · de {DE}</div>
          <h1 data-reveal style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 1.2s ease .15s, transform 1.2s ease .15s', margin: 0, fontFamily: "'Parisienne',cursive", fontSize: 'clamp(3.4rem,13vw,7rem)', lineHeight: 1, color: '#a8419a', textShadow: '0 2px 18px rgba(255,184,249,.55)' }}>Querida Cami</h1>
          <p data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 1.2s ease .3s, transform 1.2s ease .3s', maxWidth: 560, margin: '8px 0 0', ...BODY, fontSize: 'clamp(1.15rem,2.4vw,1.45rem)' }}>Escribí esto para ti, entre lirios y pétalos que caen, porque hay cosas que merecen quedarse para siempre. Quédate, léelo despacio.</p>
          <div data-reveal style={{ opacity: 0, transition: 'opacity 1.4s ease .8s', marginTop: 34, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: "'Dancing Script',cursive", fontSize: '1.2rem', color: '#b85aad' }}>desliza para leer</span>
            <svg width="22" height="34" viewBox="0 0 22 34" fill="none" stroke="#c06fc0" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="16" height="28" rx="8" /><line x1="11" y1="9" x2="11" y2="15" /></svg>
          </div>
        </section>

        {SECTIONS.map((s) => <Section key={s.n} s={s} />)}

        {/* FINAL */}
        <section style={{ minHeight: '100vh', padding: '10vh 0', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5vw', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 6, maxWidth: '100%' }}>
            <Bloom w="min(80px,14vw)" rot={-18} delay={0} />
            <Bloom w="min(120px,20vw)" rot={-6} delay={0.15} />
            <Bloom w="min(150px,24vw)" rot={4} delay={0.3} />
            <Bloom w="min(110px,19vw)" rot={14} delay={0.45} />
            <Bloom w="min(78px,14vw)" rot={22} delay={0.6} />
          </div>
          <div data-reveal style={{ opacity: 0, transform: 'translateY(18px)', transition: 'all 1s ease', ...KICKER }}>capítulo final · V</div>
          <h2 data-write style={{ overflow: 'hidden', clipPath: 'inset(0 100% 0 0)', transition: 'clip-path 2s ease', margin: 0, fontFamily: "'Parisienne',cursive", fontSize: 'clamp(3rem,10vw,6rem)', lineHeight: 1.05, color: '#a8419a', textShadow: '0 2px 20px rgba(255,184,249,.5)' }}>Para toda la vida</h2>
          <p data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1.2s ease .2s', maxWidth: 600, ...BODY, fontSize: 'clamp(1.15rem,2.4vw,1.5rem)' }}>No quiero un capítulo más sin ti. Quiero todos los que vengan, y los que sigan después. Contigo, para toda la vida.</p>
          <p data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1.2s ease .3s', maxWidth: 620, ...BODY, fontSize: 'clamp(1.15rem,2.4vw,1.5rem)' }}>Porque aun la tormenta más oscura o la tempestad más densa, contigo a mi lado es todo lo que necesito para pasar la prueba.</p>
          <p data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1.2s ease .45s', margin: '6px 0 0', fontStyle: 'italic', color: '#a8419a', fontSize: 'clamp(1.1rem,2.2vw,1.35rem)' }}>Ahora yo tengo una pregunta que hacerte…</p>
          <div data-reveal style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 1.2s ease .55s', marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ fontFamily: "'Parisienne',cursive", fontSize: 'clamp(2.4rem,7vw,3.4rem)', color: '#a8419a' }}>de {DE}</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", letterSpacing: '.3em', textTransform: 'uppercase', fontSize: '.74rem', color: '#c06fc0' }}>con todo mi corazón</div>
          </div>
        </section>

        <footer style={{ padding: '50px 0 70px', textAlign: 'center', fontFamily: "'Dancing Script',cursive", fontSize: '1.4rem', color: '#c79bd0' }}>para {PARA} · de {DE} ⚜︎</footer>
      </main>
    </div>
  )
}
