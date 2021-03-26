import React, {useState} from 'react';
import { AddTodoForm } from './AddTodoForm';
import './index.scss';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Kahvalti yap',
    completed: false
  },
  {
    text: 'Ogle Yemegi',
    completed: true
  }
]

function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo ) => {
    const newTodos = todos.map( todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <section className="container">
        <div className="heading">
          <img className="heading__img" alt="header" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
          <h1 className="heading__title">Yapılacaklar listesi:</h1>
        </div>
          <AddTodoForm addTodo={addTodo} />
        <div>
          <ul className="toDoList">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
