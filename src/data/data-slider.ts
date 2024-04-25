export interface Image {
  id: number;
  image: string;
  name: string,
  info: string
}

export const Images: Image[] = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebtOvkDxLXCW07Uyt5mVjhj3V_7Je7s8FQQ&s", name:"Paintings", info:"Explore our paintings rich in historical context, spanning three centuries after the new era."},
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4P4J7LNJjdS_vFLAdJa9cl78ecUMSPiJxYw&s", name:"Photographs", info:"Discover our gallery featuring photographs spanning thousands of years, captured by some of the world's most renowned photographers in history." },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh5QVXiqR2n3yB4EC3gXJYPmMxLzVzCXeHQ&s", name:"Sculptures", info:"Step into our gallery to behold hand-crafted sculptures that narrate the captivating history of their own time." },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcdUtSZ0xVPpTEiAc8X7j36_pC92JrCRgeA&s", name:"Statues", info:"Our museum proudly houses statues of kings and queens from centuries past, each embodying the grandeur and legacy of their era" }
];
