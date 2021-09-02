import './App.css';
import Header from './components/Header'
import data from './components/data.json'
import { useState } from 'react'
import List from './components/List/List'
import SingleItem from './components/Task/SingleItem'

function App() {

const [toDoList, setToDoList] = useState(data)
//let first = toDoList.find(task => !task.complete)
let completed = toDoList.filter(task => !task.complete)

const [showCompleted, setShowCompleted] = useState(true)
const [stressed, setStressed] = useState(false)
const [random, setRandom] = useState(completed[Math.floor(Math.random(0, completed.length) * 10)])

const addTask = (input) => {
  let updatedList = [...toDoList]
  updatedList = [...updatedList, { id: toDoList.length + 1, task: input, complete: false}]
  setToDoList(updatedList)
}

const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    console.log(mapped)

  setToDoList(mapped);
}

const completeNewRandom = (id) => {
  handleToggle(id)
  setRandom(completed[Math.floor(Math.random(0, completed.length) * 10)])
  handleStressed(random)
}

const handleFilter = () => {  
  if (showCompleted){
  let filtered = toDoList.filter(task => {
    return !task.complete})
  setToDoList(filtered)}
  else {
    setToDoList(data)
  }
}

const toggleStressed = () => {
  stressed ? setStressed(false) : setStressed(true)
}

const changeRandom = () => {
  setRandom(completed[Math.floor(Math.random(0, completed.length) * 10)])
}

const handleStressed = (random) => {
  if (stressed){
    // let random = completed[Math.floor(Math.random(0, completed.length) * 10)]
    return <SingleItem todo={random} changeRandom={changeRandom} handleToggle={handleToggle} completeNewRandom={completeNewRandom}/>
  }else{
   return <List toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} addTask={addTask} showCompleted={showCompleted} setShowCompleted={setShowCompleted}/>
  }
}


  return (
    <div className="App">
      <Header />
      {handleStressed(random)}
      <button onClick={toggleStressed}>{stressed === false ? "THIS IS TOO MUCH" : "Show it all"}</button>
    </div>
  );
}

export default App;

