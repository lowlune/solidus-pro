/* ============================================================
   SOLIDUS PRO – Kontakt Page
   Style: Industrial Minimalism
   ============================================================ */
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-[#2f2a24] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <span className="section-label block mb-3">Kde nás nájdete</span>
          <h1 className="font-['Archivo'] font-800 text-white text-5xl lg:text-6xl mb-4">
            Kontakt
          </h1>
          <p className="font-['Public_Sans'] text-white/60 text-base max-w-xl">
            Sme tu pre vás. Kontaktujte nás telefonicky, emailom alebo navštívte nás osobne.
          </p>
        </div>
      </div>

      {/* Contact info */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f6f2eb] p-8">
              <div className="w-12 h-12 bg-[#e77719] flex items-center justify-center mb-5">
                <MapPin size={22} className="text-white" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Adresa</h3>
              <p className="font-['Public_Sans'] text-gray-600 text-sm leading-relaxed">
                <strong>Solidus PRO, spol. s r.o.</strong><br />
                Staškov 165<br />
                023 53 Staškov<br />
                Slovensko
              </p>
            </div>

            <div className="bg-[#f6f2eb] p-8">
              <div className="w-12 h-12 bg-[#e77719] flex items-center justify-center mb-5">
                <Phone size={22} className="text-white" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Telefón / Fax</h3>
              <a href="tel:+421415241054" className="font-['Public_Sans'] text-gray-600 text-sm hover:text-[#e77719] transition-colors block mb-1">
                +421 41 / 524 10 54
              </a>
              <p className="font-['Public_Sans'] text-gray-400 text-xs">Fax: +421 41 / 524 10 54</p>
              <div className="mt-4 flex items-center gap-2">
                <Clock size={14} className="text-[#e77719]" />
                <span className="font-['Public_Sans'] text-gray-400 text-xs">Po – Pi: 8:00 – 17:00</span>
              </div>
            </div>

            <div className="bg-[#f6f2eb] p-8">
              <div className="w-12 h-12 bg-[#e77719] flex items-center justify-center mb-5">
                <Mail size={22} className="text-white" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Email</h3>
              <a href="mailto:madam@madam.sk" className="font-['Public_Sans'] text-gray-600 text-sm hover:text-[#e77719] transition-colors block">
                madam@madam.sk
              </a>
              <p className="font-['Public_Sans'] text-gray-400 text-xs mt-2">
                Odpovieme do 24 hodín v pracovné dni
              </p>
            </div>
          </div>

          {/* Company details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#2f2a24] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building size={20} className="text-[#e77719]" />
                <h3 className="font-['Archivo'] font-700 text-white text-xl">
                  Fakturačné údaje
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Obchodné meno", value: "Solidus PRO, spol. s r.o." },
                  { label: "IČO", value: "36522821" },
                  { label: "DIČ", value: "2021172026" },
                  { label: "IČ DPH", value: "SK2021172026" },
                  { label: "Banka", value: "ČSOB, a.s." },
                  { label: "IBAN", value: "SK75 7500 0000 0000 0444 1881" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-['Public_Sans'] text-white/50 text-sm">{item.label}</span>
                    <span className="font-['Public_Sans'] text-white text-sm font-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f6f2eb] p-8">
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-6">
                Prevádzkové hodiny
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Pondelok", hours: "8:00 – 17:00" },
                  { day: "Utorok", hours: "8:00 – 17:00" },
                  { day: "Streda", hours: "8:00 – 17:00" },
                  { day: "Štvrtok", hours: "8:00 – 17:00" },
                  { day: "Piatok", hours: "8:00 – 17:00" },
                  { day: "Sobota", hours: "Zatvorené" },
                  { day: "Nedeľa", hours: "Zatvorené" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-['Public_Sans'] text-gray-500 text-sm">{item.day}</span>
                    <span className={`font-['Public_Sans'] text-sm font-600 ${item.hours === "Zatvorené" ? "text-gray-400" : "text-[#2f2a24]"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#f6f2eb] py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="bg-[#2f2a24]/5 border border-gray-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-[#e77719] mx-auto mb-3" />
              <p className="font-['Archivo'] font-600 text-[#2f2a24] text-lg">Staškov 165, 023 53 Staškov</p>
              <a
                href="https://maps.google.com/?q=Staškov+165,+023+53+Staškov,+Slovensko"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['Public_Sans'] text-[#e77719] text-sm hover:underline mt-2 block"
              >
                Otvoriť v Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


