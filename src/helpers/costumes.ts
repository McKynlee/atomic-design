export interface CostumeData {
  name: string;
  image: string;
  count: number;
}

const COSTUMES: CostumeData[] = [
  {
    name: "It's CORN!",
    image: '/images/corn.png',
    count: 10,
  },
  {
    name: 'Hot Diggity Dog',
    image: '/images/hotdog.jpeg',
    count: 2,
  },
  {
    name: 'Chun Li',
    image: '/images/chun-li.jpeg',
    count: 1,
  },
  {
    name: 'Old Gregg',
    image: '/images/old-gregg.jpeg',
    count: 0,
  },
  {
    name: 'Ron Swanson',
    image: '/images/ron-swanson.jpeg',
    count: 1,
  },
]

export default COSTUMES
