import { useMemo, useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import {
  ArrowRight,
  Check,
  GitCompareArrows,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allProducts, productCategories } from "@/data/products";

type CategoryFilter = (typeof productCategories)[number]["id"];

const categoryLabels: Record<"okna" | "dvere" | "doplnky", string> = {
  okna: "Okná",
  dvere: "Dvere",
  doplnky: "Doplnky",
};

export default function ProductsPage() {
  const search = useSearch();
  const [, navigate] = useLocation();
  const params = new URLSearchParams(search);
  const requestedCategory = params.get("kategoria");
  const validCategoryIds = new Set<string>(productCategories.map((item) => item.id));
  const initialCategory: CategoryFilter = validCategoryIds.has(requestedCategory || "")
    ? (requestedCategory as CategoryFilter)
    : "all";

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEnergyClasses, setSelectedEnergyClasses] = useState<string[]>([]);
  const [depthMin, setDepthMin] = useState<string>("");
  const [depthMax, setDepthMax] = useState<string>("");
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const energyClassOptions = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.energyClass).filter(Boolean))) as string[],
    [],
  );

  const depthValues = useMemo(
    () => allProducts.map((p) => p.profileDepthMm).filter((v): v is number => v !== null),
    [],
  );

  const depthBounds = {
    min: depthValues.length > 0 ? Math.min(...depthValues) : 0,
    max: depthValues.length > 0 ? Math.max(...depthValues) : 0,
  };

  const priceBounds = useMemo(
    () => ({
      min: Math.min(...allProducts.map((p) => p.priceFromEur)),
      max: Math.max(...allProducts.map((p) => p.priceToEur)),
    }),
    [],
  );

  const filteredProducts = useMemo(() => {
    const searchLower = searchTerm.trim().toLowerCase();
    const parsedDepthMin = depthMin ? Number(depthMin) : null;
    const parsedDepthMax = depthMax ? Number(depthMax) : null;
    const parsedPriceMin = priceMin ? Number(priceMin) : null;
    const parsedPriceMax = priceMax ? Number(priceMax) : null;

    return allProducts.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      if (!matchesCategory) return false;

      const matchesEnergy =
        selectedEnergyClasses.length === 0 ||
        (product.energyClass !== null && selectedEnergyClasses.includes(product.energyClass));
      if (!matchesEnergy) return false;

      const matchesDepth =
        (parsedDepthMin === null && parsedDepthMax === null) ||
        (product.profileDepthMm !== null &&
          (parsedDepthMin === null || product.profileDepthMm >= parsedDepthMin) &&
          (parsedDepthMax === null || product.profileDepthMm <= parsedDepthMax));
      if (!matchesDepth) return false;

      const matchesPrice =
        (parsedPriceMin === null || product.priceToEur >= parsedPriceMin) &&
        (parsedPriceMax === null || product.priceFromEur <= parsedPriceMax);
      if (!matchesPrice) return false;

      if (!searchLower) return true;

      const searchableText = [
        product.name,
        product.tagline,
        product.description,
        product.longDescription,
        product.features.join(" "),
        product.searchableTags.join(" "),
        product.specs.map((spec) => `${spec.label} ${spec.value}`).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchLower);
    });
  }, [
    activeCategory,
    depthMax,
    depthMin,
    priceMax,
    priceMin,
    searchTerm,
    selectedEnergyClasses,
  ]);

  const comparedProducts = useMemo(
    () => allProducts.filter((product) => compareIds.includes(product.id)),
    [compareIds],
  );

  const comparisonLabels = useMemo(() => {
    const baseLabels = ["Energetická trieda", "Hĺbka profilu", "Cena"];
    const specLabels = new Set<string>();

    comparedProducts.forEach((product) => {
      product.specs.forEach((spec) => specLabels.add(spec.label));
    });

    return [...baseLabels, ...Array.from(specLabels)];
  }, [comparedProducts]);

  const toggleEnergyClass = (energyClass: string) => {
    setSelectedEnergyClasses((prev) =>
      prev.includes(energyClass)
        ? prev.filter((item) => item !== energyClass)
        : [...prev, energyClass],
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedEnergyClasses([]);
    setDepthMin("");
    setDepthMax("");
    setPriceMin("");
    setPriceMax("");
    setActiveCategory("all");
  };

  const toggleCompare = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) return prev.filter((id) => id !== productId);
      if (prev.length >= 3) return prev;
      return [...prev, productId];
    });
  };

  const removeCompared = (productId: string) => {
    setCompareIds((prev) => prev.filter((id) => id !== productId));
  };

  const getComparisonValue = (productId: string, label: string) => {
    const product = comparedProducts.find((item) => item.id === productId);
    if (!product) return "—";
    if (label === "Energetická trieda") return product.energyClass ?? "—";
    if (label === "Hĺbka profilu") return product.profileDepthMm ? `${product.profileDepthMm} mm` : "—";
    if (label === "Cena") return `${product.priceFromEur} – ${product.priceToEur} EUR`;
    return product.specs.find((spec) => spec.label === label)?.value ?? "—";
  };

  const openDetail = (productId: string) => {
    navigate(`/produkty/${productId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="bg-[#2f2a24] pt-40 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <span className="section-label block mb-3">Náš sortiment</span>
          <h1 className="font-['Archivo'] font-800 text-white text-5xl lg:text-6xl mb-4">
            Produktový katalóg
          </h1>
          <p className="font-['Public_Sans'] text-white/70 text-base max-w-2xl">
            Vyhľadávajte produkty podľa energetickej triedy, hĺbky profilu, ceny a technických parametrov.
            Porovnajte si viac profilov vedľa seba a vyberte ideálne riešenie.
          </p>
        </div>
      </div>

      <section className="bg-[#f1ebe3] py-8 border-b border-[#d8cab8]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="rounded-xl border border-[#d5c6b5] bg-white p-5 lg:p-6 shadow-[0_14px_34px_rgba(47,42,36,0.14)]">
            <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_auto] gap-4 items-center">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Hľadať podľa názvu produktu, parametra alebo technickej vlastnosti..."
                  className="w-full rounded-lg border border-[#cdbca8] bg-white pl-10 pr-4 py-3 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-['Archivo'] font-700 text-xs uppercase tracking-wide transition-colors ${
                      activeCategory === category.id
                      ? "bg-[#2f2a24] text-white"
                      : "bg-white border border-[#d8cab8] text-[#2f2a24] hover:bg-[#f6f2eb]"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-lg border border-[#2f2a24] text-[#2f2a24] font-['Archivo'] font-700 text-xs uppercase tracking-wide hover:bg-[#2f2a24] hover:text-white transition-colors"
                >
                  Vymazať filtre
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="rounded-lg border border-[#d8cab8] bg-white p-3.5">
                <p className="font-['Archivo'] font-700 text-[11px] uppercase tracking-wide text-gray-500 mb-2">
                  Energetická trieda
                </p>
                <div className="flex flex-wrap gap-2">
                  {energyClassOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => toggleEnergyClass(option)}
                      className={`px-3 py-1.5 rounded-md text-xs font-['Archivo'] font-700 transition-colors ${
                        selectedEnergyClasses.includes(option)
                          ? "bg-[#e77719] text-white"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-[#e77719]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#d8cab8] bg-white p-3.5">
                <p className="font-['Archivo'] font-700 text-[11px] uppercase tracking-wide text-gray-500 mb-2">
                  Hĺbka profilu (mm)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    value={depthMin}
                    onChange={(event) => setDepthMin(event.target.value)}
                    type="number"
                    min={depthBounds.min}
                    max={depthBounds.max}
                    placeholder={`Od ${depthBounds.min}`}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719]"
                  />
                  <input
                    value={depthMax}
                    onChange={(event) => setDepthMax(event.target.value)}
                    type="number"
                    min={depthBounds.min}
                    max={depthBounds.max}
                    placeholder={`Do ${depthBounds.max}`}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719]"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-[#d8cab8] bg-white p-3.5">
                <p className="font-['Archivo'] font-700 text-[11px] uppercase tracking-wide text-gray-500 mb-2">
                  Cena (EUR)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    value={priceMin}
                    onChange={(event) => setPriceMin(event.target.value)}
                    type="number"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    placeholder={`Od ${priceBounds.min}`}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719]"
                  />
                  <input
                    value={priceMax}
                    onChange={(event) => setPriceMax(event.target.value)}
                    type="number"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    placeholder={`Do ${priceBounds.max}`}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 font-['Public_Sans'] text-sm focus:outline-none focus:border-[#e77719]"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-[#d8cab8] bg-white p-3.5">
                <p className="font-['Archivo'] font-700 text-[11px] uppercase tracking-wide text-gray-500 mb-2">
                  Porovnanie
                </p>
                <div className="inline-flex items-center gap-2 rounded-md bg-[#f6f2eb] px-3 py-2">
                  <SlidersHorizontal size={14} className="text-[#e77719]" />
                  <span className="font-['Public_Sans'] text-sm text-[#2f2a24]">
                    Vybrané profily: <strong>{compareIds.length}</strong> / 3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-10 bg-[#f1ebe3]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <p className="font-['Public_Sans'] text-sm text-gray-500">
              Zobrazených produktov: <strong className="text-[#2f2a24]">{filteredProducts.length}</strong>
            </p>
            {compareIds.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {compareIds.map((id) => {
                  const item = allProducts.find((product) => product.id === id);
                  if (!item) return null;
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1 rounded-full bg-white border border-[#e6ddcf] px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]"
                    >
                      {item.name}
                      <button
                        onClick={() => removeCompared(id)}
                        className="text-gray-400 hover:text-[#e77719]"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {comparedProducts.length >= 2 && (
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white overflow-hidden">
              <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
                <GitCompareArrows size={18} className="text-[#e77719]" />
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-lg">
                  Porovnanie technických parametrov
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[860px] w-full">
                  <thead>
                    <tr className="bg-[#f6f2eb]">
                      <th className="text-left px-4 py-3 font-['Archivo'] text-xs uppercase tracking-wide text-gray-500 w-[220px]">
                        Parameter
                      </th>
                      {comparedProducts.map((product) => (
                        <th
                          key={product.id}
                          className="text-left px-4 py-3 font-['Archivo'] text-xs uppercase tracking-wide text-[#2f2a24]"
                        >
                          {product.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonLabels.map((label) => (
                      <tr key={label} className="border-t border-gray-100">
                        <td className="px-4 py-3 font-['Public_Sans'] text-sm text-gray-500">{label}</td>
                        {comparedProducts.map((product) => (
                          <td key={`${product.id}-${label}`} className="px-4 py-3 font-['Public_Sans'] text-sm text-[#2f2a24]">
                            {getComparisonValue(product.id, label)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-[#e6ddcf] bg-white p-10 text-center">
              <h3 className="font-['Archivo'] font-700 text-xl text-[#2f2a24]">Nenašli sa žiadne produkty.</h3>
              <p className="font-['Public_Sans'] text-sm text-gray-500 mt-2">
                Skúste upraviť filtre alebo vymazať aktuálny výber.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isCompared = compareIds.includes(product.id);

                return (
                  <article
                    key={product.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => openDetail(product.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openDetail(product.id);
                      }
                    }}
                    className="group rounded-xl border border-[#d5c6b5] bg-white overflow-hidden shadow-[0_10px_28px_rgba(47,42,36,0.12)] hover:shadow-[0_18px_44px_rgba(47,42,36,0.18)] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e77719]/35"
                  >
                    <div className="relative h-72 md:h-80 bg-white border-b border-[#ded0c0]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="rounded-full bg-[#f6f2eb] px-2.5 py-1 text-[11px] font-['Archivo'] font-700 uppercase tracking-wide text-[#2f2a24]">
                          {product.badge}
                        </span>
                        <span className="font-['Archivo'] text-[11px] font-700 uppercase tracking-wide text-[#e77719]">
                          {categoryLabels[product.category]}
                        </span>
                      </div>

                      <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-1">{product.name}</h3>
                      <p className="font-['Public_Sans'] text-sm text-gray-500 mb-4">{product.tagline}</p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="rounded-full bg-[#f6f2eb] px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                          {product.energyClass ? `Trieda ${product.energyClass}` : "Doplnok"}
                        </span>
                        <span className="rounded-full bg-[#f6f2eb] px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                          {product.profileDepthMm ? `${product.profileDepthMm} mm` : "Na mieru"}
                        </span>
                        <span className="rounded-full bg-[#f6f2eb] px-3 py-1 text-xs font-['Public_Sans'] text-[#2f2a24]">
                          {product.priceFromEur} – {product.priceToEur} EUR
                        </span>
                      </div>

                      <div className="mt-auto border-t border-[#e2d4c4] pt-4 space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              openDetail(product.id);
                            }}
                            className="group/cta rounded-md bg-[#2f2a24] text-white font-['Archivo'] font-700 text-xs uppercase tracking-wide py-3 px-4 transition-colors hover:bg-[#1f1b17] inline-flex items-center justify-center gap-1.5"
                          >
                            Detail
                            <ArrowRight size={15} className="transition-transform group-hover/cta:translate-x-0.5" />
                          </button>

                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              navigate("/dopyt");
                            }}
                            className="rounded-md border border-[#e77719] bg-white text-[#e77719] font-['Archivo'] font-700 text-xs uppercase tracking-wide py-3 px-4 transition-colors hover:bg-[#e77719] hover:text-white"
                          >
                            Dopyt
                          </button>
                        </div>

                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleCompare(product.id);
                          }}
                            className={`w-full rounded-md border font-['Archivo'] font-700 text-xs uppercase tracking-wide py-3 px-4 transition-colors inline-flex items-center justify-center gap-2 ${
                              isCompared
                                ? "border-[#2f2a24] bg-[#2f2a24] text-white"
                                : "border-[#2f2a24] bg-white text-[#2f2a24] hover:bg-[#2f2a24] hover:text-white"
                            }`}
                          >
                          {isCompared ? <Check size={14} /> : <GitCompareArrows size={14} />}
                          {isCompared ? "V porovnaní" : "Porovnať"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#e77719]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-['Archivo'] font-800 text-white text-3xl lg:text-4xl mb-3">
            Nenašli ste, čo hľadáte?
          </h2>
          <p className="font-['Public_Sans'] text-white/80 mb-6">
            Pošlite nám požiadavku a pripravíme vám individuálnu ponuku na mieru.
          </p>
          <Link href="/dopyt">
            <button className="bg-white text-[#e77719] font-['Archivo'] font-700 text-sm uppercase tracking-wide px-8 py-3.5 hover:bg-[#2f2a24] hover:text-white transition-colors inline-flex items-center gap-2">
              Poslať dopyt
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
