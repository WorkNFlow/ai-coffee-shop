export interface MenuItem {
  id: string;
  name: {
    ru: string;
    en: string;
  };
  price: string; // string to support ranges like "220 / 280 ₽" and prefixes like "от 150 ₽"
  description?: {
    ru: string;
    en: string;
  };
}

export interface MenuSection {
  titleKey: string;
  icon: string; // material symbol name
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    titleKey: "espresso_base",
    icon: "coffee",
    items: [
      {
        id: "espresso",
        name: { ru: "Эспрессо", en: "Espresso" },
        price: "150 ₽",
        description: { ru: "Классический плотный шот эспрессо", en: "Classic rich double shot espresso" }
      },
      {
        id: "cappuccino",
        name: { ru: "Капучино", en: "Cappuccino" },
        price: "220 / 280 ₽",
        description: { ru: "Эспрессо с нежной молочной пенкой", en: "Espresso with silky microfoam milk" }
      },
      {
        id: "flat-white",
        name: { ru: "Флэт Уайт", en: "Flat White" },
        price: "250 ₽",
        description: { ru: "Насыщенный молочный напиток с двойным шотом", en: "Double shot of espresso with thin layer of microfoam" }
      },
      {
        id: "latte",
        name: { ru: "Латте", en: "Latte" },
        price: "240 / 300 ₽",
        description: { ru: "Мягкий молочно-кофейный напиток", en: "Mild milk-forward coffee drink" }
      }
    ]
  },
  {
    titleKey: "alternative",
    icon: "water_drop",
    items: [
      {
        id: "v60",
        name: { ru: "V60", en: "V60" },
        price: "280 ₽",
        description: { ru: "Чистый и яркий вкус, раскрывающий терруар зерна", en: "Clean and bright brew highlighting the coffee origin" }
      },
      {
        id: "aeropress",
        name: { ru: "Аэропресс", en: "Aeropress" },
        price: "250 ₽",
        description: { ru: "Плотный, насыщенный вкус кофе под давлением", en: "Full-bodied coffee brewed under air pressure" }
      },
      {
        id: "chemex",
        name: { ru: "Кемекс", en: "Chemex" },
        price: "350 ₽",
        description: { ru: "Мягкий кофе с плотным телом благодаря фильтру", en: "Smooth brew with medium body using a thick filter" }
      }
    ]
  },
  {
    titleKey: "food",
    icon: "bakery_dining",
    items: [
      {
        id: "pastry",
        name: { ru: "Свежая выпечка", en: "Fresh Pastries" },
        price: "от 150 ₽",
        description: { ru: "Ежедневно из нашей пекарни", en: "Daily from our own bakery" }
      },
      {
        id: "breakfast",
        name: { ru: "Завтраки (весь день)", en: "Breakfast (all day)" },
        price: "от 350 ₽",
        description: { ru: "Авокадо-тост, сырники и другое", en: "Avocado toast, syrniki and more" }
      },
      {
        id: "sandwich",
        name: { ru: "Сэндвичи", en: "Sandwiches" },
        price: "от 280 ₽",
        description: { ru: "Свежие и сытные варианты", en: "Fresh and filling options" }
      }
    ]
  }
];
