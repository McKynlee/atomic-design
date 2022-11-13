import Image from 'next/future/image'
import COSTUMES from '@mck-app/helpers/costumes'

const Header = () => {
  return (
    <div className="">
      <h2>Costumes I saw on Halloween</h2>
    </div>
  )
}

const CostumeCards = () => {
  return (
    <>
    </>
  )
}

const HalloweenStats = () => {
  return (
    // <section>
    //   <div className="halloweenStatsHeader">
    //     <h2>Costumes I saw on Halloween</h2>
    //   </div>
    //   <div className="costumeCardContainer">
    //     {COSTUMES.map((data) => (
    //       <div key={data.name} className="costumeCard">
    //         <div>{data.name}</div>
    //         <Image src={data.image} width={100} height={150} alt={data.name} />
    //         <div>{data.count}</div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  )
}

export default HalloweenStats
