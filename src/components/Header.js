import Button from './Button';

export const Header = ({ title, toggleAddTask, isAddTaskShown }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button toggleAddTask={toggleAddTask} color={isAddTaskShown ? 'black' : 'green'} text={isAddTaskShown ? 'Close' : 'Add'} />
    </header>
  )
}

export default Header