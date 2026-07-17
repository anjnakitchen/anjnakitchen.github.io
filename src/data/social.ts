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

export const reviews: Review[] = [
  {
    id: "gajanan-2024",
    name: "Gajanan Maharaj America Devotees Parivar — Austin TX Chapter",
    date: "July 27, 2024",
    quote:
      "We have been using Anjna's Kitchen services for all our events. She cooks amazing Prasad food (no onion and garlic). Usually around 300 folks come to our event and every single person praises the food. A few times we asked her to cook Maharashtrian dishes — she cooked them with 100% authentic taste. She is our go-to person for any catering order.",
  },
  {
    id: "facebook-rate",
    name: "Facebook recommendations",
    quote:
      "Eighteen guests recommend Anjna's Kitchen — with a perfect 100% recommend rate across every review on her Facebook page.",
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
