const Header = () => {
  const handlePromotionClick = () => {
    //TODO: send money to McK's bank account
    console.log('MORE $$$$$$$!')
  }

  return (
    <header>
      <h1>HEADER</h1>
      <button
        type="button"
        onClick={handlePromotionClick}
        style={{ backgroundColor: 'white' }}
      >
        Give me a promotion!
      </button>
    </header>
  )
}

export default Header
