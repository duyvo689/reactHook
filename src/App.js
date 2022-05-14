import logo from './logo.svg';
import './App.css';
import Nav from '../src/views/Nav'
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('duyvo');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState(
    [
      { id: 'todo1', title: 'Home word' },
      { id: 'todo2', title: 'Play game' }
    ]
  )

  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }
  const handleEvenClick = (event) => {
    let newTodo = { id: 'acd', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Chao anh {name}</h1>
        <div className='todo-container'>
          {todos.map(todo => {
            return (
              <li className='todo-chile' key={todo.id}>{todo.title}</li>
            )
          })}
        </div>
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type='button' onClick={(event) => handleEvenClick(event)}>Click me</button>
      </header >
    </div >
  );
}

export default App;
