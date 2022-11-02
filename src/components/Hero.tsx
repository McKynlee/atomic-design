import Image from 'next/future/image'

const Hero = () => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        height: '200px',
        position: 'relative',
        //         border: "2px solid white",
        // alignItems: "center"
      }}
    >
      <Image alt="Halloween pumpkins" src="/images/pumpkins.jpeg" fill />
    </div>
  )
}

export default Hero
