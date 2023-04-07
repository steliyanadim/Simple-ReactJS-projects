import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Todo from './components/Todo';
import Form from './components/Form';

function App() {
    const [todos, setTodos] = useState([])

    const toggleTodoStatus = (id) => setTodos(allTodos => allTodos.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted}: t));
    const deleteTodo = (id) => setTodos(allTodos => allTodos.filter(t=> t.id !== id));
    const updateTodos = (text) => setTodos(todos => [...todos, {id: todos.length + 1, text, isCompleted: false}]);

    useEffect(() =>{
        fetch(`http://localhost:3030/jsonstore/todos`)
        .then(res => res.json())
        .then(data=> {
            const result = Object.keys(data).map(id => ({ id, ...data[id] }));
            setTodos(result);
        })
    }, [])

  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>To-do List App</h1>
      <Form updateTodos={updateTodos}/>
      <table className={styles['table']}>
        <tbody>
          {todos.map(todo => <Todo key={todo.id} {...todo} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo}/>)}
        </tbody>
      </table>
    </div>
  )
}


export default App;
