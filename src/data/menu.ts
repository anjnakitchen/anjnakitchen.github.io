export type TrayPrices = {
  half: number;
  medium: number;
  full: number;
};

export type PieceItem = {
  name: string;
  price: number;
  note?: string;
  unit?: "pc" | "lb";
};

export type TrayItem = {
  name: string;
  prices: TrayPrices;
  note?: string;
};

export type ComboItem = {
  name: string;
  price: number;
  detail?: string;
};

export type MenuCategory =
  | {
      id: string;
      title: string;
      subtitle?: string;
      pricing: "tray";
      items: TrayItem[];
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      pricing: "piece";
      items: PieceItem[];
      minimumNote?: string;
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      pricing: "combo";
      trayItems: TrayItem[];
      comboItems: ComboItem[];
    }
  | {
      id: string;
      title: string;
      pricing: "appetizers";
      traySubtitle: string;
      trayItems: TrayItem[];
      pieceSubtitle: string;
      pieceMinimumNote: string;
      pieceItems: PieceItem[];
    }
  | {
      id: string;
      title: string;
      pricing: "curries";
      paneerSubtitle: string;
      paneerItems: TrayItem[];
      sabjiSubtitle: string;
      sabjiItems: TrayItem[];
    };

export const business = {
  name: "Anjna's Kitchen",
  legalName: "Anjna's Kitchen LLC",
  owner: "Anjna Verma",
  tagline: "Serves Authentic Indian Food",
  phone: "401-612-5616",
  phoneHref: "tel:4016125616",
  email: "anjnakitchen@yahoo.com",
  emailHref: "mailto:anjnakitchen@yahoo.com",
  facebook:
    "https://www.facebook.com/profile.php?id=100092091342425",
  facebookPhotos:
    "https://www.facebook.com/profile.php?id=100092091342425&sk=photos",
  facebookReviews:
    "https://www.facebook.com/profile.php?id=100092091342425&sk=reviews",
};

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    pricing: "appetizers",
    traySubtitle: "Half · Medium · Full tray",
    trayItems: [
      { name: "Mix Veg Pakoda", prices: { half: 75, medium: 125, full: 140 } },
      { name: "Paneer Pakoda", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Onion Bhaji", prices: { half: 75, medium: 125, full: 140 } },
      { name: "Ram Ladoo", prices: { half: 80, medium: 130, full: 150 } },
      { name: "Dhokla", prices: { half: 70, medium: 125, full: 140 } },
      { name: "Cut Mirchi", prices: { half: 80, medium: 130, full: 150 } },
      { name: "Moth Chaat", prices: { half: 75, medium: 125, full: 140 } },
      { name: "Chana Chaat", prices: { half: 75, medium: 125, full: 140 } },
      { name: "Paneer Tikka", prices: { half: 90, medium: 150, full: 170 } },
    ],
    pieceSubtitle: "By the piece",
    pieceMinimumNote: "Minimum order 25 pieces",
    pieceItems: [
      { name: "Veg Cutlets", price: 3.0 },
      { name: "Bread Pakoda", price: 3.5 },
      { name: "Daal Kachori", price: 3.5 },
      { name: "Dabeli", price: 4.5 },
      { name: "Ragda Patties", price: 4.0, note: "Includes chutneys" },
      { name: "Tikki Chaat", price: 3.5 },
      { name: "Samosa", price: 3.5 },
      { name: "Samosa Chole Chaat", price: 4.5 },
      { name: "Mirchi Vada", price: 3.0 },
      { name: "Masala Vada", price: 3.0 },
      { name: "Dahi Bhalle", price: 2.5 },
      { name: "Vada Pav", price: 4.0 },
      { name: "Vegetable Burger", price: 5.0 },
      { name: "Paneer Kathi Roll", price: 6.5 },
      { name: "Hara Bhara Kabab", price: 3.0 },
    ],
  },
  {
    id: "curries",
    title: "Curries",
    pricing: "curries",
    paneerSubtitle: "Paneer",
    paneerItems: [
      { name: "Saag Paneer", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Shahi Paneer", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Kadai Paneer", prices: { half: 80, medium: 135, full: 155 } },
      {
        name: "Matar Paneer",
        prices: { half: 80, medium: 135, full: 155 },
        note: "Dhaba style",
      },
      {
        name: "Paneer Butter Masala",
        prices: { half: 80, medium: 135, full: 155 },
        note: "Creamy",
      },
      { name: "Paneer Masala", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Paneer Lababdaar", prices: { half: 80, medium: 135, full: 155 } },
      {
        name: "Lahesuni Palak Paneer",
        prices: { half: 80, medium: 135, full: 155 },
      },
      { name: "Aachari Paneer", prices: { half: 80, medium: 135, full: 155 } },
      {
        name: "Amritsari Paneer Bhurji",
        prices: { half: 85, medium: 140, full: 160 },
      },
      { name: "Veg Paneer Zalfarezi", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Paneer Tikka Masala", prices: { half: 85, medium: 140, full: 160 } },
    ],
    sabjiSubtitle: "Sabji & more",
    sabjiItems: [
      { name: "Malai Kofta", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Navratan Korma", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Pindi Chole", prices: { half: 75, medium: 120, full: 145 } },
      { name: "Kadhi Pakoda", prices: { half: 75, medium: 120, full: 145 } },
      { name: "Rajma Masala", prices: { half: 75, medium: 120, full: 145 } },
      { name: "Daal Makhni", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Methi Malai Matar", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Tava Fry Veggies", prices: { half: 100, medium: 155, full: 180 } },
      { name: "Bhindi Do Payaza", prices: { half: 90, medium: 145, full: 170 } },
      { name: "Kashmiri Dum Aloo", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Baigan Bharta", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Bharwa Baigan", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Dal Fry", prices: { half: 70, medium: 115, full: 135 } },
      { name: "Street Style Aloo Sabji", prices: { half: 70, medium: 115, full: 135 } },
      { name: "Masala Aloo Gobhi", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Fried Mix Veg", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Achari Aloo Baigan", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Soya Chaap Masala", prices: { half: 85, medium: 140, full: 160 } },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    subtitle: "Priced per piece",
    pricing: "piece",
    items: [
      { name: "Roti", price: 1.0 },
      { name: "Makki Roti", price: 3.0 },
      { name: "Bajra Roti", price: 3.0 },
      { name: "Plain Naan", price: 2.5 },
      { name: "Garlic Naan", price: 3.0 },
      { name: "Bhatura", price: 3.0 },
      { name: "Puri", price: 1.0 },
      { name: "Paratha Plain", price: 1.5 },
      { name: "Paratha Paneer", price: 4.0 },
      {
        name: "Stuffed Paratha",
        price: 3.0,
        note: "Other vegetables",
      },
    ],
  },
  {
    id: "rice",
    title: "Rice",
    subtitle: "Half · Medium · Full tray",
    pricing: "tray",
    items: [
      { name: "Veg Pulao", prices: { half: 75, medium: 120, full: 140 } },
      {
        name: "Veg Biryani",
        prices: { half: 85, medium: 140, full: 160 },
        note: "With veg raita",
      },
      {
        name: "Paneer Biryani",
        prices: { half: 90, medium: 150, full: 170 },
        note: "With veg raita",
      },
      {
        name: "Soya Dum Biryani",
        prices: { half: 80, medium: 135, full: 155 },
        note: "With veg raita",
      },
      { name: "Navratan Pulao", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Jeera Rice", prices: { half: 60, medium: 100, full: 120 } },
      { name: "Tawa Pulao", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Lemon Rice", prices: { half: 75, medium: 120, full: 140 } },
    ],
  },
  {
    id: "specials",
    title: "Specials",
    subtitle: "Signature trays & party packages",
    pricing: "combo",
    trayItems: [
      { name: "Besan Gatta", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Sarso ka Saag", prices: { half: 85, medium: 140, full: 160 } },
      {
        name: "Pav Bhaji",
        prices: { half: 120, medium: 155, full: 220 },
        note: "Salad + chutney",
      },
    ],
    comboItems: [
      {
        name: "Vada Sambhar",
        price: 150,
        detail: "30 pieces + 2 chutneys",
      },
      {
        name: "Idli Sambhar",
        price: 140,
        detail: "30 pieces + 2 chutneys",
      },
      {
        name: "Bati, Daal & Churma",
        price: 210,
        detail: "30 pieces + tomato garlic chutney",
      },
      {
        name: "Bhature & Chole",
        price: 160,
        detail: "25 bhature + ½ tray chole + lacha onion",
      },
    ],
  },
  {
    id: "indo-chinese",
    title: "Indo-Chinese",
    subtitle: "Half · Medium · Full tray",
    pricing: "tray",
    items: [
      { name: "Veg Manchurian", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Gobhi Manchurian", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Chilli Paneer", prices: { half: 90, medium: 145, full: 165 } },
      {
        name: "Soya Chilli Manchurian",
        prices: { half: 80, medium: 135, full: 155 },
      },
      { name: "Schezwan Noodles", prices: { half: 80, medium: 135, full: 155 } },
      { name: "Fried Rice", prices: { half: 80, medium: 135, full: 155 } },
    ],
  },
  {
    id: "sweets-trays",
    title: "Sweets",
    subtitle: "Half · Medium · Full tray",
    pricing: "tray",
    items: [
      { name: "Moong Daal Halwa", prices: { half: 120, medium: 180, full: 220 } },
      { name: "Carrot Halwa", prices: { half: 100, medium: 160, full: 200 } },
      { name: "Sooji Halwa", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Rabdi Kheer", prices: { half: 95, medium: 155, full: 180 } },
      { name: "Basundi", prices: { half: 100, medium: 160, full: 200 } },
      { name: "Rice Kheer", prices: { half: 85, medium: 140, full: 160 } },
      { name: "Gajar Paak", prices: { half: 100, medium: 160, full: 200 } },
      { name: "Shahi Zarda", prices: { half: 85, medium: 140, full: 160 } },
    ],
  },
  {
    id: "sweets-pieces",
    title: "Mithai - By the Piece & Pound",
    subtitle: "Celebrate with classics",
    pricing: "piece",
    minimumNote: "Per-piece items: minimum order 30 pieces",
    items: [
      { name: "Gulab Jamun", price: 1.75, unit: "pc" },
      { name: "Malai Gulab Jamun", price: 2.5, unit: "pc" },
      { name: "Ghevar", price: 20.0, unit: "pc" },
      { name: "Gunjiya", price: 3.0, unit: "pc" },
      { name: "Sweet Malpua", price: 3.0, unit: "pc" },
      { name: "Rasmalai", price: 3.0, unit: "pc" },
      { name: "Chum-Chum", price: 2.5, unit: "pc" },
      { name: "Gaajar Pak", price: 20.0, unit: "lb" },
      { name: "Besan Ladoo", price: 18.0, unit: "lb" },
      { name: "Besan Chakki", price: 18.0, unit: "lb" },
      { name: "Gond Laddu", price: 22.0, unit: "lb" },
      { name: "Bundi Ladoo", price: 20.0, unit: "lb" },
      { name: "Kaaju Katli", price: 25.0, unit: "lb" },
      { name: "Kesar Peda", price: 25.0, unit: "lb" },
      { name: "Churma Laddu", price: 18.0, unit: "lb" },
      { name: "Kalakand", price: 20.0, unit: "lb" },
      { name: "Mohan Thal", price: 20.0, unit: "lb" },
    ],
  },
];

export function formatMoney(amount: number): string {
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}
