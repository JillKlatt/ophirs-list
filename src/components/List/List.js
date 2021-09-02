import Task from '../Task/Task'

const List = ({toDoList, handleToggle, handleFilter}) => {


    return (
        <div>
            {toDoList.map(todo => {
                return <Task todo={todo} handleToggle={handleToggle} />
            })}
            <button style={{margin: `20px`}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
}

export default List;
