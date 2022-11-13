import { useState } from 'react'

const Footer = () => {
  const [buttonColor, setButtonColor] = useState('#008080')

  const handleContactMe = () => {
    setButtonColor('#' + Math.floor(Math.random() * 16777215).toString(16))
  }

  return (
    // <footer>
    //   <h1>FOOTER</h1>
    //   <button
    //     type="button"
    //     onClick={handleContactMe}
    //     style={{ backgroundColor: buttonColor }}
    //   >
    //     Change color
    //   </button>
    // </footer>
  )
}

export default Footer
