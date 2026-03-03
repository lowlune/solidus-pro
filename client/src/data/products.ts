export type ProductCategory = "okna" | "dvere" | "doplnky";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  badge: string;
  energyClass: string | null;
  profileDepthMm: number | null;
  priceFromEur: number;
  priceToEur: number;
  specs: ProductSpec[];
  features: string[];
  searchableTags: string[];
  variants?: string[];
}

export const productCategories = [
  { id: "all", label: "Všetky produkty" },
  { id: "okna", label: "Okná" },
  { id: "dvere", label: "Dvere" },
  { id: "doplnky", label: "Doplnky" },
] as const;

export const featuredProductIds = [
  "alphaline-90",
  "softline-70",
  "softline-70-dvere",
  "vekaslide",
] as const;

export const allProducts: ProductItem[] = [
  {
    id: "alphaline-90",
    category: "okna",
    name: "ALPHALINE 90 MD",
    tagline: "6-komorový profil, energetická trieda A",
    description: "Špičkový 6-komorový systém s hĺbkou 90 mm a trojitým tesnením.",
    longDescription:
      "ALPHALINE 90 MD je prémiový okenný profil pre maximálnu tepelnú izoláciu a dlhú životnosť. Je vhodný pre novostavby aj rekonštrukcie a ponúka moderný dizajn spolu so spoľahlivým kovaním.",
    image: "/imgs/alphaline.webp",
    badge: "Trieda A",
    energyClass: "A",
    profileDepthMm: 90,
    priceFromEur: 340,
    priceToEur: 620,
    specs: [
      { label: "Počet komôr", value: "6" },
      { label: "Stavebná hĺbka", value: "90 mm" },
      { label: "Uf (rám)", value: "od 1,0 W/m²K" },
      { label: "Uw (okno)", value: "od 0,79 W/m²K" },
      { label: "Zvuková izolácia", value: "až 47 dB" },
      { label: "Prievzdušnosť", value: "Trieda 4" },
      { label: "Vodotesnosť", value: "až 9A" },
      { label: "Odolnosť proti vetru", value: "Trieda C5/B5" },
      { label: "Tesnenie", value: "Trojité (MD)" },
      { label: "Zasklenie", value: "Dvojsklo / trojsklo (do 52 mm)" },
      { label: "Kovanie", value: "MACO Multi Matic / MACO Invisible" },
      { label: "Energetická trieda", value: "A" },
    ],
    features: [
      "Vysoká tepelná izolácia",
      "Nižšie náklady na vykurovanie",
      "Vhodné pre nízkoenergetické a pasívne domy",
      "Nízka náročnosť na údržbu",
    ],
    searchableTags: [
      "okno",
      "okna",
      "6-komorový",
      "6-komorovy",
      "90 mm",
      "trojité tesnenie",
      "maco",
      "uw",
      "uf",
      "zvuková izolácia",
    ],
    variants: ["1-krídlové", "2-krídlové", "3-krídlové", "Balkónové", "Fixné"],
  },
  {
    id: "softline-70",
    category: "okna",
    name: "SOFTLINE 70 MD",
    tagline: "5-komorový profil, výborný pomer ceny a výkonu",
    description: "Overený profil s hĺbkou 70 mm pre spoľahlivé riešenie domácností.",
    longDescription:
      "SOFTLINE 70 MD je univerzálne riešenie pre domy aj byty. Ponúka kvalitnú izoláciu, stabilnú prevádzku a jednoduchú údržbu za dostupnejšiu cenu.",
    image: "/imgs/softline.webp",
    badge: "Trieda B",
    energyClass: "B",
    profileDepthMm: 70,
    priceFromEur: 220,
    priceToEur: 450,
    specs: [
      { label: "Počet komôr", value: "5" },
      { label: "Stavebná hĺbka", value: "70 mm" },
      { label: "Uf (rám)", value: "od 1,3 W/m²K" },
      { label: "Uw (okno)", value: "od 1,1 W/m²K" },
      { label: "Zvuková izolácia", value: "až 43 dB" },
      { label: "Prievzdušnosť", value: "Trieda 4" },
      { label: "Vodotesnosť", value: "až 7A" },
      { label: "Odolnosť proti vetru", value: "Trieda C3/B3" },
      { label: "Tesnenie", value: "Trojité (MD)" },
      { label: "Zasklenie", value: "Dvojsklo / trojsklo (do 42 mm)" },
      { label: "Kovanie", value: "MACO Multi Matic" },
      { label: "Energetická trieda", value: "B" },
    ],
    features: [
      "Výborný pomer cena/výkon",
      "Osvedčená konštrukcia",
      "Jednoduchá údržba",
      "Spoľahlivá prevádzka",
    ],
    searchableTags: [
      "okno",
      "okna",
      "5-komorový",
      "5-komorovy",
      "70 mm",
      "softline",
      "uw",
      "izolácia",
    ],
    variants: ["1-krídlové", "2-krídlové", "3-krídlové", "Balkónové"],
  },
  {
    id: "softline-70-dvere",
    category: "dvere",
    name: "DVERE SOFTLINE 70",
    tagline: "Vchodové dvere s tepelne deleným prahom",
    description: "Stabilné a bezpečné vchodové dvere s kvalitným tesnením.",
    longDescription:
      "Vchodové dvere SOFTLINE 70 sú navrhnuté pre spoľahlivú ochranu, stabilitu a komfort. Dostupné sú v rôznych prevedeniach výplní a farebných kombináciách.",
    image: "/imgs/alphaline-dvere.webp",
    badge: "Bestseller",
    energyClass: "B",
    profileDepthMm: 70,
    priceFromEur: 780,
    priceToEur: 1400,
    specs: [
      { label: "Systém", value: "SOFTLINE 70" },
      { label: "Prah", value: "Tepelne delený" },
      { label: "Tesnenie", value: "Dvojité" },
      { label: "Výplne", value: "Sklenené / panelové / hladké" },
      { label: "Kovanie", value: "MACO" },
      { label: "Energetická trieda", value: "B" },
    ],
    features: [
      "Vysoká stabilita konštrukcie",
      "Dobrá tepelná izolácia",
      "Možnosť dizajnu na mieru",
      "Bezpečnostné kovanie",
    ],
    searchableTags: ["dvere", "vchodové", "vchodove", "softline", "70 mm"],
    variants: ["Plné", "Sklenené", "Panelové", "Kované"],
  },
  {
    id: "vekaslide",
    category: "dvere",
    name: "VEKASLIDE – Posuvné dvere",
    tagline: "Zdvižno-posuvný systém s bezbariérovým vstupom",
    description: "Veľkoformátové posuvné dvere pre terasy a moderné interiéry.",
    longDescription:
      "VEKASLIDE ponúka veľké presklenia, bezbariérový vstup a komfortné ovládanie. Je ideálny na prepojenie interiéru s exteriérom.",
    image: "/imgs/alphaline-dvere.webp",
    badge: "Novinka",
    energyClass: "A",
    profileDepthMm: 82,
    priceFromEur: 1800,
    priceToEur: 4200,
    specs: [
      { label: "Max. šírka", value: "do 6500 mm" },
      { label: "Max. výška", value: "do 2600 mm" },
      { label: "Profil", value: "Trieda A" },
      { label: "Zasklenie", value: "Dvojsklo / trojsklo" },
      { label: "Vstup", value: "Bezbariérový" },
      { label: "Energetická trieda", value: "A" },
    ],
    features: [
      "Veľké presklené plochy",
      "Plynulý a tichý chod",
      "Bezbariérové riešenie",
      "Moderné architektonické použitie",
    ],
    searchableTags: ["posuvné", "posuvne", "vekaslide", "terasa", "bezbariérový"],
  },
  {
    id: "gfk-entry",
    category: "dvere",
    name: "GFK Entry – Lepené výplne",
    tagline: "Sklolaminátové dosky vhodné aj pre pasívne domy",
    description: "Lepené dverné výplne s vysokou tepelnou izoláciou.",
    longDescription:
      "GFK Entry výplne sú určené pre moderný dizajn a lepšiu energetickú bilanciu dverí. Sú vhodné aj pre náročnejšie projekty.",
    image: "/imgs/alphaline-dvere.webp",
    badge: "Pasívny dom",
    energyClass: "A+",
    profileDepthMm: 75,
    priceFromEur: 950,
    priceToEur: 2100,
    specs: [
      { label: "Hrúbka výplne", value: "40 – 75 mm" },
      { label: "U-hodnota", value: "0,4 – 0,7 W/m²K" },
      { label: "Materiál", value: "Sklolaminát GFK" },
      { label: "Montáž", value: "Lepené riešenie" },
      { label: "Energetická trieda", value: "A+" },
    ],
    features: [
      "Nízke tepelné straty",
      "Čistý moderný vzhľad",
      "Vysoká pevnosť výplne",
      "Dlhoročná stabilita",
    ],
    searchableTags: ["gfk", "lepené", "lepene", "pasívny dom", "výplň"],
  },
  {
    id: "garazove-brany",
    category: "dvere",
    name: "Sekčné garážové brány",
    tagline: "Automatický pohon a rozmery na mieru",
    description: "Sekčné garážové brány s izoláciou a bezpečnostnými prvkami.",
    longDescription:
      "Garážové brány vyrábame v typizovaných rozmeroch aj na mieru. Dostupné sú s manuálnym alebo automatickým pohonom.",
    image: "/imgs/alphaline-dvere.webp",
    badge: "Novinka",
    energyClass: "B",
    profileDepthMm: 42,
    priceFromEur: 1100,
    priceToEur: 2600,
    specs: [
      { label: "Výplň panelu", value: "PU pena" },
      { label: "Pohon", value: "Manuálny / automatický" },
      { label: "Rozmery", value: "Typizované / na mieru" },
      { label: "Bezpečnosť", value: "Ochrana proti privretiu" },
      { label: "Energetická trieda", value: "B" },
    ],
    features: [
      "Komfortné ovládanie",
      "Izolačné panely",
      "Rozmery na mieru",
      "Rôzne dekoračné prevedenia",
    ],
    searchableTags: ["garáž", "garaz", "brána", "sekčná", "automatický pohon"],
  },
  {
    id: "parapety",
    category: "doplnky",
    name: "Parapety",
    tagline: "Vnútorné aj vonkajšie prevedenia v rôznych farbách",
    description: "Parapety na kompletné dokončenie okenných otvorov.",
    longDescription:
      "Parapety dodávame v rôznych dekoroch a materiáloch. Sú vhodné pre novostavby aj rekonštrukcie a vyznačujú sa jednoduchou údržbou.",
    image: "/imgs/softline.webp",
    badge: "Doplnok",
    energyClass: null,
    profileDepthMm: null,
    priceFromEur: 20,
    priceToEur: 120,
    specs: [
      { label: "Typ", value: "Vnútorné / vonkajšie" },
      { label: "Materiál", value: "PVC / hliník" },
      { label: "Dekory", value: "Rôzne farebné varianty" },
    ],
    features: ["Odolné prevedenie", "Jednoduchá montáž", "Dlhá životnosť"],
    searchableTags: ["parapet", "vnútorný", "vonkajší", "doplnok"],
  },
  {
    id: "zaluzie",
    category: "doplnky",
    name: "Žalúzie",
    tagline: "Horizontálne, látkové aj vertikálne systémy",
    description: "Tienenie interiéru s výberom viacerých systémov.",
    longDescription:
      "Žalúzie ponúkame v horizontálnych, látkových aj vertikálnych variantoch. Sú vhodné pre byty, domy aj kancelárie.",
    image: "/imgs/softline.webp",
    badge: "Doplnok",
    energyClass: null,
    profileDepthMm: null,
    priceFromEur: 35,
    priceToEur: 280,
    specs: [
      { label: "Typ", value: "Horizontálne / vertikálne / látkové" },
      { label: "Ovládanie", value: "Manuálne / retiazkové" },
      { label: "Dekory", value: "Široká paleta farieb" },
    ],
    features: ["Regulácia svetla", "Estetické doplnenie okien", "Rôzne farebné prevedenia"],
    searchableTags: ["žalúzie", "zaluzie", "tienenie", "horizontálne", "vertikálne"],
  },
  {
    id: "siete",
    category: "doplnky",
    name: "Siete proti hmyzu",
    tagline: "Pevné, otváracie aj samonavíjacie systémy",
    description: "Praktická ochrana pred hmyzom pre okná aj dvere.",
    longDescription:
      "Siete proti hmyzu sú dostupné v pevných, otváracích a samonavíjacích variantoch. Predstavujú nenápadné riešenie s vysokou funkčnosťou.",
    image: "/imgs/softline.webp",
    badge: "Doplnok",
    energyClass: null,
    profileDepthMm: null,
    priceFromEur: 20,
    priceToEur: 160,
    specs: [
      { label: "Typ", value: "Pevné / otváracie / samonavíjacie" },
      { label: "Rám", value: "Hliníkový" },
      { label: "Použitie", value: "Okná aj dvere" },
    ],
    features: ["Ochrana pred hmyzom", "Nenápadný dizajn", "Jednoduchá obsluha"],
    searchableTags: ["siete", "hmyz", "okná", "dvere", "samonavíjacie"],
  },
];

export const productsById: Record<string, ProductItem> = allProducts.reduce(
  (acc, product) => {
    acc[product.id] = product;
    return acc;
  },
  {} as Record<string, ProductItem>,
);

export const productsByCategory = allProducts.reduce(
  (acc, product) => {
    acc[product.category].push(product);
    return acc;
  },
  {
    okna: [] as ProductItem[],
    dvere: [] as ProductItem[],
    doplnky: [] as ProductItem[],
  },
);
