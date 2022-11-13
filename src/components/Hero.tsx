import Image from 'next/future/image'

const Hero = () => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        height: '200px',
        position: 'relative',
      }}
    >
      <Image alt="Halloween pumpkins" src="/images/pumpkins.jpeg" fill />
    </div>
  )
}

export default Hero
