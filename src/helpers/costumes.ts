export interface CostumeData {
  name: string;
  image: string;
  count: number;
}

const COSTUMES: CostumeData[] = [
  {
    name: 'Old Gregg',
    image: '/images/old-gregg.jpeg',
    count: 0,
  },
  {
    name: "It's CORN!",
    image: '/images/corn.png',
    count: 10,
  },
  {
    name: 'Chun Li',
    image: '/images/chun-li.jpeg',
    count: 1,
  },
  {
    name: 'Ron Swanson',
    image: '/images/ron-swanson.jpeg',
    count: 1,
  },
  {
    name: 'New Boot Goofin',
    image: 'https://i.imgur.com/fn1urMe.jpg',
    count: 1,
  },
  {
    name: 'Rocky Horror',
    image: 'https://photos.costume-works.com/full/dr_frankin_furter_and_magenta1.jpg',
    count: 25,
  },
]

export default COSTUMES
