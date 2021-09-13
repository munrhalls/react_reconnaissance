const AddTask = () => {
  return (
    <form>
      <div className='form-control'>
        <label>Add Task</label>
        <input type='text' placeholder='Task' />
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input type='text' placeholder='Day' />
      </div>
      <div className='form-control'>
        <label>Reminder</label>
        <input type='checkbox' />
      </div>
      
      <input type='submit' value='Add Task' />
    </form>
  )
}

export default AddTask;