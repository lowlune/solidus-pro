import { Link } from "wouter";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { productsByCategory } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#2f2a24] text-white">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="mb-5 inline-flex">
                <img src="/imgs/logo-white.svg" alt="Solidus PRO" className="h-10 w-auto" />
              </span>
            </Link>
            <p className="text-white/65 font-['Public_Sans'] text-sm leading-relaxed mb-5">
              Výrobca kvalitných plastových okien a dverí od roku 2000. Kompletný servis od zamerania po montáž.
            </p>
            <div className="flex gap-2">
              <span className="inline-block px-3 py-1 bg-[#e77719]/20 text-[#e77719] font-['Archivo'] text-xs font-600 uppercase tracking-wide">
                VEKA AG
              </span>
              <span className="inline-block px-3 py-1 bg-white/10 text-white/75 font-['Archivo'] text-xs font-600 uppercase tracking-wide">
                MACO
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-['Archivo'] font-700 text-base uppercase tracking-widest text-[#e77719] mb-5">
              Produkty
            </h4>
            <ul className="space-y-2.5">
              {[...productsByCategory.okna, ...productsByCategory.dvere, ...productsByCategory.doplnky]
                .slice(0, 8)
                .map((item) => (
                  <li key={item.id}>
                    <Link href={`/produkty/${item.id}`}>
                      <span className="text-white/65 hover:text-white font-['Public_Sans'] text-sm transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Archivo'] font-700 text-base uppercase tracking-widest text-[#e77719] mb-5">
              Informácie
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "O nás", href: "/o-nas" },
                { label: "Technológia výroby", href: "/technologia" },
                { label: "Katalóg produktov", href: "/produkty" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Poslať dopyt", href: "/dopyt" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <span className="text-white/65 hover:text-white font-['Public_Sans'] text-sm transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Archivo'] font-700 text-base uppercase tracking-widest text-[#e77719] mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                <span className="text-white/65 font-['Public_Sans'] text-sm leading-relaxed">
                  Staškov 165
                  <br />
                  023 53 Staškov
                  <br />
                  Slovensko
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                <a href="tel:+421415241054" className="text-white/65 hover:text-white font-['Public_Sans'] text-sm transition-colors">
                  +421 41 / 524 10 54
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                <a href="mailto:madam@madam.sk" className="text-white/65 hover:text-white font-['Public_Sans'] text-sm transition-colors">
                  madam@madam.sk
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[#e77719] mt-0.5 shrink-0" />
                <span className="text-white/65 font-['Public_Sans'] text-sm">Po - Pia: 8:00 - 17:00.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/45 font-['Public_Sans'] text-xs">
            © {new Date().getFullYear()} Solidus PRO, spol. s r.o. Všetky práva vyhradené.
          </p>
          <p className="text-white/45 font-['Public_Sans'] text-xs">
            IČO: 36522821 | DIČ: 2021172026 | IČ DPH: SK2021172026
          </p>
        </div>
      </div>
    </footer>
  );
}
