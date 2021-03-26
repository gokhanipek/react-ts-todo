import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label 
                style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
            >{ todo.text }</label>
            <input className="checkbox" type='checkbox' checked={todo.completed} onClick={() => toggleTodo(todo)} />
        </li>
    )
}

export default TodoListItem;
