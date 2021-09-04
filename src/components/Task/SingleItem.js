import './SingleItem.css'
import { useState } from 'react'

export default function SingleItem({inCompleted, deleteTask}) {

    let number = Math.floor(Math.random(0, inCompleted.length - 1) * 10)
    const [todo, setTodo] = useState(inCompleted[number])

    const findRandom = () => {
        number = Math.floor(Math.random(0, inCompleted.length - 1) * 10)
        setTodo(inCompleted[number])
    }


    const completeTask = () => {
        console.log(todo)
        deleteTask(todo.id)
        findRandom()
    }

    if (inCompleted.length === 1){
        return (
            <div>
                <h1>Out of To Dos</h1>
            </div>
        )
    }

    return (
        <div>
            <h2>THIS IS IT. THIS IS THE THING YOU DO</h2>
            {(inCompleted.length === 0) ? null : 
            <h3 id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} >{todo.task}</h3>}
            <button onClick={findRandom}>Nah, not this</button>    
            <button onClick={completeTask}>COMPLETE</button>      
        </div>
    )
}
