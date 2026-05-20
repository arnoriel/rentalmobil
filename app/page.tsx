import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import WhyChooseUs from '@/components/WhyChooseUs'
import Promo from '@/components/Promo'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Promo />
      <Testimonials />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6281246405504?text=Halo, saya ingin pesan mobil"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full text-white text-sm font-semibold shadow-2xl transition-all hover:-translate-y-1 hover:shadow-3xl"
        style={{ background: '#25d366' }}
        aria-label="Chat WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.513 5.824L.057 24l6.353-1.469A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.876 9.876 0 01-5.032-1.375l-.361-.214-3.741.866.934-3.635-.235-.373A9.855 9.855 0 012.106 12C2.106 6.527 6.527 2.106 12 2.106S21.894 6.527 21.894 12 17.473 21.894 12 21.894z"/>
        </svg>
        <span className="hidden sm:inline">Chat Sekarang</span>
      </a>
    </main>
  )
}
