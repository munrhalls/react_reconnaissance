import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, toggleTask}) => {
  return (
    <div className='task' onDoubleClick={() => toggleTask(task.id)}>
      <h3>
        {task.text}
        <FaTimes style={{ color: 'black', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task;