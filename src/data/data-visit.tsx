export interface Building {
  id: number;
  title: string;
  image: string;
  info: string;
  price: number;
}

export const buildings = [
  {
    id: 1,
    title: "Museum of paintings",
    image:
      "https://cdn.vox-cdn.com/thumbor/6aGu27L7FUAYVYZtsPEcpo2r2Fo=/0x0:4728x2779/1200x0/filters:focal(0x0:4728x2779):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8023001/shutterstock_280773341.jpg",
    info: "As you step into our grand edifice, you're immediately enveloped by a sense of majesty and history. The soaring ceilings and ornate architecture whisper tales of bygone eras, while the walls stand adorned with masterpieces that seem to breathe life into the very structure. Each stroke of paint holds within it a story, a narrative of passion, struggle, and triumph, spanning centuries of human expression. From the delicate brushwork of Renaissance masters to the bold strokes of modern visionaries, every corner of our building is a sanctuary of art, holding within its walls the collective wisdom and creativity of generations past and present.",
    price: 150,
  },
  {
    id: 2,
    title: "Museum of Photographs",
    image:
      "https://www.guggenheim.org/wp-content/uploads/2016/04/architecture-srgm-exterior-flavin-16-9-ratio-web.jpg",
    info: `Nestled within the heart of the city, our museum stands as a beacon of heritage and nostalgia, its façade a testament to the passage of time and the stories it holds. Housed within a stately Victorian-era building, its weathered brick exterior and ornate architectural details exude a timeless charm, inviting visitors to step into a world of yesteryear. Upon crossing the threshold, you are greeted by the gentle hum of history echoing through the halls, as if the walls themselves whisper tales of days gone by.`,
    price: 120,
  },
  {
    id: 3,
    title: "Museum of Sculptures",
    image: "https://blog.architizer.com/wp-content/uploads/10-86.jpg",
    info: `Situated at the intersection of art and architecture, our museum stands as a testament to the beauty and power of three-dimensional expression. From the moment you approach its grand entrance, you are greeted by a symphony of form and texture, the building itself a work of art designed to complement and enhance the sculptures it houses.Constructed from sleek lines and graceful curves, our museum's modernist façade serves as a fitting canvas for the sculptural masterpieces within. Towering glass walls invite natural light to flood the interior, casting ethereal shadows that dance across the gallery floors and illuminate each sculpture with an otherworldly glow.`,
    price: 180,
  },
  {
    id: 4,
    title: "Museum of Statues",
    image:
      "https://i.pinimg.com/736x/d9/84/a9/d984a9520a383e90644794e5e60fc006.jpg",
    info: `Our museum is more than just a showcase of statues—it is a sanctuary for contemplation and reflection. Here, amidst the tranquil surroundings, visitors are invited to engage with the art on a deeper level, to ponder the stories and symbolism behind each sculpture and to connect with the emotions and ideas they evoke. Behind the scenes, a team of dedicated curators and conservators work tirelessly to preserve and protect our collection, ensuring that these priceless works of art continue to inspire and captivate audiences for generations to come. Whether you're a seasoned art aficionado or a curious novice, we invite you to lose yourself in the beauty and wonder of our museum of statues. Here, amidst the stone and bronze, you'll discover a world of beauty, creativity, and human ingenuity waiting to be explored.`,
    price: 120,
  },
];
