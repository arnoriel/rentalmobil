'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react'

const avanzaFeatures = [
  'Kapasitas 7 Penumpang',
  'Sistem Audio Modern',
  'AC Sejuk & Nyaman',
  'Cocok untuk Keluarga',
  'Armada Terawat Rutin',
  'Tersedia Lepas Kunci',
]

export default function Promo() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-py"
      style={{ background: '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-8 scroll-animate">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#84cc16' }}>
            — Penawaran Terbaik
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Hanya Rp 300.000/hari
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Manfaatkan penawaran terbaik kami untuk sewa mobil harian yang terjangkau
          </p>
        </div>

        {/* Promo card */}
        <div
          className="rounded-3xl overflow-hidden scroll-animate"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #1f2d0a 100%)',
          }}
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left — Text */}
            <div className="p-8 sm:p-10 lg:p-12">
              {/* Badge */}
              <span
                className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-5"
                style={{ background: '#84cc16', color: 'white' }}
              >
                Promo Hari Ini
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Toyota Avanza
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Armada keluarga paling populer dengan kapasitas luas dan kenyamanan terjamin.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                {avanzaFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} style={{ color: '#84cc16', flexShrink: 0 }} />
                    <span className="text-xs text-gray-300">{f}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div
                className="flex gap-5 mb-8 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              >
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Lepas Kunci</div>
                  <div className="text-xl font-extrabold text-white">
                    Rp 300.000
                    <span className="text-sm font-normal text-gray-400">/hari</span>
                  </div>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Dengan Driver</div>
                  <div className="text-xl font-extrabold" style={{ color: '#84cc16' }}>
                    Rp 400.000
                    <span className="text-sm font-normal text-gray-400">/hari</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-xs mb-6">
                * Harga di luar biaya bahan bakar (BBM)
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya ingin pesan Avanza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: '#25d366' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white border border-white/20 transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  <Phone size={16} />
                  Telepon
                </a>
              </div>
            </div>

            {/* Right — Car Image */}
            <div className="relative h-56 sm:h-72 lg:h-full lg:min-h-[420px]">
              <Image
                src="/assets/img/car1.jpeg"
                alt="Toyota Avanza"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, #1a1a1a 0%, transparent 40%)',
                }}
              />

              {/* Floating price badge */}
              <div
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-xs text-gray-500 mb-0.5">Mulai dari</div>
                <div className="text-lg font-extrabold text-gray-900">Rp 300rb</div>
                <div className="text-xs" style={{ color: '#84cc16' }}>per hari</div>
              </div>
            </div>
          </div>
        </div>

        {/* Innova highlight */}
        <div className="mt-5 grid sm:grid-cols-2 gap-5">
          <div
            className="scroll-animate rounded-2xl p-6 flex items-center gap-5 border border-gray-100 bg-white hover:border-lime-400 transition-all hover:shadow-md"
          >
            <div className="relative w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden">
              <Image src="/assets/img/car2.jpeg" alt="Innova Reborn" fill sizes="112px" className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">Toyota Innova Reborn</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-8">
                  <span className="text-xs text-gray-500">Lepas Kunci</span>
                  <span className="text-xs font-bold text-gray-800">Rp 500.000/hari</span>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="text-xs text-gray-500">Dengan Driver</span>
                  <span className="text-xs font-bold" style={{ color: '#84cc16' }}>Rp 600.000/hari</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">* Di luar BBM</p>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className="scroll-animate rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)' }}
          >
            <div>
              <h4 className="font-extrabold text-white text-lg mb-2">
                Siap Berangkat?
              </h4>
              <p className="text-white/80 text-xs leading-relaxed">
                Hubungi kami sekarang untuk pemesanan dan konsultasi gratis. Tim kami siap melayani 24 jam.
              </p>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-white text-sm font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ color: '#65a30d' }}
            >
              <MessageCircle size={16} />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
