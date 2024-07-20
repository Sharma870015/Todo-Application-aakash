import React, { useState } from 'react';
import './TodoInp.css'

function TodoInp(props) {
  const [inputText, setInputText] = useState('');

  const [totalTodos, setTotalTodos] = useState(200);

  const [pendingTodos, setPendingTodos] = useState(110);

  const [completedTodos, setCompletedTodos] = useState(90);

  const handleIncrementTotal = () => {

    setTotalTodos(totalTodos + 1);

    setPendingTodos(pendingTodos + 1);

  };

  

  return (
    <div className='main-div'>
        <header className='todo-head'>
            <h2 className='todo-title1'>{props.title}</h2>
        </header>
        <p className='todo-desc1'>{props.description}</p>
     <div className='for-input'>
      <input 
      className='for-input'
      type="text"
      placeholder='Enter todo here...'
      value={inputText}
      onChange={t=>{
        setInputText(t.target.value)
    }}
      />
      </div>
      <div className='for-btn'>
      <button className='Add-btn' onClick={()=>{
        props.addList(inputText)
        setInputText('');
        handleIncrementTotal({setTotalTodos})

      }}>Add</button>
      </div>
      <span className='for-counting'>
      <h3 className='for-todos'>Total todos: {totalTodos}</h3>
      <h3 className='for-todos'>Pending todos: {totalTodos}</h3>
      <h3 className='for-todos'>Completed todos: 90 </h3>
      </span>
    </div>
  );
}

export default TodoInp;
