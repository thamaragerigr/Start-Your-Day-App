import React from 'react'

function TodoItem(props) {
    return (
        <div>
            {props.title}
            {props.description}
        </div>
    )
}

export default TodoItem