import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App container">
      <Header title="Task Tracker" />
      <Tasks listTitle="Tuesday tasks" />
      <Tasks listTitle="Wendesday tasks" />
      <Tasks listTitle="Thursday tasks" />
    </div>
  );
}

export default App;
