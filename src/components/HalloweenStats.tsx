import Image from 'next/future/image'

const Header = () => {
  return (
    <div className="">
      <h2>Costumes I saw on Halloween</h2>

      {/* <div className="">
                <div >
                    
                </div>
            </div> */}
    </div>
  )
}

const StatBox = ({ quantity, text }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between rounded-full border border-strong px-4 py-2 sm:px-6">
      <div>{quantity}</div>
      <div className="text-end">
        <div>{text}</div>
      </div>
    </div>
  )
}

const Stats = () => {
  return (
    <div className="grid-flow-cols grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatBox quantity="3" text="US Soldier" />
      <StatBox quantity="2" text="Ghost Busters" />
      <StatBox quantity="1" text="Chun Li" />
      <StatBox quantity="0" text="McKynlee" />
    </div>
  )
}

const CleanHalloweenStats = () => {
  return (
    <section
      id="stats"
      className="space-y-12 bg-layer-a py-20 px-3 sm:px-6 md:px-12 lg:space-y-20 lg:py-36"
    >
      <Header />
      <Stats />
    </section>
  )
}

/////////////////////////////////////////////////////

const COSTUMES = [
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

const CostumeCards = () => {
  return (
    <>
      {COSTUMES.map((data) => (
        <div key={data.name} className="costumeCardContainer">
          <div className="costumeCard">
            <div>{data.name}</div>
            <Image src={data.image} width={100} height={150} alt={data.name} />
            <div>{data.count}</div>
          </div>
        </div>
      ))}
    </>
  )
}

const HalloweenStats = () => {
  return (
    <section>
      <Header />
      <div className="costumeCardContainer">
        {COSTUMES.map((data) => (
          <div key={data.name} className="costumeCard">
            <div>{data.name}</div>
            <Image src={data.image} width={100} height={150} alt={data.name} />
            <div>{data.count}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HalloweenStats
