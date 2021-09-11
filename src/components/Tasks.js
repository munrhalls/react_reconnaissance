import Task from './Task';

const Tasks = ({ tasks, onDelete, toggleTask}) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={onDelete} toggleTask={toggleTask} />
      })}
    </>
  )
}

export default Tasks