export interface MenuItem {
  id: string;
  name: {
    ru: string;
    en: string;
  };
  price: number;
  description?: {
    ru: string;
    en: string;
  };
}

export interface MenuSection {
  titleKey: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    titleKey: "espresso_base",
    items: [
      {
        id: "espresso",
        name: { ru: "Эспрессо", en: "Espresso" },
        price: 150,
        description: { ru: "Классический плотный шот эспрессо", en: "Classic rich double shot espresso" }
      },
      {
        id: "americano",
        name: { ru: "Американо", en: "Americano" },
        price: 180,
        description: { ru: "Эспрессо с горячей водой", en: "Espresso with hot water" }
      },
      {
        id: "cappuccino",
        name: { ru: "Капучино", en: "Cappuccino" },
        price: 220,
        description: { ru: "Эспрессо с нежной молочной пенкой", en: "Espresso with silky microfoam milk" }
      },
      {
        id: "flat-white",
        name: { ru: "Флэт Уайт", en: "Flat White" },
        price: 240,
        description: { ru: "Насыщенный молочный напиток с двойным шотом", en: "Double shot of espresso with thin layer of microfoam" }
      },
      {
        id: "latte",
        name: { ru: "Латте", en: "Latte" },
        price: 240,
        description: { ru: "Мягкий молочно-кофейный напиток", en: "Mild milk-forward coffee drink" }
      }
    ]
  },
  {
    titleKey: "alternative",
    items: [
      {
        id: "v60",
        name: { ru: "V60 / Харио", en: "V60 / Hario" },
        price: 200,
        description: { ru: "Чистый и яркий вкус, раскрывающий терруар зерна", en: "Clean and bright brew highlighting the coffee origin" }
      },
      {
        id: "chemex",
        name: { ru: "Кемекс", en: "Chemex" },
        price: 250,
        description: { ru: "Мягкий кофе с плотным телом благодаря фильтру", en: "Smooth brew with medium body using a thick filter" }
      },
      {
        id: "aeropress",
        name: { ru: "Аэропресс", en: "Aeropress" },
        price: 200,
        description: { ru: "Плотный, насыщенный вкус кофе под давлением", en: "Full-bodied coffee brewed under air pressure" }
      }
    ]
  },
  {
    titleKey: "food",
    items: [
      {
        id: "croissant",
        name: { ru: "Круассан классический", en: "Classic Croissant" },
        price: 130,
        description: { ru: "Свежая слоёная выпечка из нашей пекарни", en: "Freshly baked flaky pastry from our bakery" }
      },
      {
        id: "almond-croissant",
        name: { ru: "Миндальный круассан", en: "Almond Croissant" },
        price: 180,
        description: { ru: "Круассан с миндальным кремом и лепестками", en: "Twice-baked croissant with almond frangipane" }
      },
      {
        id: "avocado-toast",
        name: { ru: "Авокадо-тост с яйцом пашот", en: "Avocado Toast with Poached Egg" },
        price: 320,
        description: { ru: "На цельнозерновом хлебе собственной выпечки", en: "Served on our own artisan whole-wheat sourdough" }
      },
      {
        id: "syruki",
        name: { ru: "Сырники со сметаной и ягодами", en: "Syrniki (Cottage Cheese Pancakes)" },
        price: 280,
        description: { ru: "Традиционные нежные сырники с фермерским творогом", en: "Soft local cottage cheese pancakes with sour cream and berries" }
      }
    ]
  }
];
