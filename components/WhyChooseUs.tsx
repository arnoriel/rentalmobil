'use client'

import { useEffect, useRef } from 'react'
import { Smartphone, UserCheck, Car, CreditCard } from 'lucide-react'

const reasons = [
  {
    icon: Smartphone,
    title: 'Pemesanan Mudah',
    description:
      'Proses pemesanan yang simpel dan cepat. Cukup hubungi kami via WhatsApp atau telepon, armada siap dalam hitungan menit.',
    color: 'green',
  },
  {
    icon: UserCheck,
    title: 'Driver Profesional',
    description:
      'Pengemudi kami berpengalaman, ramah, dan memahami rute. Perjalanan Anda aman dan nyaman bersama kami.',
    color: 'dark',
  },
  {
    icon: Car,
    title: 'Beragam Pilihan Armada',
    description:
      'Dari MPV keluarga hingga SUV premium. Tersedia berbagai merek dan tipe kendaraan sesuai kebutuhan Anda.',
    color: 'green',
  },
  {
    icon: CreditCard,
    title: 'Harga Transparan',
    description:
      'Tidak ada biaya tersembunyi. Harga sudah termasuk semua biaya kecuali BBM. Bayar sesuai kesepakatan.',
    color: 'dark',
  },
]

export default function WhyChooseUs() {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-py bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#84cc16' }}>
            — Keunggulan Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Kenapa Memilih Kami
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Di RentalMobil, kami bangga memberikan layanan terbaik dengan pelayanan pelanggan kelas pertama.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="scroll-animate flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: item.color === 'green' ? '#84cc16' : '#1a1a1a',
                  }}
                >
                  <Icon size={28} color="white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{item.title}</h3>

                {/* Desc */}
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
