import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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

  return (
    <div className="App container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} toggleTask={toggleTask} />
        :
        ('No Tasks To Show')
      }
    </div>
  );
}

export default App;
