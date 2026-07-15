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
    ru: string;
    en: string;
  };
  coordinates?: [number, number]; // [latitude, longitude]
  status: "active" | "soon";
  photo: string;
}

export const locationsData: LocationItem[] = [
  {
    id: "center",
    name: { ru: "Бухта Центр", en: "Bukhta Center" },
    address: { ru: "Калининград, пр-т Мира, 14", en: "14 Mira Ave, Kaliningrad" },
    hours: { ru: "Пн-Вс: 08:00 – 21:00", en: "Mon-Sun: 08:00 – 21:00" },
    coordinates: [54.7196, 20.4996],
    status: "active",
    photo: "/images/locations/center.jpg"
  },
  {
    id: "lake",
    name: { ru: "Бухта у Озера", en: "Bukhta by the Lake" },
    address: { ru: "Калининград, ул. Верхнеозёрная, 2А", en: "2A Verkhneozyornaya St, Kaliningrad" },
    hours: { ru: "Пн-Вс: 08:00 – 22:00", en: "Mon-Sun: 08:00 – 22:00" },
    coordinates: [54.7291, 20.5185],
    status: "active",
    photo: "/images/locations/lake.jpg"
  },
  {
    id: "port",
    name: { ru: "Бухта Порт", en: "Bukhta Port" },
    address: { ru: "Калининград, ул. Портовая, 30", en: "30 Portovaya St, Kaliningrad" },
    hours: { ru: "Пн-Пт: 08:00 – 20:00, Сб-Вс: 09:00 – 21:00", en: "Mon-Fri: 08:00 – 20:00, Sat-Sun: 09:00 – 21:00" },
    coordinates: [54.7032, 20.4965],
    status: "active",
    photo: "/images/locations/port.jpg"
  },
  {
    id: "zelenogradsk",
    name: { ru: "Бухта Побережье", en: "Bukhta Seaside" },
    address: { ru: "Зеленоградск, променад (точный адрес скоро)", en: "Zelenogradsk Promenade (exact address soon)" },
    hours: { ru: "Открытие: Осень 2026", en: "Opening: Fall 2026" },
    coordinates: [54.9658, 20.4851], // Approximate location on Zelenogradsk promenade
    status: "soon",
    photo: "/images/locations/seaside.jpg"
  }
];
