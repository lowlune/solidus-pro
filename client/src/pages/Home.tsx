/* ============================================================
   SOLIDUS PRO – Home Page
   Style: Industrial Minimalism
   Sections: Hero Slider, Features, Products, About, Technology, CTA, Contact
   ============================================================ */
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Thermometer,
  Volume2,
  Wrench,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts, featuredProductIds } from "@/data/products";

// Hero slides data
const heroSlides = [
  {
    id: 1,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396970192/78CCnTbJFoBNahWcHfmjBh/hero-slide1-fvpCZYK5gR8c5AYpZJ8x47.webp",
    eyebrow: "Energetická úspora",
    title: "So Solidus PRO\nušetríte",
    subtitle: "Okná s energetickou triedou A – znížte náklady na kúrenie až o 40%",
    cta: { label: "Pozrieť produkty", href: "/produkty" },
    ctaSecondary: { label: "Poslať dopyt", href: "/dopyt" },
  },
  {
    id: 2,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396970192/78CCnTbJFoBNahWcHfmjBh/hero-slide2-CkRCUEVmXaX8nSx958DRLC.webp",
    eyebrow: "Kvalita na prvom mieste",
    title: "Keď okná,\ntak Solidus PRO",
    subtitle: "Prémiové plastové okná a dvere vyrobené s precíznosťou a odbornosťou od roku 2000",
    cta: { label: "Náš katalóg", href: "/produkty" },
    ctaSecondary: { label: "O nás", href: "/o-nas" },
  },
  {
    id: 3,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396970192/78CCnTbJFoBNahWcHfmjBh/hero-slide3-LfCPuNt7yXeLYcodgHHP74.webp",
    eyebrow: "Záruka spokojnosti",
    title: "5-ročná záruka\nna výrobu a montáž",
    subtitle: "Na všetky nami vyrobené a montované prvky poskytujeme 5-ročnú záruku",
    cta: { label: "Zistiť viac", href: "/o-nas" },
    ctaSecondary: { label: "Kontaktujte nás", href: "/kontakt" },
  },
];

const featuredProducts = featuredProductIds
  .map((id) => allProducts.find((product) => product.id === id))
  .filter((product): product is (typeof allProducts)[number] => Boolean(product));

// Features
const features = [
  { icon: Thermometer, title: "Tepelná izolácia", desc: "Energetická trieda A – znížte náklady na vykurovanie" },
  { icon: Volume2, title: "Zvuková izolácia", desc: "Optimálna protihluková ochrana pre váš komfort" },
  { icon: Shield, title: "Ochrana proti vlámaniu", desc: "Bezpečnostné kovanie MACO Multi Matic" },
  { icon: Wrench, title: "Minimálna údržba", desc: "Homogénne povrchy, jednoduché čistenie" },
  { icon: Award, title: "Certifikát VEKA AG", desc: "Potvrdenie najvyššej kvality výrobkov" },
  { icon: CheckCircle, title: "5-ročná záruka", desc: "Na všetky vyrobené a montované prvky" },
];

// Stats
const stats = [
  { value: "25+", label: "rokov skúseností" },
  { value: "5 000+", label: "spokojných zákazníkov" },
  { value: "5", label: "rokov záruky" },
  { value: "100%", label: "slovenská výroba" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % heroSlides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 6000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── HERO SLIDER ── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div
              className={`absolute inset-0 ${
                slide.id === 1
                  ? "bg-gradient-to-r from-[#2f2a24]/86 via-[#2f2a24]/66 to-[#2f2a24]/35"
                  : "bg-gradient-to-r from-[#2f2a24]/85 via-[#2f2a24]/60 to-[#2f2a24]/20"
              }`}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-[1280px] mx-auto px-4 lg:px-8 w-full">
                <div className={slide.id === 1 ? "grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]" : "max-w-2xl"}>
                  <div className="max-w-2xl">
                    <span className="section-label text-[#e77719] mb-4 block">
                      {slide.eyebrow}
                    </span>
                    <h1
                      className="font-['Archivo'] font-800 leading-none mb-6 text-white"
                      style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", whiteSpace: "pre-line" }}
                    >
                      {slide.title}
                    </h1>
                    <p className="font-['Public_Sans'] text-lg mb-8 max-w-xl leading-relaxed text-white/80">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href={slide.cta.href}>
                        <button className="btn-orange text-sm px-7 py-3.5 flex items-center gap-2">
                          {slide.cta.label}
                          <ArrowRight size={16} />
                        </button>
                      </Link>
                      <Link href={slide.ctaSecondary.href}>
                        <button className="font-['Archivo'] font-600 text-sm uppercase tracking-wide px-7 py-3.5 transition-colors border border-white/50 text-white hover:bg-white/10">
                          {slide.ctaSecondary.label}
                        </button>
                      </Link>
                    </div>
                  </div>
                  {slide.id === 1 && (
                    <div className="mx-auto hidden w-full max-w-[560px] md:block lg:mx-0 lg:justify-self-end">
                      <img
                        src="/imgs/prierez1.png"
                        alt="Prierez profilu okna Solidus PRO"
                        className="h-auto max-h-[520px] w-full object-contain drop-shadow-[0_24px_40px_rgba(43,37,31,0.20)]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider controls */}
        <button
          onClick={() => { prevSlide(); resetInterval(); }}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-[#e77719] border border-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Predchádzajúci"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { nextSlide(); resetInterval(); }}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-[#e77719] border border-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Nasledujúci"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => { goToSlide(index); resetInterval(); }}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 h-2 bg-[#e77719]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-8 lg:right-12 z-20 font-['Archivo'] text-white/50 text-sm">
          <span className="text-white font-700">{String(currentSlide + 1).padStart(2, "0")}</span>
          {" / "}
          {String(heroSlides.length).padStart(2, "0")}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#e77719] py-6">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/30">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:px-8">
                <div className="font-['Archivo'] font-800 text-white text-3xl lg:text-4xl leading-none">
                  {stat.value}
                </div>
                <div className="font-['Public_Sans'] text-white/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Prečo Solidus PRO</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Výhody našich produktov
            </h2>
            <span className="orange-line mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div key={feat.title} className="group flex gap-5 p-6 border border-gray-100 hover:border-[#e77719]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-[#e77719]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e77719] transition-colors">
                  <feat.icon size={22} className="text-[#e77719] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-lg mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="font-['Public_Sans'] text-gray-500 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="produkty" className="py-20 bg-[#f6f2eb]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-label block mb-3">Náš sortiment</span>
              <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
                Produktový katalóg
              </h2>
              <span className="orange-line mt-4" />
            </div>
            <Link href="/produkty">
              <button className="flex items-center gap-2 font-['Archivo'] font-600 text-sm uppercase tracking-wide text-[#e77719] hover:text-[#e77719] transition-colors">
                Zobraziť všetky produkty
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/produkty/${product.id}`}>
                <div className="product-card bg-white border border-gray-100 overflow-hidden cursor-pointer group">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#e77719] text-white font-['Archivo'] font-600 text-xs uppercase tracking-wide px-2.5 py-1">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-['Public_Sans'] text-[#e77719] text-xs font-600 uppercase tracking-wide mb-1">
                      {product.category === "okna" ? "Okná" : "Dvere"}
                    </p>
                    <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-1">
                      {product.name}
                    </h3>
                    <p className="font-['Public_Sans'] text-gray-400 text-xs mb-3">{product.tagline}</p>
                    <p className="font-['Public_Sans'] text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.specs.slice(0, 2).map((spec) => (
                        <span
                          key={`${product.id}-${spec.label}`}
                          className="bg-gray-50 text-gray-500 font-['Public_Sans'] text-xs px-2 py-1 border border-gray-100"
                        >
                          {spec.value}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-[#2f2a24] text-white font-['Archivo'] font-600 text-sm uppercase tracking-wide py-2.5 hover:bg-[#e77719] transition-colors">
                      Zobraziť detail
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="py-20 bg-[#2f2a24]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-3">O spoločnosti</span>
              <h2 className="font-['Archivo'] font-700 text-white text-4xl lg:text-5xl mb-6">
                Výrobca okien<br />od roku 2000
              </h2>
              <span className="orange-line mb-6" />
              <p className="font-['Public_Sans'] text-white/70 leading-relaxed mb-5">
                Firma Solidus PRO, spol. s r.o. vznikla v roku 2000 a jej hlavnou činnosťou bolo vyrábať plastové okná. 
                Postupne, ako firma profesionálne rástla, začala ponúkať zákazníkom komplexné služby spojené s dodávkou svojich výrobkov.
              </p>
              <p className="font-['Public_Sans'] text-white/70 leading-relaxed mb-8">
                <strong className="text-white">Základná filozofia:</strong> Ponúknuť konkrétnemu zákazníkovi výrobok vysokej kvality 
                za primeranú cenu so servisom na najvyššej úrovni.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/o-nas">
                  <button className="btn-orange text-sm px-6 py-3">
                    Viac o nás
                  </button>
                </Link>
                <Link href="/dopyt">
                  <button className="border border-white/30 text-white font-['Archivo'] font-600 text-sm uppercase tracking-wide px-6 py-3 hover:bg-white/10 transition-colors">
                    Poslať dopyt
                  </button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Certifikát VEKA AG", desc: "Potvrdenie najvyššej kvality výrobkov" },
                { title: "Skúšoba Lignotesting", desc: "Akreditované protokoly o skúškach" },
                { title: "Kovanie MACO", desc: "Bezpečnostné a skryté kovanie" },
                { title: "Montáž na kľúč", desc: "Profesionálna montáž s 5-ročnou zárukou" },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 p-5">
                  <div className="w-2 h-2 bg-[#e77719] mb-3" />
                  <h4 className="font-['Archivo'] font-700 text-white text-base mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-['Public_Sans'] text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STRIP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396970192/78CCnTbJFoBNahWcHfmjBh/hero-slide3-LfCPuNt7yXeLYcodgHHP74.webp"
                  alt="Technológia výroby"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#e77719] p-6 hidden lg:block">
                  <div className="font-['Archivo'] font-800 text-white text-3xl">CNC</div>
                  <div className="font-['Public_Sans'] text-white/80 text-xs mt-1">Výroba</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label block mb-3">Výrobný proces</span>
              <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl mb-6">
                Moderná technológia výroby
              </h2>
              <span className="orange-line mb-6" />
              <div className="space-y-4">
                {[
                  { step: "01", title: "CNC dvojhlavová píla", desc: "Presný nárez profilov podľa technickej dokumentácie" },
                  { step: "02", title: "CNC štvorhlavová zváračka", desc: "Zváranie s kontrolou správnosti rozmerov pred zvarením" },
                  { step: "03", title: "CNC začisťovacia fréza", desc: "Precízne začisťovanie rohov pre dokonalý výsledok" },
                  { step: "04", title: "Výstupná kontrola", desc: "Každé okno je preskúšané a nastavené v zasklievacej stolici" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 items-start">
                    <span className="font-['Archivo'] font-800 text-[#e77719] text-2xl leading-none w-10 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-['Archivo'] font-700 text-[#2f2a24] text-lg mb-0.5">
                        {item.title}
                      </h4>
                      <p className="font-['Public_Sans'] text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/technologia">
                <button className="mt-8 flex items-center gap-2 font-['Archivo'] font-600 text-sm uppercase tracking-wide text-[#e77719] hover:text-[#e77719] transition-colors">
                  Viac o technológii
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 bg-[#e77719]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-['Archivo'] font-800 text-white text-3xl lg:text-4xl mb-2">
                Máte záujem o naše produkty?
              </h2>
              <p className="font-['Public_Sans'] text-white/80 text-base">
                Pošlite nám nezáväzný dopyt a my vám pripravíme cenovú ponuku.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/dopyt">
                <button className="bg-white text-[#e77719] font-['Archivo'] font-700 text-sm uppercase tracking-wide px-8 py-3.5 hover:bg-[#2f2a24] hover:text-white transition-colors">
                  Poslať dopyt
                </button>
              </Link>
              <a href="tel:+421415241054">
                <button className="border-2 border-white text-white font-['Archivo'] font-700 text-sm uppercase tracking-wide px-8 py-3.5 hover:bg-white hover:text-[#e77719] transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  Zavolajte nám
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-20 bg-[#f6f2eb]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Kde nás nájdete</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Kontakt
            </h2>
            <span className="orange-line mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#e77719]/10 flex items-center justify-center mb-5">
                <MapPin size={22} className="text-[#e77719]" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Adresa</h3>
              <p className="font-['Public_Sans'] text-gray-500 text-sm leading-relaxed">
                Staškov 165<br />023 53 Staškov<br />Slovensko
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#e77719]/10 flex items-center justify-center mb-5">
                <Phone size={22} className="text-[#e77719]" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Telefón</h3>
              <a href="tel:+421415241054" className="font-['Public_Sans'] text-gray-500 text-sm hover:text-[#e77719] transition-colors block">
                +421 41 / 524 10 54
              </a>
              <p className="font-['Public_Sans'] text-gray-400 text-xs mt-2">Po – Pi: 8:00 – 17:00</p>
            </div>
            <div className="bg-white p-8 border border-gray-100">
              <div className="w-12 h-12 bg-[#e77719]/10 flex items-center justify-center mb-5">
                <Mail size={22} className="text-[#e77719]" />
              </div>
              <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-3">Email</h3>
              <a href="mailto:madam@madam.sk" className="font-['Public_Sans'] text-gray-500 text-sm hover:text-[#e77719] transition-colors block">
                madam@madam.sk
              </a>
              <Link href="/dopyt">
                <button className="mt-4 font-['Archivo'] font-600 text-xs uppercase tracking-wide text-[#e77719] hover:text-[#e77719] transition-colors flex items-center gap-1">
                  Poslať dopyt <ArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}




