import Task from '../Task/Task'
import Form from '../Form'

const List = ({toDoList, handleToggle, handleFilter, addTask, showCompleted, setShowCompleted}) => {
    
    const toggleCompleted = () => {
        showCompleted ? setShowCompleted(false) : setShowCompleted(true)
        handleFilter()
    }

    return (
        <div>
            {toDoList.map(todo => {
                return <Task key={todo.id} todo={todo} handleToggle={handleToggle} />
            })}
            <button style={{margin: `20px`}} onClick={toggleCompleted}>{showCompleted ? "Clear Completed" : "Show Completed"}</button>
            <Form addTask={addTask} />
        </div>
    );
}

export default List;
