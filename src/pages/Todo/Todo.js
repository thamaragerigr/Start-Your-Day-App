import React, { useState } from "react";
import TodoItem from '../../components/Todo/TodoItem'

function Todo() {
    const [ todos, setTodos ] = useState({
        title: 'random',
        description: 'random2'
    })
    return (
        <div>
            <h1>Todo</h1>
            <TodoItem title={todos.title} description={todos.description} />
        </div>
    )
}

export default Todo