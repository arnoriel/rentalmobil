'use client'

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  layanan: [
    'Transfer Bandara',
    'Perjalanan Antarkota',
    'Acara Pernikahan',
    'Perjalanan Bisnis',
    'Sewa Harian',
  ],
  armada: [
    'Toyota Avanza',
    'Toyota Innova Reborn',
    'Toyota Veloz',
    'Mitsubishi Xpander',
    'Toyota Fortuner',
  ],
  kotaLayanan: [
    'Jakarta',
    'Bandung',
    'Surabaya',
    'Yogyakarta',
    'Bali',
    'Semarang',
  ],
}

export default function Footer() {
  return (
    <footer
      id="kontak"
      style={{ background: '#111111' }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-extrabold" style={{ color: '#84cc16' }}>Rental</span>
              <span className="text-2xl font-extrabold text-white">Mobil</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Layanan sewa mobil profesional dengan berbagai pilihan armada terbaik. Kami hadir untuk kebutuhan transportasi Anda.
            </p>

            {/* Newsletter */}
            <p className="text-xs font-semibold text-gray-300 mb-3">Berlangganan info promo</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-3 py-2.5 text-xs bg-gray-800 text-gray-300 border border-gray-700 rounded-l-lg focus:outline-none focus:border-lime-500 placeholder-gray-600"
              />
              <button
                className="px-4 py-2.5 text-xs font-bold text-white rounded-r-lg transition-all hover:brightness-90"
                style={{ background: '#84cc16' }}
              >
                →
              </button>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Layanan</h4>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors hover:pl-1 inline-block"
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Armada */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Armada</h4>
            <ul className="space-y-2.5">
              {footerLinks.armada.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-white transition-colors hover:pl-1 inline-block"
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={13} className="text-lime-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+6281246405504" className="text-xs text-gray-400 hover:text-white transition-colors block">
                    0812-4640-5504
                  </a>
                  <span className="text-xs text-gray-600">Telepon / WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={13} className="text-lime-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@rentalmobil.id" className="text-xs text-gray-400 hover:text-white transition-colors">
                  info@rentalmobil.id
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-lime-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-400 leading-relaxed">
                  Jl. Raya Utama No. 123,<br />Jakarta Selatan, 12345
                </span>
              </li>
            </ul>

            {/* Kota Layanan */}
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mt-6 mb-3">Kota Layanan</h4>
            <div className="flex flex-wrap gap-1.5">
              {footerLinks.kotaLayanan.map((kota) => (
                <span
                  key={kota}
                  className="px-2 py-0.5 text-xs text-gray-400 border border-gray-700 rounded-full hover:border-lime-500 hover:text-white transition-colors cursor-pointer"
                >
                  {kota}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              © 2025 RentalMobil. Semua hak dilindungi.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Bantuan</a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-lime-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
