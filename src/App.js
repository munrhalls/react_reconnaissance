import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [isAddTaskShown, setIsAddTaskShown] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Workout',
        day: 'August 9th at 8:00am',
        reminder: true,
      },
      {
        id: 2,
        text: 'Clean room',
        day: 'August 9th at 8:00am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Cold shower',
        day: 'August 9th at 8:00am',
        reminder: true,
      },
      {
        id: 4,
        text: 'Shop food',
        day: 'August 9th at 8:00am',
        reminder: true,
      },
    ]
  )

  const addTask = (task, day, reminder) => {
    const newTask = {
      id: tasks.length + 1,
      text: task,
      day: day,
      reminder: reminder
    }
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        task.reminder = !task.reminder;
        return task;
      } else {
        return task;
      }
    }));
  }

  const toggleAddTask = () => {
    setIsAddTaskShown(!isAddTaskShown);
  }

  return (
    <div className="App container">
      <Header title="Task Tracker" toggleAddTask={toggleAddTask} isAddTaskShown={isAddTaskShown}/>
      {isAddTaskShown ? <AddTask addTask={addTask} /> : ''}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask} />
        :
        ('No Tasks To Show')
      }
    </div>
  );
}

export default App;
