'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Clock, Tag, ChevronDown, Calendar } from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('lepas-kunci')
  const [formData, setFormData] = useState({
    lokasi: '',
    tanggal: '',
    waktu: '08',
    menit: '00',
    tujuan: '',
  })

  const tabs = [
    { id: 'lepas-kunci', label: 'Lepas Kunci' },
    { id: 'dengan-driver', label: 'Dengan Driver' },
    { id: 'flat-rate', label: 'Flat Rate' },
  ]

  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-[72px] lg:pt-[150px]"
      style={{
        background: 'linear-gradient(160deg, #f8fafc 0%, #f1f5f9 55%, #ecfccb 100%)',
      }}
    >
      {/* BG blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #84cc16 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #84cc16 0%, transparent 70%)' }} />

      {/* ===================== MOBILE LAYOUT (< lg) ===================== */}
      <div className="lg:hidden px-4 pt-6 pb-8 flex flex-col gap-5">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit animate-fade-up"
          style={{ background: '#ecfccb', color: '#3f6212' }}>
          Armada Siap Jemput Anda
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Sewa Mobil{' '}
          <span className="block" style={{ color: '#84cc16' }}>Mudah &amp; Terpercaya</span>
        </h1>

        {/* Car Image — full width, rounded */}
        <div className="relative w-full animate-fade-up" style={{ height: '200px', borderRadius: '18px', overflow: 'hidden', animationDelay: '0.15s' }}>
          <Image
            src="/assets/img/car1.jpeg"
            alt="Mobil Rental"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ borderRadius: '18px' }}
            priority
            loading="eager"
          />
          {/* overlay gradient bottom */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(236,252,203,0.5) 0%, transparent 60%)', borderRadius: '18px' }} />
          {/* floating badge on image */}
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
            <div className="text-xs text-gray-500">Mulai dari</div>
            <div className="text-base font-extrabold text-gray-900">Rp 300rb<span className="text-xs font-normal text-gray-400">/hari</span></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <a href="#armada"
            className="flex-1 text-center text-sm font-bold py-3 rounded-xl text-white"
            style={{ background: '#84cc16', boxShadow: '0 4px 12px rgba(132,204,22,0.35)' }}>
            Lihat Armada
          </a>
          <a href="#kontak"
            className="flex-1 text-center text-sm font-bold py-3 rounded-xl text-gray-700 bg-white border border-gray-200">
            Hubungi Kami
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {[
            { value: '500+', label: 'Pelanggan Puas' },
            { value: '10+', label: 'Armada' },
            { value: '5★', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label}
              className="bg-white/70 rounded-2xl p-3 text-center border border-white/80">
              <div className="text-xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Booking Form — in normal flow, NOT absolute */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-up"
          style={{ animationDelay: '0.3s' }} id="pesan">
          {/* Tabs */}
          <div className="flex">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-xs font-semibold transition-all ${activeTab === tab.id ? 'text-white' : 'text-gray-500 bg-gray-50'}`}
                style={activeTab === tab.id ? { background: '#84cc16' } : {}}>
                {tab.label}
              </button>
            ))}
          </div>
          {/* Form fields */}
          <div className="p-4 space-y-2.5">
            <div className="relative">
              <MapPin size={13} className="absolute left-3 top-3.5 text-gray-400" />
              <input type="text" placeholder="Lokasi Penjemputan"
                value={formData.lokasi}
                onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                className="w-full pl-8 pr-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-lime-500 transition" />
            </div>
            {activeTab === 'dengan-driver' && (
              <div className="relative">
                <MapPin size={13} className="absolute left-3 top-3.5 text-gray-400" />
                <input type="text" placeholder="Lokasi Tujuan"
                  value={formData.tujuan}
                  onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                  className="w-full pl-8 pr-3 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-lime-500 transition" />
              </div>
            )}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <Calendar size={13} className="absolute left-3 top-3.5 text-gray-400" />
                <input type="date"
                  value={formData.tanggal}
                  onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                  className="w-full pl-8 pr-2 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-lime-500 transition" />
              </div>
              <div className="relative">
                <Tag size={13} className="absolute left-3 top-3.5 text-gray-400" />
                <select className="w-full pl-8 pr-2 py-2.5 text-xs border border-gray-200 rounded-xl bg-gray-50 appearance-none focus:outline-none focus:border-lime-500">
                  <option>Pilih Mobil</option>
                  <option>Avanza - Rp 300rb</option>
                  <option>Innova - Rp 500rb</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 text-xs font-bold text-white rounded-xl transition-all hover:brightness-95"
              style={{ background: '#84cc16' }}>
              Cari Armada Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* ===================== DESKTOP LAYOUT (>= lg) ===================== */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-0">
          <div className="grid lg:grid-cols-2 gap-0 items-start" style={{ minHeight: 'calc(100vh - 72px)' }}>

            {/* LEFT — Text */}
            <div className="flex flex-col justify-center py-16 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5 w-fit animate-fade-up"
                style={{ background: '#ecfccb', color: '#3f6212' }}>
                Armada Siap Jemput Anda
              </div>

              <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight mb-5 animate-fade-up"
                style={{ animationDelay: '0.1s' }}>
                Sewa Mobil{' '}
                <span className="block" style={{ color: '#84cc16' }}>Mudah &amp; Terpercaya</span>
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md animate-fade-up"
                style={{ animationDelay: '0.2s' }}>
                Kami menyediakan layanan sewa mobil profesional dengan berbagai
                pilihan armada. Lepas kunci atau dengan driver berpengalaman.
              </p>

              <div className="flex gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <a href="#armada"
                  className="text-sm font-bold py-3.5 px-7 rounded-xl text-white transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: '#84cc16', boxShadow: '0 4px 15px rgba(132,204,22,0.3)' }}>
                  Lihat Armada
                </a>
                <a href="#kontak"
                  className="text-sm font-bold py-3.5 px-7 rounded-xl text-gray-700 bg-white border border-gray-200 transition-all hover:-translate-y-1 hover:shadow-md">
                  Hubungi Kami
                </a>
              </div>

              <div className="flex gap-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { value: '500+', label: 'Pelanggan Puas' },
                  { value: '10+', label: 'Armada Tersedia' },
                  { value: '5★', label: 'Rating Layanan' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Image stacked above Form */}
            <div className="flex flex-col py-8 gap-0">
              {/* Car Image */}
              <div className="relative w-full animate-slide-right z-10"
                style={{ animationDelay: '0.2s', borderRadius: '20px', overflow: 'hidden', height: '330px' }}>
                <Image
                  src="/assets/img/car1.jpeg"
                  alt="Mobil Rental"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ borderRadius: '20px' }}
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(241,245,249,0.55) 0%, transparent 50%)', borderRadius: '20px' }} />
              </div>

              {/* Booking Form — slight overlap */}
              <div className="bg-white rounded-2xl shadow-2xl animate-fade-up"
                style={{
                  border: '1px solid #f0f0f0',
                  marginTop: '-20px',
                  position: 'relative',
                  zIndex: 20,
                  animationDelay: '0.5s',
                }}
                id="pesan">
                {/* Tabs */}
                <div className="flex rounded-t-2xl overflow-hidden">
                  {tabs.map((tab) => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 text-xs font-semibold transition-all duration-200 ${
                        activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-700 bg-gray-50'
                      }`}
                      style={activeTab === tab.id ? { background: '#84cc16' } : {}}>
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-4 space-y-3">
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="text" placeholder="Lokasi Penjemputan"
                      value={formData.lokasi}
                      onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:bg-white transition" />
                  </div>

                  {activeTab === 'dengan-driver' && (
                    <div className="relative">
                      <MapPin size={14} className="absolute left-3 top-3.5 text-gray-400" />
                      <input type="text" placeholder="Lokasi Tujuan"
                        value={formData.tujuan}
                        onChange={(e) => setFormData({ ...formData, tujuan: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-lime-500 focus:bg-white transition" />
                    </div>
                  )}

                  <div className="relative">
                    <Tag size={14} className="absolute left-3 top-3.5 text-gray-400" />
                    <select className="w-full pl-9 pr-8 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-500 focus:outline-none focus:border-lime-500 appearance-none transition">
                      <option>Pilih Jenis Mobil</option>
                      <option>Avanza - Rp 300.000/hari</option>
                      <option>Innova Reborn - Rp 500.000/hari</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <Calendar size={14} className="absolute left-3 top-3.5 text-gray-400" />
                    <input type="date"
                      value={formData.tanggal}
                      onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-500 focus:outline-none focus:border-lime-500 transition" />
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Clock size={14} className="absolute left-3 top-3.5 text-gray-400" />
                      <select className="w-full pl-9 pr-2 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-500 focus:outline-none focus:border-lime-500 appearance-none transition">
                        {Array.from({ length: 24 }, (_, i) => (
                          <option key={i} value={String(i).padStart(2, '0')}>{String(i).padStart(2, '0')}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1 relative">
                      <select className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-lg bg-gray-50 text-gray-500 focus:outline-none focus:border-lime-500 appearance-none transition">
                        <option>00</option>
                        <option>30</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-full py-3 text-xs font-bold text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: '#84cc16' }}>
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}