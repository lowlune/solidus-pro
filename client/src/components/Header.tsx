import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Clock, Mail, Menu, Phone, Percent, X } from "lucide-react";
import { productsByCategory, type ProductCategory } from "@/data/products";

type NavItem = {
  id: "home" | "about" | "products" | "technology" | "contact";
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Domov", href: "/" },
  { id: "about", label: "O nás", href: "/o-nas" },
  { id: "products", label: "Produkty", href: "/produkty" },
  { id: "technology", label: "Technológia", href: "/technologia" },
  { id: "contact", label: "Kontakt", href: "/kontakt" },
];

const categoryMeta: Record<ProductCategory, { label: string; href: string }> = {
  okna: { label: "Okná", href: "/produkty?kategoria=okna" },
  dvere: { label: "Dvere", href: "/produkty?kategoria=dvere" },
  doplnky: { label: "Doplnky", href: "/produkty?kategoria=doplnky" },
};

const categoryOrder: ProductCategory[] = ["okna", "dvere", "doplnky"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | null>(null);
  const [location] = useLocation();
  const logoSrc = "/imgs/logo-white.svg";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const productsCount = useMemo(
    () => categoryOrder.reduce((count, category) => count + productsByCategory[category].length, 0),
    [],
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:block bg-[#e77719] text-white border-b border-white/25">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-6">
            <p className="font-['Public_Sans'] text-xs font-600 tracking-wide uppercase inline-flex items-center gap-2 whitespace-nowrap">
              <Percent size={12} />
              Špeciálna ponuka: -12 % na vybrané profily pri objednávke v tomto mesiaci
            </p>
            <div className="flex items-center gap-4 lg:gap-6 text-xs font-['Public_Sans']">
              <a href="tel:+421415241054" className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Phone size={12} />
                +421 41 / 524 10 54
              </a>
              <a href="mailto:madam@madam.sk" className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Mail size={12} />
                madam@madam.sk
              </a>
              <span className="inline-flex items-center gap-1.5 text-white/90 whitespace-nowrap">
                <Clock size={12} />
                Po - Pia: 8:00 - 17:00
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-[#2f2a24] border-b border-white/10 transition-shadow ${scrolled ? "shadow-xl shadow-black/25" : ""}`}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[78px]">
            <Link href="/">
              <span className="inline-flex items-center transition-transform hover:scale-[1.01]">
                <img src={logoSrc} alt="Solidus PRO" className="h-8 w-auto md:h-10" />
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isProducts = item.id === "products";
                const isActive =
                  location === item.href || (isProducts && location.startsWith("/produkty"));

                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => isProducts && setActiveDropdown("products")}
                    onMouseLeave={() => isProducts && setActiveDropdown(null)}
                  >
                    <Link href={item.href}>
                      <span
                        className={`inline-flex items-center gap-1 px-4 py-2 text-sm uppercase tracking-wide font-['Archivo'] font-600 transition-colors ${
                          isActive ? "text-[#e77719]" : "text-white/90 hover:text-white"
                        }`}
                      >
                        {item.label}
                        {isProducts && <ChevronDown size={14} />}
                      </span>
                    </Link>

                    {isProducts && activeDropdown === "products" && (
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-40">
                        <div className="w-[min(960px,92vw)] rounded-xl border border-[#e6ddcf] bg-white shadow-2xl shadow-[#2f2a24]/18 overflow-hidden">
                          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#efe7dd]">
                            <h3 className="font-['Archivo'] font-700 text-base text-[#2f2a24]">
                              Produkty ({productsCount})
                            </h3>
                            <Link href="/produkty">
                              <span className="font-['Archivo'] font-600 text-xs uppercase tracking-wide text-[#2f2a24] hover:text-[#e77719] transition-colors">
                                Všetky produkty
                              </span>
                            </Link>
                          </div>

                          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#efe7dd]">
                            {categoryOrder.map((category) => {
                              const items = productsByCategory[category];
                              return (
                                <div key={category} className="p-4">
                                  <div className="mb-2.5 flex items-center justify-between">
                                    <Link href={categoryMeta[category].href}>
                                      <span className="font-['Archivo'] text-xs font-700 uppercase tracking-wide text-[#2f2a24] hover:text-[#e77719] transition-colors">
                                        {categoryMeta[category].label}
                                      </span>
                                    </Link>
                                    <span className="font-['Public_Sans'] text-[11px] text-[#6c6258]">{items.length}</span>
                                  </div>

                                  <ul className="space-y-1 max-h-[230px] overflow-y-auto pr-1">
                                    {items.map((product) => (
                                      <li key={product.id}>
                                        <Link href={`/produkty/${product.id}`}>
                                          <span className="block rounded-md px-2 py-1.5 font-['Public_Sans'] text-sm text-[#2f2a24]/80 hover:text-[#2f2a24] hover:bg-[#f6f2eb] transition-colors truncate">
                                            {product.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/dopyt">
                <button className="btn-orange text-sm px-5 py-2.5">Poslať dopyt</button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#2f2a24] border-t border-white/10 shadow-xl">
          <div className="max-w-[1280px] mx-auto px-4 py-4 max-h-[75vh] overflow-y-auto">
            {navItems.map((item) => {
              const isProducts = item.id === "products";
              return (
                <div key={item.id} className="border-b border-white/10 py-2">
                  <Link href={item.href}>
                    <span className="block py-2 text-white font-['Archivo'] font-600 text-base uppercase tracking-wide">
                      {item.label}
                    </span>
                  </Link>

                  {isProducts && (
                    <div className="pl-2 pr-1 pb-3">
                      {categoryOrder.map((category) => (
                        <div key={category} className="mt-2">
                          <Link href={categoryMeta[category].href}>
                            <span className="block py-1 font-['Archivo'] text-xs uppercase tracking-wide text-[#e77719]">
                              {categoryMeta[category].label}
                            </span>
                          </Link>
                          <div className="grid grid-cols-1 gap-0.5">
                            {productsByCategory[category].map((product) => (
                              <Link key={product.id} href={`/produkty/${product.id}`}>
                                <span className="block py-1 text-sm text-white/75 font-['Public_Sans']">
                                  {product.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/dopyt">
              <button className="btn-orange w-full mt-4 text-sm">Poslať dopyt</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
