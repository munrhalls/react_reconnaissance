import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert('Please add task name.');
      return;
    }
    addTask(task, day, reminder);
    setTask('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="add-form"
      onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Add Task</label>
        <input type="text" placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type="text" placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Add reminder</label>
        <input type="checkbox"
          checked={reminder}
          onChange={() => setReminder(!reminder)}
        />
      </div>

      <input type="submit" value="Add Task" className="btn btn-block"
      />
    </form>
  )
}

export default AddTask;