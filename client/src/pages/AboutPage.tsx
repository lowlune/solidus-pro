/* ============================================================
   SOLIDUS PRO – O nás Page
   Style: Industrial Minimalism
   ============================================================ */
import { Link } from "wouter";
import { Award, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-[#2f2a24] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <span className="section-label block mb-3">Kto sme</span>
          <h1 className="font-['Archivo'] font-800 text-white text-5xl lg:text-6xl mb-4">
            O spoločnosti
          </h1>
          <p className="font-['Public_Sans'] text-white/60 text-base max-w-xl">
            Solidus PRO, spol. s r.o. – výrobca kvalitných plastových okien a dverí od roku 2000.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label block mb-3">História firmy</span>
              <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl mb-4">
                Od roku 2000 s vami
              </h2>
              <span className="orange-line mb-6" />
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed mb-5">
                Firma vznikla v roku 2000 a jej hlavnou činnosťou bolo vyrábať plastové okná. 
                Postupne, ako firma profesionálne rástla a vyvíjala sa, začala ponúkať zákazníkom 
                komplexné služby, spojené s dodávkou svojich výrobkov.
              </p>
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed mb-8">
                Dnes sme komplexným dodávateľom oknových a dverných riešení so špičkovým servisom. 
                Naša základná filozofia zostáva nezmenená: ponúknuť konkrétnemu zákazníkovi výrobok 
                vysokej kvality za primeranú cenu so servisom na najvyššej úrovni.
              </p>

              <div className="bg-[#f6f2eb] border-l-4 border-[#e77719] p-6 mb-8">
                <p className="font-['Archivo'] font-600 text-[#2f2a24] text-xl italic">
                  "Ponúknuť konkrétnemu zákazníkovi výrobok vysokej kvality za primeranú cenu 
                  so servisom na najvyššej úrovni."
                </p>
                <p className="font-['Public_Sans'] text-gray-400 text-sm mt-2">— Základná filozofia Solidus PRO</p>
              </div>

              <Link href="/dopyt">
                <button className="btn-orange flex items-center gap-2">
                  Kontaktujte nás
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-[#2f2a24] p-8">
                <h3 className="font-['Archivo'] font-700 text-white text-2xl mb-5">
                  Prečo si nás zákazníci vyberajú
                </h3>
                {[
                  "Certifikát firmy VEKA AG – potvrdenie kvality",
                  "Protokoly o skúškach akreditovanej skúšobne Lignotesting a.s. Bratislava",
                  "Kovanie MACO Multi Matic a MACO Invisible",
                  "CNC výroba s najmodernejšou technológiou",
                  "Profesionálna montáž s 5-ročnou zárukou",
                  "Komplexné služby od zamerania po servis",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-3">
                    <CheckCircle size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                    <span className="font-['Public_Sans'] text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2000", label: "Rok vzniku" },
                  { value: "5 000+", label: "Zákazníkov" },
                  { value: "5 rokov", label: "Záruka" },
                  { value: "100%", label: "SK výroba" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f6f2eb] p-6 text-center">
                    <div className="font-['Archivo'] font-800 text-[#e77719] text-3xl">{stat.value}</div>
                    <div className="font-['Public_Sans'] text-gray-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#f6f2eb]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Kvalita overená</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Certifikáty a ocenenia
            </h2>
            <span className="orange-line mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Certifikát VEKA AG",
                desc: "Naše výrobky sú certifikované spoločnosťou VEKA AG, ktorá potvrdzuje vysokú úrove kvality našich výrobkov. VEKA AG je jedným z najväčších svetových výrobcov plastových profilov.",
              },
              {
                icon: CheckCircle,
                title: "Lignotesting a.s. Bratislava",
                desc: "Protokoly o skúškach akreditovanej skúšobne Lignotesting a.s. Bratislava. Skúšky podľa platných noriem a predpisov, pravidelné kontroly kvality výroby.",
              },
              {
                icon: Award,
                title: "Európske normy",
                desc: "Naše produkty spĺajú najprísnejšie kritériá kvality a sú v súlade s európskymi normami. Pravidelné kontroly zabezpečujú konzistentnú kvalitu každého výrobku.",
              },
            ].map((cert) => (
              <div key={cert.title} className="bg-white p-8 border border-gray-100">
                <div className="w-12 h-12 bg-[#e77719]/10 flex items-center justify-center mb-5">
                  <cert.icon size={22} className="text-[#e77719]" />
                </div>
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">
                  {cert.title}
                </h3>
                <p className="font-['Public_Sans'] text-gray-500 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Čo ponúkame</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Komplexné služby
            </h2>
            <span className="orange-line mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Zameranie a konzultácia", desc: "Navštívime vás a zmeráme okenné otvory. Poradíme s výberom vhodného riešenia." },
              { step: "02", title: "Cenová ponuka", desc: "Vypracujeme nezáväznú cenovú ponuku podľa vašich požiadaviek a rozmerov." },
              { step: "03", title: "Výroba na mieru", desc: "Každé okno a dvere vyrábame presne podľa vašich rozmerov a požiadaviek." },
              { step: "04", title: "Profesionálna montáž", desc: "Naši školení montéri zabezpečia správnu inštaláciu s 5-ročnou zárukou." },
              { step: "05", title: "Záručný servis", desc: "Poskytujeme záručný aj pozáručný servis. Sme tu pre vás aj po montáži." },
              { step: "06", title: "Doprava", desc: "Zabezpečíme dopravu na miesto realizácie na celom Slovensku." },
            ].map((service) => (
              <div key={service.step} className="p-6 border border-gray-100 hover:border-[#e77719]/30 hover:shadow-lg transition-all">
                <span className="font-['Archivo'] font-800 text-[#e77719] text-3xl block mb-3">
                  {service.step}
                </span>
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-2">
                  {service.title}
                </h3>
                <p className="font-['Public_Sans'] text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


