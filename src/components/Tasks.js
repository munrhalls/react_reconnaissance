const data = [
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

const Tasks = ({listTitle}) => {
  return (
    <div>
      {listTitle}
    </div>
  )
}

export default Tasks