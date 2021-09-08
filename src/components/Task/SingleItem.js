import './SingleItem.css'
import { useState } from 'react'

export default function SingleItem({inCompleted, deleteTask, setTodoList}) {

    let number = Math.floor(Math.random() * inCompleted.length - 2)
    const [todo, setTodo] = useState(inCompleted[number])

    const findRandom = () => {
        console.log(todo)
        number = Math.floor(Math.random(0, inCompleted.length - 1) * 10)
        console.log("new number:", number)
        setTodo(inCompleted[number])
    }

    const completeTask = () => {
        if (todo){
        deleteTask(todo.id)
        findRandom()
        } else {
            allOut()
        }
    }

    const allOut = () =>{
    if (inCompleted.length === 0){
        return (
            <div>
                <h1>Out of To Dos</h1>
            </div>
        )
    }}

    return (
        <div>
            <h2>THIS IS IT. THIS IS THE THING YOU DO</h2>
            {(!todo) ? allOut() : 
            <h3 className='single-item' id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} >{todo.task}</h3>}
            <button onClick={findRandom}>Nah, not this</button>    
            <button onClick={completeTask}>FUCKING DONE BRO</button>      
        </div>
    )
}
