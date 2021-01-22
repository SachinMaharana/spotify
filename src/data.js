import { v4 as uuidv4 } from "uuid";
import { Home, Search, Library } from "./Svgs";

let pages = [
  { id: "home", name: "Home", icon: Home },
  { id: "search", name: "Search", icon: Search },
  { id: "library", name: "Your Library", icon: Library },
];

let albums = [
  { name: "drive" },
  { name: "Mellow" },
  { name: "drive" },
  { name: "drive" },
  { name: "khaspov" },
  { name: "drive" },
];

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Meherama",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio:
        "https://drive.google.com/uc?export=download&id=1WO2PwUt_UbOGt2H5VXgH0Lnkej1pI9qf",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bandeya",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Arijith Singh",
      audio:
        "https://drive.google.com/uc?export=download&id=1JHmvDVvb7Jd4Y-ny1rzo_P-S3w-olOjB",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Teher Ja",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "October",
      audio:
        "https://drive.google.com/uc?export=download&id=1C5-t0ux_sQodTRq2a0YFByboQw-pf74-",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Perfect",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Ed",
      audio:
        "https://drive.google.com/uc?export=download&id=1IVSNUkRc_1qAj61XOcyZP0CD0KZ0PGSu",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export { chillHop, pages, albums };
