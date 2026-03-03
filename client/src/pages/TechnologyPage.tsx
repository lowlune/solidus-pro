/* ============================================================
   SOLIDUS PRO – Technológia Page
   Style: Industrial Minimalism
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page header */}
      <div className="bg-[#2f2a24] pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <span className="section-label block mb-3">Ako vyrábame</span>
          <h1 className="font-['Archivo'] font-800 text-white text-5xl lg:text-6xl mb-4">
            Technológia výroby
          </h1>
          <p className="font-['Public_Sans'] text-white/60 text-base max-w-xl">
            Moderná CNC výroba v súlade s predpísanou technicko-výrobnou dokumentáciou výrobcu profilov VEKA AG.
          </p>
        </div>
      </div>

      {/* Production process */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="section-label block mb-3">Výrobný proces</span>
              <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl mb-4">
                CNC výroba krok za krokom
              </h2>
              <span className="orange-line mb-6" />
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed mb-6">
                Obchodnú a technickú dokumentáciu spracovávame na software Klaes, ktorý je nastavený 
                výrobcom profilov VEKA AG a dodávateľom kovania MACO. Je zárukou správneho a kvalitného 
                postupu výroby vašich okien.
              </p>
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed">
                Vaše okná sú vyrábané najmodernejšou technológiou v súlade s predpísanou technicko-výrobnou 
                dokumentáciou výrobcu profilov VEKA AG. Na konci každého výrobného procesu je výstupná kontrola.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396970192/78CCnTbJFoBNahWcHfmjBh/hero-slide3-LfCPuNt7yXeLYcodgHHP74.webp"
                alt="CNC výroba"
                className="w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#e77719] p-6 hidden lg:block">
                <div className="font-['Archivo'] font-800 text-white text-3xl">CNC</div>
                <div className="font-['Public_Sans'] text-white/80 text-xs mt-1">Technológia</div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Nárez profilov",
                desc: "Realizovaný na CNC dvojhlavovej píle. Presný nárez podľa technickej dokumentácie.",
                detail: "CNC dvojhlavová píla",
              },
              {
                step: "02",
                title: "Zváranie",
                desc: "Realizované na CNC štvorhlavovej zváračke, ktorá pred zvarením skontroluje správnosť rozmeru.",
                detail: "CNC štvorhlavová zváračka",
              },
              {
                step: "03",
                title: "Začisťovanie rohov",
                desc: "Realizované na CNC začisťovacej fréze pre dokonalý povrch a presné rohy.",
                detail: "CNC začisťovacia fréza",
              },
              {
                step: "04",
                title: "Výstupná kontrola",
                desc: "Každé okno je preskúšané a nastavené v zasklievacej stolici. Finálna kontrola kvality.",
                detail: "Zasklievacia stolica",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#f6f2eb] p-6 border-t-4 border-[#e77719]">
                <span className="font-['Archivo'] font-800 text-[#e77719] text-3xl block mb-3">
                  {item.step}
                </span>
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-2">
                  {item.title}
                </h3>
                <p className="font-['Public_Sans'] text-gray-500 text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <span className="font-['Public_Sans'] text-[#e77719] text-xs font-600 uppercase tracking-wide">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware / Fittings */}
      <section className="py-20 bg-[#2f2a24]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Kovanie</span>
            <h2 className="font-['Archivo'] font-700 text-white text-4xl lg:text-5xl">
              Kovanie MACO
            </h2>
            <span className="orange-line mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-['Public_Sans'] text-white/70 leading-relaxed mb-6">
                Okno je systém pozostávajúci z rôznych prvkov, ktorým treba dať správny tvar, spracovanie, 
                a potom ich spojiť do funkčného celku. Kovanie v oknách modernej konštrukcie je celoobvodové 
                a zaisťuje uzatvorenie, utesnenie a rôzne varianty vetrania.
              </p>
              <p className="font-['Public_Sans'] text-white/70 leading-relaxed mb-8">
                Vďaka skrytému kovaniu MACO Invisible nie sú viditeľné dolné ani horné pánty. Toto kovanie 
                je plne využiteľné s bezpečnostným kovaním MACO Multi Matic. Skryté kovanie ponúka pohľad 
                na okno, na ktorom nie je viditeľná žiadna časť kovania, s výnimkou kľučky.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "FUNKČNOSŤ", desc: "Spoľahlivá dlhoročná prevádzka" },
                  { title: "BEZPEČNOSŤ", desc: "Ochrana proti vlámaniu" },
                  { title: "KOMFORT", desc: "Jednoduché ovládanie" },
                  { title: "KOMPATIBILITA", desc: "Univerzálne riešenia" },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 p-4">
                    <div className="font-['Archivo'] font-700 text-[#e77719] text-sm uppercase tracking-wide mb-1">
                      {item.title}
                    </div>
                    <div className="font-['Public_Sans'] text-white/60 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 p-6">
                <h3 className="font-['Archivo'] font-700 text-white text-xl mb-3">
                  MACO Multi Matic
                </h3>
                <p className="font-['Public_Sans'] text-white/60 text-sm leading-relaxed">
                  Bezpečnostné kovanie MACO Multi Matic poskytuje najvyššiu ochranu voči vonkajším zásahom. 
                  Mechanizmus kovania je precízny, zabezpečuje dokonalé tesnenie po celom obvode okna.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6">
                <h3 className="font-['Archivo'] font-700 text-white text-xl mb-3">
                  MACO Invisible
                </h3>
                <p className="font-['Public_Sans'] text-white/60 text-sm leading-relaxed">
                  Skryté kovanie MACO Invisible je osadené a úplne zapustené v priestore drážky, takže 
                  neprichádza do styku so vzduchom a efektívne predchádza vzniku tepelných mostov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glass */}
      <section className="py-20 bg-[#f6f2eb]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Zasklenie</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Termoizolačné sklo
            </h2>
            <span className="orange-line mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed mb-6">
                Používame termoizolačné sklo s teplo odrážajúcim pokovením Planibel® Plus výrobcu Glaverbel 
                s nízkou emisivitou. Sklo poskytuje vysokú tepelnú ochranu a zodpovedá vysokým požiadavkám 
                účinnej tepelnej izolácie.
              </p>
              <p className="font-['Public_Sans'] text-gray-600 leading-relaxed mb-8">
                Pokovená vrstva odráža dlhovlnné infračervené žiarenie, a tým udržuje teplo v miestnosti, 
                čím výrazne znižuje spotrebu energie na kúrenie.
              </p>

              <div className="space-y-3">
                {[
                  { label: "U-hodnota (štandard)", value: "1,4 W/m².K" },
                  { label: "Svetelný činiteľ prestupu (LT)", value: "79 %" },
                  { label: "U-hodnota (s argónom)", value: "1,1 W/m².K" },
                ].map((param) => (
                  <div key={param.label} className="flex justify-between py-3 px-4 bg-white border border-gray-100">
                    <span className="font-['Public_Sans'] text-gray-500 text-sm">{param.label}</span>
                    <span className="font-['Archivo'] font-700 text-[#2f2a24] text-sm">{param.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#2f2a24] p-8">
              <h3 className="font-['Archivo'] font-700 text-white text-2xl mb-5">
                Výrobný proces skla
              </h3>
              <p className="font-['Public_Sans'] text-white/70 text-sm leading-relaxed mb-5">
                Pokovenie Planibel® Plus je aplikované pomocou elektromagnetického procesu naparovaním 
                kovových častíc na sklo vo vákuu.
              </p>
              <p className="font-['Public_Sans'] text-white/70 text-sm leading-relaxed">
                Výhodou tohto procesu je získanie skla pokrytého perfektným a rovnomerným nízkoemisným 
                magnetronovým povlakom. Kovové častice tvoria fotometrické a tepelné charakteristiky 
                povlaku Planibel® Plus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance tips */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <span className="section-label block mb-3">Dobré vedieť</span>
            <h2 className="font-['Archivo'] font-700 text-[#2f2a24] text-4xl lg:text-5xl">
              Údržba a tipy
            </h2>
            <span className="orange-line mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Orosenie okien",
                content: [
                  "Pravidelné vetranie priestoru",
                  "Udržiavanie optimálnej vlhkosti vzduchu (40-60%)",
                  "Dostatočné vykurovanie priestoru",
                  "Použitie okien s lepšími tepelno-izolačnými vlastnosťami",
                ],
                desc: "Orosenie vzniká pri nízkych vonkajších teplotách pri nedostatočnom vetraní.",
              },
              {
                title: "Správne vetranie",
                content: [
                  "Intenzívne vetranie niekoľkokrát denne (5-10 minút)",
                  "Otvorenie okien dokorán pre účinnú výmenu vzduchu",
                  "Vetranie najmä po varení, sprchovaní a sušení prádla",
                  "Využitie mikroventilácie na oknách",
                ],
                desc: "Správne vetranie je dôležité pre zdravú klímu v interiéri.",
              },
              {
                title: "Údržba kovania",
                content: [
                  "Nepoužívať nadmernú silu pri otváraní/zatváraní",
                  "Pravidelné čistenie a mazanie pohyblivých častí",
                  "Kontrola a prípadné dotiahnutie skrutiek",
                  "Raz ročne namažte pohyblivé časti strojovým olejom",
                ],
                desc: "Správne používanie kovania predlžuje jeho životnosť.",
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-[#f6f2eb] p-6">
                <h3 className="font-['Archivo'] font-700 text-[#2f2a24] text-xl mb-2">
                  {tip.title}
                </h3>
                <p className="font-['Public_Sans'] text-gray-400 text-sm mb-4">{tip.desc}</p>
                <ul className="space-y-2">
                  {tip.content.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#e77719] rounded-full mt-1.5 shrink-0" />
                      <span className="font-['Public_Sans'] text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#e77719]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-['Archivo'] font-800 text-white text-3xl lg:text-4xl mb-3">
            Zaujala vás naša technológia?
          </h2>
          <p className="font-['Public_Sans'] text-white/80 mb-6">
            Pošlite nám dopyt a my vám pripravíme cenovú ponuku na mieru.
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


