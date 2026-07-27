export interface BoardCluster {
  id: string;

  title: string;

  brands: number;

  sticky: {
    x: string;
    y: string;
    rotate: number;
    colour: "purple" | "white";
    size: number;
  };

  photo?: {
    src: string;
    dx: number;
    dy: number;
    rotate: number;
    width: number;
  };

  tape?: {
    dx: number;
    dy: number;
    rotate: number;
    width: number;
  };

  clip?: {
    dx: number;
    dy: number;
    rotate: number;
    size: number;
  };
}

export const boardLayout: BoardCluster[] = [
  {
    id: "interiors",
    title: "Interiors",
    brands: 4,

    sticky: {
      x: "8%",
      y: "10%",
      rotate: -7,
      colour: "purple",
      size: 180,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: 90,
      dy: -45,
      rotate: 8,
      width: 120,
    },

    tape: {
      dx: 65,
      dy: -18,
      rotate: -8,
      width: 65,
    },
  },

  {
    id: "home",
    title: "Home Décor",
    brands: 6,

    sticky: {
      x: "35%",
      y: "8%",
      rotate: 4,
      colour: "white",
      size: 190,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: -80,
      dy: 85,
      rotate: -6,
      width: 120,
    },

    clip: {
      dx: 138,
      dy: -12,
      rotate: 18,
      size: 34,
    },
  },

  {
    id: "beauty",
    title: "Beauty",
    brands: 3,

    sticky: {
      x: "68%",
      y: "13%",
      rotate: -5,
      colour: "purple",
      size: 170,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: -60,
      dy: 92,
      rotate: -9,
      width: 110,
    },

    tape: {
      dx: 55,
      dy: -12,
      rotate: 9,
      width: 60,
    },
  },

  {
    id: "events",
    title: "Events",
    brands: 4,

    sticky: {
      x: "15%",
      y: "40%",
      rotate: 5,
      colour: "white",
      size: 180,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: 90,
      dy: 80,
      rotate: 6,
      width: 120,
    },
  },

  {
    id: "fashion",
    title: "Fashion",
    brands: 5,

    sticky: {
      x: "44%",
      y: "37%",
      rotate: -4,
      colour: "purple",
      size: 190,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: -90,
      dy: -50,
      rotate: -7,
      width: 130,
    },

    tape: {
      dx: 70,
      dy: -15,
      rotate: -10,
      width: 60,
    },

    clip: {
      dx: -18,
      dy: 150,
      rotate: -14,
      size: 36,
    },
  },

  {
    id: "food",
    title: "Food",
    brands: 2,

    sticky: {
      x: "73%",
      y: "41%",
      rotate: 8,
      colour: "white",
      size: 170,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: -85,
      dy: 65,
      rotate: -5,
      width: 120,
    },
  },

  {
    id: "baby",
    title: "Baby",
    brands: 1,

    sticky: {
      x: "12%",
      y: "70%",
      rotate: -8,
      colour: "purple",
      size: 150,
    },
  },

  {
    id: "jewellery",
    title: "Jewellery",
    brands: 1,

    sticky: {
      x: "42%",
      y: "70%",
      rotate: 6,
      colour: "white",
      size: 150,
    },
  },

  {
    id: "media",
    title: "Media",
    brands: 1,

    sticky: {
      x: "69%",
      y: "72%",
      rotate: -6,
      colour: "purple",
      size: 150,
    },

    photo: {
      src: "/board/Founder_photo.jpg",
      dx: 70,
      dy: -60,
      rotate: 6,
      width: 110,
    },
  },
];