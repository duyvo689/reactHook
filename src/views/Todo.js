const Todo = (props) => {

    const { todos, deleteTodo } = props

    const handleDelete = (id) => {
        deleteTodo(id)
    }
    return (

        <div className='todo-container'>
            {todos.map(todo => {
                return (
                    <li className='todo-chile' key={todo.id}>{todo.title}
                        &nbsp; &nbsp; &nbsp;
                        <span onClick={() => handleDelete(todo.id)}>X</span>
                    </li>
                )
            })}
        </div>
    )

}

export default Todo