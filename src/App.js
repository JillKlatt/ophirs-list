import './App.css';
import Header from './components/Header'
import data from './components/data.json'
import { useState } from 'react'
import List from './components/List/List'
import SingleItem from './components/Task/SingleItem'

function App() {


  const [toDoList, setToDoList] = useState(data)

  let inCompleted = toDoList.filter(task => !task.complete)

  console.log(inCompleted)
  const [showCompleted, setShowCompleted] = useState(true)
  const [stressed, setStressed] = useState(false)
  const addTask = (input) => {
    setToDoList([...toDoList, { id: toDoList.length + 1, task: input, complete: false }])
  }

  const handleToggle = (id) => {

    let mapped = toDoList.map(task => {
      // eslint-disable-next-line
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });

    setToDoList(mapped);
  }


  const deleteTask = (id) => {
    removeTask(id)
    handleStressed()
  }

  const removeTask = (id) => {
    let mapped = toDoList.map(task => {
      // eslint-disable-next-line
      return task.id == id ? { ...task, complete: true } : { ...task };
    });

    setToDoList(mapped);
  }

  const handleFilter = () => {
    if (showCompleted) {
      let filtered = toDoList.filter(task => {
        return !task.complete
      })
      setToDoList(filtered)
    }
    else {
      setToDoList(data)
    }
  }

  const toggleStressed = () => {
    stressed ? setStressed(false) : setStressed(true)
  }

  const handleStressed = () => {
    if (stressed) {
      return <SingleItem inCompleted={inCompleted} deleteTask={deleteTask} />
    } else {
      return <List toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} addTask={addTask} showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
    }
  }

  return (
    <div className="App">
      <Header />
      {handleStressed()}
      <button className={stressed === false ? 'btn-two' : 'glow-on-hover'} id={stressed === false ? "panic" : "chill"}onClick={toggleStressed}>{stressed === false ? "THIS IS TOO MUCH" : "Show it all"}</button>
    </div>
  );
}

export default App;




