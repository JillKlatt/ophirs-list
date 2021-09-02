

export default function SingleItem({todo, changeRandom, completeNewRandom}) {
    console.log(todo)

    const completeTask = () => {
        completeNewRandom(todo.id)
    }


    return (
        <div>
            <h2>THIS IS IT. THIS IS THE THING YOU DO</h2>
            
            <h3 id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} >{todo.task}</h3>
            <button onClick={changeRandom}>Nah, not this</button>    
            <button onClick={completeTask}>COMPLETE</button>      
        </div>
    )
}
