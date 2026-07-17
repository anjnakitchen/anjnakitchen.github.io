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

/** Written Facebook recommendations provided for the site. */
export const reviews: Review[] = [
  {
    id: "gajanan-2024",
    name: "Gajanan Maharaj America Devotees Parivar, Austin TX Chapter",
    date: "July 27, 2024",
    quote:
      "We have been using Anjna's Kitchen services for all our events. She cooks amazing Prasad food (no onion and garlic). Usually around 300 folks come to our event and every single person praises the food. A few times we asked her to cook Maharashtrian dishes and she cooked them with 100% authentic taste. She is our go-to person for any catering order.",
  },
  {
    id: "poonam-luthra-2023",
    name: "Poonam Luthra",
    date: "August 28, 2023",
    quote:
      "If you are looking for the best North Indian food and delicious sweets, then this is it. Anju cooks the best of both. My family loves her food and I am so glad I found her.",
  },
  {
    id: "vivek-rajamani-2023",
    name: "Vivek Rajamani",
    date: "August 28, 2023",
    quote: "The ghevar is the best in town.",
  },
  {
    id: "pavan-pawar-2023",
    name: "Pavan Pawar",
    date: "May 11, 2023",
    quote:
      "I would highly recommend Anjna's Kitchen for your catering order. Anjna's every food item is the best, but my favorites are Tava Fry Veggies, Daal Kachori, Dahi Bhalle, and Moong Daal Halwa. We recently had a party at our house and almost every guest had a special mention about the food.",
  },
  {
    id: "vandita-joshi-more-2023",
    name: "Vandita Joshi More",
    date: "April 25, 2023",
    quote:
      "There are a lot of options for non-vegetarians, but if you are looking for authentic Indian vegetarian food then Anjna is the right person. Her food is highly aromatic and very tasty. She always cooks fresh and very flavorful. All I can say is she is amazing!",
  },
  {
    id: "neha-shaw-2023",
    name: "Neha Shaw",
    date: "April 25, 2023",
    quote:
      "She is the best when it comes to authentic North Indian vegetarian cuisine. Highly recommend her for any catering needs, from parties and home events to large or small group gatherings.",
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
