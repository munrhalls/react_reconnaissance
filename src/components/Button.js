const Button = ({ color, text, onClick }) => {
  return (
    <header>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }} className='btn'>
        {text}
      </button>
    </header>
  )
}

export default Button