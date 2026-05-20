'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Users, Luggage, ChevronLeft, ChevronRight, Fuel, Star } from 'lucide-react'

const fleetData = [
  {
    id: 1,
    name: 'Toyota Avanza',
    category: 'bisnis',
    image: '/assets/img/car1.jpeg',
    passengers: 7,
    luggage: 2,
    hargaLepasKunci: 300000,
    hargaDriver: 400000,
    rating: 4.8,
    bbm: 'Di luar BBM',
    features: ['AC Dingin', 'Musik', 'GPS'],
  },
  {
    id: 2,
    name: 'Toyota Innova Reborn',
    category: 'luxury',
    image: '/assets/img/car2.jpeg',
    passengers: 7,
    luggage: 4,
    hargaLepasKunci: 500000,
    hargaDriver: 600000,
    rating: 4.9,
    bbm: 'Di luar BBM',
    features: ['AC Premium', 'Kursi Nyaman', 'GPS'],
  },
  {
    id: 3,
    name: 'Toyota Veloz',
    category: 'bisnis',
    image: '/assets/img/car3.jpeg',
    passengers: 7,
    luggage: 3,
    hargaLepasKunci: 350000,
    hargaDriver: 450000,
    rating: 4.7,
    bbm: 'Di luar BBM',
    features: ['AC Dingin', 'USB Charger', 'Luas'],
  },
  {
    id: 4,
    name: 'Mitsubishi Xpander',
    category: 'crossover',
    image: '/assets/img/car4.jpeg',
    passengers: 7,
    luggage: 3,
    hargaLepasKunci: 400000,
    hargaDriver: 500000,
    rating: 4.8,
    bbm: 'Di luar BBM',
    features: ['Modern', 'Luas', 'Sporty'],
  },
  {
    id: 5,
    name: 'Honda BR-V',
    category: 'crossover',
    image: '/assets/img/car5.jpeg',
    passengers: 7,
    luggage: 3,
    hargaLepasKunci: 380000,
    hargaDriver: 480000,
    rating: 4.7,
    bbm: 'Di luar BBM',
    features: ['Irit BBM', 'AC Dingin', 'GPS'],
  },
  {
    id: 6,
    name: 'Toyota Fortuner',
    category: 'luxury',
    image: '/assets/img/car6.jpeg',
    passengers: 7,
    luggage: 4,
    hargaLepasKunci: 700000,
    hargaDriver: 850000,
    rating: 5.0,
    bbm: 'Di luar BBM',
    features: ['Mewah', 'Kuat', '4WD'],
  },
]

const filterTabs = [
  { id: 'semua', label: 'Semua' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'bisnis', label: 'Bisnis' },
  { id: 'crossover', label: 'Crossover' },
]

function formatRupiah(num: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(num)
}

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState('semua')
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const filtered = activeFilter === 'semua'
    ? fleetData
    : fleetData.filter((c) => c.category === activeFilter)

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3
  const maxIndex = Math.max(0, filtered.length - visibleCount)

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1))
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1))

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="armada"
      ref={sectionRef}
      className="section-py"
      style={{ background: '#f8fafc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="scroll-animate">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#84cc16' }}>
              — Pilihan Kendaraan
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Armada Kami</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs scroll-animate">
            Kami menyediakan armada lengkap mulai dari MPV, SUV, hingga kendaraan mewah untuk berbagai kebutuhan Anda.
          </p>
        </div>

        {/* Filter Tabs + Navigation */}
        <div className="flex items-center justify-between mb-7 scroll-animate">
          <div className="flex items-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'text-white shadow-md'
                    : 'text-gray-600 bg-white border border-gray-200 hover:border-gray-300'
                }`}
                style={activeFilter === tab.id ? { background: '#84cc16' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:border-gray-400 disabled:opacity-40 disabled:cursor-not-allowed bg-white"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: '#84cc16' }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Cards — desktop sliding */}
        <div className="hidden sm:block overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 20 / 3}px))` }}
          >
            {filtered.map((car, i) => (
              <FleetCard key={car.id} car={car} index={i} />
            ))}
          </div>
        </div>

        {/* Cards — mobile single */}
        <div className="sm:hidden">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 16}px))` }}
            >
              {filtered.map((car, i) => (
                <div key={car.id} className="min-w-full">
                  <FleetCard car={car} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{
                  background: currentIndex === i ? '#84cc16' : '#d1d5db',
                  width: currentIndex === i ? 24 : 8,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FleetCard({ car, index }: { car: typeof fleetData[0]; index: number }) {
  return (
    <div
      className="fleet-card scroll-animate flex-shrink-0 w-full sm:w-[calc(33.333%-14px)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-44 bg-gray-50 overflow-hidden">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Rating badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-white shadow-sm"
        >
          <Star size={10} fill="#f59e0b" stroke="none" />
          <span className="text-gray-800">{car.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1">{car.name}</h3>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4 text-gray-500">
          <span className="flex items-center gap-1 text-xs">
            <Users size={12} />
            {car.passengers}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Luggage size={12} />
            {car.luggage}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Fuel size={12} />
            Di luar BBM
          </span>
        </div>

        {/* Prices */}
        <div className="border-t border-gray-100 pt-3 mb-4 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Lepas Kunci</span>
            <span className="text-sm font-bold text-gray-900">
              {formatRupiah(car.hargaLepasKunci)}
              <span className="text-xs font-normal text-gray-400">/hari</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Dengan Driver</span>
            <span className="text-sm font-bold" style={{ color: '#84cc16' }}>
              {formatRupiah(car.hargaDriver)}
              <span className="text-xs font-normal text-gray-400">/hari</span>
            </span>
          </div>
        </div>

        <button
          className="w-full py-2.5 text-xs font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          style={{ background: '#84cc16' }}
        >
          Pesan Sekarang
        </button>
      </div>
    </div>
  )
}
