'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pengusaha',
    comment:
      'Pelayanan sangat memuaskan! Mobil bersih, driver ramah dan tepat waktu. Sangat cocok untuk perjalanan bisnis saya.',
    rating: 5,
    location: 'Jakarta',
  },
  {
    name: 'Sari Dewi',
    role: 'Ibu Rumah Tangga',
    comment:
      'Sewa Avanza untuk acara keluarga, harga terjangkau dan prosesnya mudah banget. Pasti bakal repeat order!',
    rating: 5,
    location: 'Bandung',
  },
  {
    name: 'Hendra Wijaya',
    role: 'Manajer Perusahaan',
    comment:
      'Sudah berlangganan selama 2 tahun. Innova Reborn yang disewakan selalu dalam kondisi prima. Recommended!',
    rating: 5,
    location: 'Surabaya',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-py bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 scroll-animate">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#84cc16' }}>
            — Kata Pelanggan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Testimoni Pengguna
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="scroll-animate p-6 rounded-2xl border border-gray-100 bg-white hover:border-lime-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#ecfccb' }}
              >
                <Quote size={18} style={{ color: '#84cc16' }} />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#f59e0b" stroke="none" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-xs leading-relaxed mb-4">{t.comment}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: '#84cc16' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
