export type Review = {
  id: string;
  name: string;
  date?: string;
  quote: string;
};

/** Sourced from Facebook recommendations: 100% recommend (18 reviews). */
export const reviewsSummary = {
  recommendRate: "100%",
  reviewCount: 18,
  facebookReviewsUrl:
    "https://www.facebook.com/profile.php?id=100092091342425&sk=reviews",
};

/**
 * Written recommendations visible on the public Facebook reviews page.
 * (Many of the 18 recommends are recommend-only / login-gated without public text.)
 */
export const reviews: Review[] = [
  {
    id: "gajanan-2024",
    name: "Gajanan Maharaj America Devotees Parivar — Austin TX Chapter",
    date: "July 27, 2024",
    quote:
      "We have been using Anjna's Kitchen services for all our events. She cooks amazing Prasad food (no onion and garlic). Usually around 300 folks come to our event and every single person praises the food. A few times we asked her to cook Maharashtrian dishes — she cooked them with 100% authentic taste. She is our go-to person for any catering order.",
  },
  {
    id: "tarun-verma-2024",
    name: "Tarun Verma",
    date: "July 22, 2024",
    quote:
      "For authentic Desi cuisine and taste. You will not regret — keep mesmerizing the taste.",
  },
  {
    id: "dhara-shah-2024",
    name: "Dhara Shah",
    date: "May 20, 2024",
    quote:
      "Anjna catered at a recent event and the food was delicious. Our ask was no onion, no garlic, and no potato dishes, and she did a wonderful job. Guests loved the presentation and taste. Everything was par excellence. I would highly recommend her.",
  },
];

export const galleryPhotos = [
  { src: "/gallery/photo-01.jpg", alt: "Catering from Anjna's Kitchen" },
  { src: "/gallery/photo-02.jpg", alt: "Indian dishes prepared by Anjna's Kitchen" },
  { src: "/gallery/photo-03.jpg", alt: "Festive spread from Anjna's Kitchen" },
  { src: "/gallery/photo-04.jpg", alt: "Homestyle Indian food from Anjna's Kitchen" },
  { src: "/gallery/photo-05.jpg", alt: "Party catering by Anjna's Kitchen" },
  { src: "/gallery/photo-06.jpg", alt: "Authentic Indian vegetarian dishes" },
  { src: "/gallery/photo-07.jpg", alt: "Celebration meal from Anjna's Kitchen" },
  { src: "/gallery/photo-08.jpg", alt: "Tray service from Anjna's Kitchen" },
];
