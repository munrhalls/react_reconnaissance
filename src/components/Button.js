const Button = ({ color, text, toggleAddTask }) => {
  return (
    <header>
      <button
        onClick={toggleAddTask}
        style={{ backgroundColor: color }} className='btn'>
        {text}
      </button>
    </header>
  )
}

export default Button