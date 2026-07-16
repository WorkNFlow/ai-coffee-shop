export interface LocationItem {
  id: string;
  name: {
    ru: string;
    en: string;
  };
  address: {
    ru: string;
    en: string;
  };
  hours: {
    ru: string[];
    en: string[];
  };
  mapsUrl: string; // Yandex Maps route URL
  coordinates?: [number, number]; // [latitude, longitude]
  status: "active" | "soon";
  photo: string;
}

export const locationsData: LocationItem[] = [
  {
    id: "central",
    name: { ru: "Бухта Центральная", en: "Bukhta Central" },
    address: { ru: "пр-т Мира, 45\nКалининград", en: "45 Mira Ave\nKaliningrad" },
    hours: {
      ru: ["Пн-Пт: 08:00 – 21:00", "Сб-Вс: 09:00 – 22:00"],
      en: ["Mon-Fri: 08:00 – 21:00", "Sat-Sun: 09:00 – 22:00"]
    },
    mapsUrl: "https://yandex.ru/maps/?ll=20.4996,54.7196&z=15&pt=20.4996,54.7196,pm2rdm",
    coordinates: [54.7196, 20.4996],
    status: "active",
    photo: "/images/locations/central.jpg"
  },
  {
    id: "rostery",
    name: { ru: "Бухта Ростери", en: "Bukhta Rostery" },
    address: { ru: "ул. Портовая, 21\nКалининград", en: "21 Portovaya St\nKaliningrad" },
    hours: {
      ru: ["Пн-Вс: 09:00 – 20:00"],
      en: ["Mon-Sun: 09:00 – 20:00"]
    },
    mapsUrl: "https://yandex.ru/maps/?ll=20.4965,54.7032&z=15&pt=20.4965,54.7032,pm2rdm",
    coordinates: [54.7032, 20.4965],
    status: "active",
    photo: "/images/locations/rostery.jpg"
  },
  {
    id: "island",
    name: { ru: "Бухта Остров", en: "Bukhta Island" },
    address: { ru: "Октябрьский остров, 12\nКалининград", en: "12 Oktyabrsky Island\nKaliningrad" },
    hours: {
      ru: ["Пн-Вс: 10:00 – 22:00"],
      en: ["Mon-Sun: 10:00 – 22:00"]
    },
    mapsUrl: "https://yandex.ru/maps/?ll=20.5185,54.7291&z=15&pt=20.5185,54.7291,pm2rdm",
    coordinates: [54.7291, 20.5185],
    status: "active",
    photo: "/images/locations/island.jpg"
  },
  {
    id: "seaside",
    name: { ru: "Бухта Море", en: "Bukhta Seaside" },
    address: { ru: "Променад\nЗеленоградск", en: "Promenade\nZelenogradsk" },
    hours: {
      ru: ["Открытие: Осень 2026"],
      en: ["Opening: Fall 2026"]
    },
    mapsUrl: "https://yandex.ru/maps/?ll=20.4851,54.9658&z=14",
    coordinates: [54.9658, 20.4851],
    status: "soon",
    photo: "/images/locations/seaside.jpg"
  }
];
