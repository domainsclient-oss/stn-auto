/**
 * Page content. Every fact here comes from the company brief.
 * Do not add specifications, customers or figures that STN AUTO has not supplied.
 */

export const companyFacts = [
  { label: "Incorporated", value: "October 2021" },
  { label: "Certification", value: "ISO 9001:2015" },
  { label: "Expertise", value: "Warp knitted, weft knitted & pile fabrics" },
  { label: "Standards", value: "OEM standards: HMI & KMI" },
] as const;

/**
 * Customer logos supplied by STN AUTO, shown in their original colours.
 * `h` is the display height in px, tuned per mark so they read at equal optical weight.
 */
type CustomerLogo = { name: string; src: string; width: number; height: number; h: number };

const logo = {
  hyundai: { name: "Hyundai", src: "/images/customers/hyundai.png", width: 412, height: 240, h: 56 },
  kia: { name: "Kia", src: "/images/customers/kia.png", width: 504, height: 120, h: 30 },
  transys: { name: "Hyundai Transys", src: "/images/customers/hyundai-transys.png", width: 181, height: 41, h: 38 },
  kolon: { name: "Kolon", src: "/images/customers/kolon.png", width: 592, height: 106, h: 30 },
  yongsan: { name: "Yongsan", src: "/images/customers/yongsan.png", width: 450, height: 95, h: 36 },
  saddles: { name: "Saddles", src: "/images/customers/saddles.png", width: 148, height: 149, h: 84 },
  stl: { name: "STL", src: "/images/customers/stl.png", width: 572, height: 240, h: 40 },
} satisfies Record<string, CustomerLogo>;

/** Customer categories, each with the customers STN AUTO supplies in it. */
export const customerSegments: { title: string; detail: string; logos: CustomerLogo[] }[] = [
  { title: "OEMs", detail: "Original equipment manufacturers", logos: [logo.hyundai, logo.kia] },
  { title: "Tier 1", detail: "Tier 1 automotive suppliers", logos: [logo.transys] },
  { title: "Tier 2", detail: "Tier 2 automotive suppliers", logos: [logo.stl, logo.kolon, logo.yongsan, logo.saddles] },
];

export const products = [
  {
    index: "01",
    family: "Warp Knit Fabrics",
    variant: "4 Bar Structure",
    description:
      "Warp knitted automotive seat fabric built on a four-bar structure and manufactured to OEM standards.",
    image: "/images/product-warp-4bar.webp",
    alt: "Macro view of a warp knitted automotive fabric with a fine geometric pattern",
  },
  {
    index: "02",
    family: "Warp Knit Fabrics",
    variant: "3 Bar Structure",
    description:
      "Warp knitted automotive seat fabric built on a three-bar structure and manufactured to OEM standards.",
    image: "/images/product-warp-3bar.webp",
    alt: "Macro view of a uniform warp knitted automotive seat fabric",
  },
  {
    index: "03",
    family: "Warp Knit Scrim",
    variant: "Polywarp",
    description:
      "Warp knitted scrim in polywarp construction, produced for automotive seat material applications.",
    image: "/images/product-polywarp.webp",
    alt: "Backlit macro view of an open warp knit scrim",
  },
  {
    index: "04",
    family: "Weft Knit Scrim",
    variant: "Circular",
    description:
      "Circular weft knitted scrim, produced for automotive seat material applications.",
    image: "/images/product-circular.webp",
    alt: "Macro view of a circular weft knitted scrim fabric",
  },
] as const;

export const facilities = [
  {
    title: "Plant Exterior",
    image: "/images/infra-plant.webp",
    alt: "Modern industrial manufacturing building at dusk",
    width: 2000,
    height: 1116,
  },
  {
    title: "Office Area",
    image: "/images/infra-office.webp",
    alt: "Minimal corporate office interior with large windows",
    width: 2000,
    height: 1493,
  },
  {
    title: "Conference Hall",
    image: "/images/infra-conference.webp",
    alt: "Conference room with a long table and chairs",
    width: 2000,
    height: 1493,
  },
  {
    title: "Inspection Facility",
    image: "/images/infra-inspection.webp",
    alt: "Fabric inspection area with racks of fabric rolls",
    width: 2000,
    height: 1116,
  },
  {
    title: "Inspection Machine",
    image: "/images/infra-inspection-machine.webp",
    alt: "Fabric inspection machine with a backlit panel",
    width: 2000,
    height: 1493,
  },
] as const;

export type SpecTable = {
  caption?: string;
  columns: string[];
  rows: (string | number)[][];
};

export const machinery: {
  key: string;
  title: string;
  image: string;
  alt: string;
  tables?: SpecTable[];
  list?: { label: string; value: string }[];
}[] = [
  {
    key: "A",
    title: "Knitting",
    image: "/images/machine-knitting.webp",
    alt: "Industrial warp knitting machine with yarn beams",
    tables: [
      {
        columns: ["Machinery", "Quantity"],
        rows: [
          ["Warp Knit Machine", 3],
          ["Weft Knit Machine", 2],
        ],
      },
    ],
  },
  {
    key: "B",
    title: "Washing & Heat Setting",
    image: "/images/machine-stenter.webp",
    alt: "Stenter heat-setting machine in a textile finishing plant",
    tables: [
      {
        columns: ["Machinery", "Process", "Quantity"],
        rows: [
          ["Stenter Machine", "Heat Set Dry", 3],
          ["Continuous Bleaching Machine", "Washing", 1],
        ],
      },
    ],
  },
  {
    key: "C",
    title: "Dyeing – Long Jet",
    image: "/images/machine-dyeing.webp",
    alt: "Row of long jet textile dyeing machines",
    tables: [
      {
        caption: "Dyeing capacity",
        columns: ["Capacity", "Quantity"],
        rows: [
          ["500 KG", 3],
          ["300 KG", 1],
          ["200 KG", 3],
          ["100 KG", 2],
        ],
      },
      {
        caption: "Sampling capacity",
        columns: ["Capacity", "Quantity"],
        rows: [
          ["50 KG", 1],
          ["25 KG", 2],
        ],
      },
    ],
  },
  {
    key: "D",
    title: "Brushing & Raising",
    image: "/images/machine-brushing.webp",
    alt: "Raising machine rollers lifting the pile of a knitted fabric",
    list: [
      { label: "Brushing", value: "2 machines" },
      { label: "Raising", value: "2 machines" },
    ],
  },
];

export const storage = [
  {
    key: "A",
    title: "Yarn Storage",
    outsourced: true,
    figures: [{ value: "3,00,000", unit: "KG", label: "Capacity" }],
  },
  {
    key: "B",
    title: "Semi-Finished Goods (SFG) Storage",
    outsourced: true,
    figures: [
      { value: "1,000", unit: "Rolls", label: "Greige material storage" },
      { value: "2,00,000", unit: "Meters", label: "Storage capacity" },
    ],
  },
  {
    key: "C",
    title: "Finished Goods (FG) Storage",
    outsourced: false,
    figures: [
      {
        value: "756",
        unit: "Sq.mtr",
        label: "Ready for dispatch storage",
        note: "Space available for FG storage",
      },
    ],
  },
] as const;

export type EquipmentItem = {
  item: string;
  maker: string;
  range: string;
  qty: number;
  location: string;
};

/** Measuring and testing equipment, as listed by STN AUTO. */
export const equipment: { division: string; items: EquipmentItem[] }[] = [
  {
    division: "Measuring Equipment",
    items: [
      { item: "GSM Cutter", maker: "Prestige", range: "100 sq. cm", qty: 1, location: "Self" },
      { item: "Weighing Scale (Small)", maker: "Aptech", range: "0 ~ 300 g", qty: 1, location: "Self" },
      { item: "Weighing Scale (Large)", maker: "Bharat Scale", range: "0 ~ 150 kg", qty: 1, location: "Self" },
      { item: "Thickness Gauge", maker: "Peacock", range: "0.01 ~ 10 mm", qty: 2, location: "Self" },
      { item: "Lux Meter", maker: "HTC Instruments", range: "0 ~ 199,999 lux", qty: 1, location: "Self" },
      { item: "Measuring Tape", maker: "PMG Series", range: "0 ~ 5 m", qty: 4, location: "Self" },
    ],
  },
  {
    division: "Testing Equipment",
    items: [
      { item: "UTM", maker: "Universal", range: "5 ~ 50 kN", qty: 1, location: "Process Unit" },
      { item: "Color Cabinet", maker: "Paramount", range: "—", qty: 2, location: "Process Unit" },
      { item: "Color Spectrometer", maker: "Premier", range: "360 ~ 700 nm", qty: 1, location: "Process Unit" },
    ],
  },
];

/**
 * Manufacturing process, in production order, as listed by STN AUTO.
 * `phase` groups the steps into standard textile stages; images are illustrative.
 */
export const processSteps = [
  { name: "Master Chip Development", phase: "Development", image: "/images/process-01-master-chip.webp", alt: "Knitted fabric swatches and colour chips laid out on a design desk" },
  { name: "Yarn Preparation", phase: "Preparation", image: "/images/process-02-yarn.webp", alt: "Yarn cones prepared on a creel" },
  { name: "Warping Process", phase: "Preparation", image: "/images/process-03-warping.webp", alt: "Warping machine winding parallel yarns onto a warp beam" },
  { name: "Knitting Process", phase: "Fabric formation", image: "/images/process-04-knitting.webp", alt: "Warp knitting machine producing dark seat fabric" },
  { name: "Dyeing Process", phase: "Wet processing", image: "/images/process-05-dyeing.webp", alt: "Jet dyeing machine in a dye house" },
  { name: "Washing Process", phase: "Wet processing", image: "/images/process-06-washing.webp", alt: "Fabric running through a continuous washing range" },
  { name: "Stenter Process / Drying Process", phase: "Finishing", image: "/images/process-07-stenter.webp", alt: "Fabric entering a stenter drying machine" },
  { name: "Raising Process", phase: "Finishing", image: "/images/process-08-raising.webp", alt: "Raising rollers lifting the pile of knitted fabric" },
  { name: "Inspection", phase: "Quality & dispatch", image: "/images/process-09-inspection.webp", alt: "Fabric being inspected on an illuminated inspection machine" },
  { name: "Packaging", phase: "Quality & dispatch", image: "/images/process-10-packaging.webp", alt: "Wrapped fabric rolls stacked for dispatch" },
] as const;
