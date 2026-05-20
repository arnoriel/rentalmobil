'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Transfer Bandara',
    description:
      'Layanan jemput dan antar bandara dengan waktu tunggu tambahan dan pemantauan penerbangan. Kami memastikan setiap perjalanan bandara menjadi lebih mudah.',
    image: '/assets/img/car2.jpeg',
    tag: 'Populer',
  },
  {
    title: 'Perjalanan Antarkota',
    description:
      'Solusi perjalanan nyaman untuk bepergian antar kota dengan pengemudi berpengalaman di seluruh Indonesia.',
    image: '/assets/img/car3.jpeg',
    tag: 'Tersedia',
  },
  {
    title: 'Acara Pernikahan',
    description:
      'Layanan ramah dan penuh perhatian dikombinasikan dengan ketepatan detail. Biarkan hari spesial Anda benar-benar terasa istimewa.',
    image: '/assets/img/car4.jpeg',
    tag: 'Spesial',
  },
  {
    title: 'Perjalanan Bisnis',
    description:
      'Fokus pada rapat Anda, serahkan urusan transportasi kepada kami. Armada premium untuk kesan profesional.',
    image: '/assets/img/car5.jpeg',
    tag: 'Eksklusif',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-animate').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, i * 120)
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
      id="layanan"
      ref={sectionRef}
      className="section-py bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="scroll-animate">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#84cc16' }}>
              — Apa yang Kami Tawarkan
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Layanan Kami</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs scroll-animate" style={{ animationDelay: '0.1s' }}>
            Kami mengundang Anda untuk mencoba layanan kami dan menjamin kepuasan penuh dalam setiap perjalanan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card scroll-animate flex flex-col sm:flex-row overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative w-full sm:w-40 md:w-48 flex-shrink-0 h-36 sm:h-auto overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />
                {/* Tag */}
                <span
                  className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold rounded-full text-white"
                  style={{ background: '#84cc16' }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                </div>
                <button
                  className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-colors group/btn w-fit"
                  style={{ color: '#84cc16' }}
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
