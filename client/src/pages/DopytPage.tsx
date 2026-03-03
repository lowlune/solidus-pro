/* ============================================================
   SOLIDUS PRO – Dopyt (Request Form) Page
   Style: Industrial Minimalism
   E-shop-style request form instead of checkout
   ============================================================ */
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const productOptions = [
  "Okná ALPHALINE 90 MD",
  "Okná SOFTLINE 70 MD",
  "Dvere SOFTLINE 70",
  "Posuvné dvere VEKASLIDE",
  "GFK Entry – Lepené dverné výplne",
  "Sekčné garážové brány",
  "Parapety",
  "Žalúzie",
  "Siete proti hmyzu",
  "Iné / Konzultácia",
];

export default function DopytPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    meno: "",
    email: "",
    telefon: "",
    produkt: "",
    sirka: "",
    vyska: "",
    pocet: "",
    sprava: "",
    montaz: false,
    zameranie: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.meno || !form.email || !form.produkt) {
      toast.error("Prosím vyplte všetky povinné polia.");
      return;
    }
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center py-32">
          <div className="text-center max-w-md px-4">
            <div className="w-20 h-20 bg-[#e77719]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-[#e77719]" />
            </div>
            <h2 className="font-['Archivo'] font-800 text-[#2f2a24] text-4xl mb-4">
              Dopyt odoslaný!
            </h2>
            <p className="font-['Public_Sans'] text-gray-500 leading-relaxed mb-8">
              Ďakujeme za váš záujem. Váš dopyt sme prijali a budeme vás kontaktovať 
              do 24 hodín v pracovné dni na emailovej adrese <strong>{form.email}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-orange"
            >
              Odoslať ďalší dopyt
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-[#2f2a24] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <span className="section-label block mb-3">Nezáväzná ponuka</span>
          <h1 className="font-['Archivo'] font-800 text-white text-5xl lg:text-6xl mb-4">
            Poslať dopyt
          </h1>
          <p className="font-['Public_Sans'] text-white/60 text-base max-w-xl">
            Vyplte formulár a my vám do 24 hodín pošleme nezáväznú cenovú ponuku. 
            Pri väčšom množstve poskytujeme množstevné zľavy.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[#f6f2eb] flex-1">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8">
                <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-2xl mb-6 uppercase tracking-wide">
                  Formulár dopytu
                </h2>

                {/* Personal info */}
                <div className="mb-8">
                  <h3 className="font-['Archivo'] font-600 text-[#e77719] text-sm uppercase tracking-widest mb-4">
                    Kontaktné údaje
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Meno a priezvisko <span className="text-[#e77719]">*</span>
                      </label>
                      <input
                        type="text"
                        name="meno"
                        value={form.meno}
                        onChange={handleChange}
                        required
                        placeholder="Ján Novák"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Email <span className="text-[#e77719]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jan.novak@email.sk"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Telefón
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={form.telefon}
                        onChange={handleChange}
                        placeholder="+421 9XX XXX XXX"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Product selection */}
                <div className="mb-8">
                  <h3 className="font-['Archivo'] font-600 text-[#e77719] text-sm uppercase tracking-widest mb-4">
                    Výber produktu
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Typ produktu <span className="text-[#e77719]">*</span>
                      </label>
                      <select
                        name="produkt"
                        value={form.produkt}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors bg-white"
                      >
                        <option value="">-- Vyberte produkt --</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Šírka (mm)
                      </label>
                      <input
                        type="number"
                        name="sirka"
                        value={form.sirka}
                        onChange={handleChange}
                        placeholder="napr. 1200"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Výška (mm)
                      </label>
                      <input
                        type="number"
                        name="vyska"
                        value={form.vyska}
                        onChange={handleChange}
                        placeholder="napr. 1400"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Public_Sans'] text-gray-600 text-sm font-600 mb-1.5">
                        Počet kusov
                      </label>
                      <input
                        type="number"
                        name="pocet"
                        value={form.pocet}
                        onChange={handleChange}
                        placeholder="napr. 5"
                        min="1"
                        className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-8">
                  <h3 className="font-['Archivo'] font-600 text-[#e77719] text-sm uppercase tracking-widest mb-4">
                    Doplnkové služby
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="montaz"
                        checked={form.montaz}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#e77719]"
                      />
                      <span className="font-['Public_Sans'] text-gray-600 text-sm group-hover:text-[#2f2a24] transition-colors">
                        Záujem o montáž
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="zameranie"
                        checked={form.zameranie}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#e77719]"
                      />
                      <span className="font-['Public_Sans'] text-gray-600 text-sm group-hover:text-[#2f2a24] transition-colors">
                        Záujem o zameranie
                      </span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <h3 className="font-['Archivo'] font-600 text-[#e77719] text-sm uppercase tracking-widest mb-4">
                    Správa
                  </h3>
                  <textarea
                    name="sprava"
                    value={form.sprava}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Popíšte vaše požiadavky, typ objektu (rodinný dom, bytový dom...), farbu, špeciálne požiadavky..."
                    className="w-full border border-gray-200 px-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-orange w-full flex items-center justify-center gap-2 text-base py-4"
                >
                  <Send size={18} />
                  Odoslať dopyt
                </button>

                <p className="font-['Public_Sans'] text-gray-400 text-xs mt-4 text-center">
                  * Povinné polia. Vaše údaje nebudú zdieľané s tretími stranami.
                </p>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="bg-[#2f2a24] p-6">
                <h3 className="font-['Archivo'] font-700 text-white text-xl mb-4">
                  Prečo poslať dopyt?
                </h3>
                {[
                  "Nezáväzná cenová ponuka zadarmo",
                  "Odpoveď do 24 hodín v pracovné dni",
                  "Množstevné zľavy pri väčšom odbere",
                  "Zľavy na doplnky (parapety, žalúzie, siete)",
                  "Profesionálna konzultácia",
                  "Zameranie u zákazníka",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-3">
                    <CheckCircle size={14} className="text-[#e77719] mt-0.5 shrink-0" />
                    <span className="font-['Public_Sans'] text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#e77719] p-6">
                <h3 className="font-['Archivo'] font-700 text-white text-xl mb-3">
                  Radšej zavolajte
                </h3>
                <a href="tel:+421415241054" className="font-['Archivo'] font-800 text-white text-2xl block hover:text-white/80 transition-colors">
                  +421 41 / 524 10 54
                </a>
                <p className="font-['Public_Sans'] text-white/80 text-sm mt-2">
                  Po – Pi: 8:00 – 17:00
                </p>
              </div>

              <div className="bg-[#f6f2eb] p-6 border border-gray-100">
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-lg mb-3">
                  Typy kalkulácií
                </h3>
                {[
                  "1-krídlové okno",
                  "Balkónové okno",
                  "2-krídlové okno",
                  "3-krídlové okno",
                  "Vchodové dvere",
                  "Posuvné dvere",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0">
                    <span className="w-1.5 h-1.5 bg-[#e77719] rounded-full shrink-0" />
                    <span className="font-['Public_Sans'] text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


