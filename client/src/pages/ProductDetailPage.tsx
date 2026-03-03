import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, BadgeCheck, CheckCircle2, Coins, Ruler } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsById } from "@/data/products";

const categoryLabels: Record<"okna" | "dvere" | "doplnky", string> = {
  okna: "Okná",
  dvere: "Dvere",
  doplnky: "Doplnky",
};

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>();
  const product = productsById[params.slug || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-40">
          <div className="text-center">
            <h1 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl mb-4">Produkt sa nenašiel.</h1>
            <Link href="/produkty">
              <button className="btn-orange">Späť na katalóg</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="bg-[#2f2a24] pt-36 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 font-['Public_Sans'] text-sm text-white/60">
            <Link href="/">
              <span className="hover:text-white transition-colors">Domov</span>
            </Link>
            <span>/</span>
            <Link href="/produkty">
              <span className="hover:text-white transition-colors">Produkty</span>
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 py-12 bg-[#f6f2eb]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[360px] lg:h-[500px] object-contain p-4 bg-white"
              />
              <span className="absolute top-4 left-4 rounded-md bg-[#e77719] px-3 py-1.5 text-sm font-['Archivo'] font-600 uppercase tracking-wide text-white">
                {product.badge}
              </span>
            </div>

            <div>
              <p className="font-['Archivo'] text-xs font-700 uppercase tracking-wide text-[#e77719] mb-2">
                {categoryLabels[product.category]}
              </p>
              <h1 className="font-['Archivo'] font-800 text-[#2f2a24] text-4xl lg:text-5xl mb-2">
                {product.name}
              </h1>
              <p className="font-['Public_Sans'] text-gray-500 text-sm mb-4">{product.tagline}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                  {product.energyClass ? `Trieda ${product.energyClass}` : "Doplnkový produkt"}
                </span>
                <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                  {product.profileDepthMm ? `${product.profileDepthMm} mm` : "Profil na mieru"}
                </span>
                <span className="rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                  {product.priceFromEur} – {product.priceToEur} EUR
                </span>
              </div>

              <span className="orange-line mb-6" />

              <p className="font-['Public_Sans'] text-gray-700 leading-relaxed mb-8">
                {product.longDescription}
              </p>

              <div className="mb-8">
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-lg mb-4 uppercase tracking-wide">
                  Hlavné vlastnosti
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                      <span className="font-['Public_Sans'] text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/dopyt">
                  <button className="btn-orange flex items-center gap-2">
                    Poslať dopyt
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <a href="tel:+421415241054">
                  <button className="border border-[#2f2a24] text-[#2f2a24] font-['Archivo'] font-600 text-sm uppercase tracking-wide px-6 py-3 hover:bg-[#2f2a24] hover:text-white transition-colors">
                    Zavolajte nám
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#fffdfa] to-[#f6f2eb] border-b border-[#e6ddcf] p-6">
              <h2 className="font-['Archivo'] font-800 text-[#2f2a24] text-2xl">
                Technické parametre
              </h2>
              <p className="font-['Public_Sans'] text-sm text-[#6c6258] mt-1">
                Detailná technická špecifikácia profilu pre porovnanie výkonu, izolácie a odolnosti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5 border-b border-gray-100 bg-[#fffdfa]">
              <div className="rounded-xl border border-[#e6ddcf] bg-white px-4 py-3">
                <div className="inline-flex items-center gap-2 font-['Archivo'] text-[11px] uppercase tracking-wide text-gray-500">
                  <BadgeCheck size={14} className="text-[#e77719]" />
                  Energetická trieda
                </div>
                <p className="font-['Archivo'] font-800 text-[#2f2a24] text-lg mt-1">{product.energyClass ?? "—"}</p>
              </div>
              <div className="rounded-xl border border-[#e6ddcf] bg-white px-4 py-3">
                <div className="inline-flex items-center gap-2 font-['Archivo'] text-[11px] uppercase tracking-wide text-gray-500">
                  <Ruler size={14} className="text-[#e77719]" />
                  Hĺbka profilu
                </div>
                <p className="font-['Archivo'] font-800 text-[#2f2a24] text-lg mt-1">
                  {product.profileDepthMm ? `${product.profileDepthMm} mm` : "Na mieru"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e6ddcf] bg-white px-4 py-3">
                <div className="inline-flex items-center gap-2 font-['Archivo'] text-[11px] uppercase tracking-wide text-gray-500">
                  <Coins size={14} className="text-[#e77719]" />
                  Cenové rozpätie
                </div>
                <p className="font-['Archivo'] font-800 text-[#2f2a24] text-lg mt-1">
                  {product.priceFromEur} – {product.priceToEur} EUR
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {product.specs.map((spec, index) => (
                <div
                  key={spec.label}
                  className={`border-b border-gray-100 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#fffdfa]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 px-5 py-4">
                    <span className="font-['Archivo'] text-[11px] uppercase tracking-wide text-gray-500">
                      {spec.label}
                    </span>
                    <span className="font-['Public_Sans'] text-sm font-700 text-[#2f2a24] text-right">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {product.variants && (
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-2xl mb-6 uppercase tracking-wide">
                Dostupné varianty
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <span
                    key={variant}
                    className="bg-[#f6f2eb] text-[#2f2a24] font-['Public_Sans'] text-sm px-4 py-2 border border-gray-200 rounded-md"
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <Link href="/produkty">
            <button className="flex items-center gap-2 font-['Archivo'] font-600 text-sm uppercase tracking-wide text-gray-500 hover:text-[#e77719] transition-colors">
              <ArrowLeft size={16} />
              Späť na katalóg
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
