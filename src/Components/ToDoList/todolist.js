import React, { useState } from 'react';
import ToDoListDisplay from './todoListDisplay';
import './todolist.css';

function ToDoList(){
    const [input, setInput] = useState('');
    const [todolist, setTodolist] = useState([]);
   // const [ediList, setEditList] = useState([]);

    const handleInputText = (e) => {
        setInput(e.target.value)
    }

    const handleAddList = (e) => {
        e.preventDefault();
        if(!input){
            alert('Please enter the item to add');
            return;
        }
        const todoItem = {
            id: Math.floor(Math.random() * 100),
            value: input
        }
        setTodolist(oldItem => [...oldItem, todoItem]);
        setInput('');
    }

    const handleDeleteButton = (selectedItemId) => {
        const updatedToDoList = [...todolist].filter((todo) => selectedItemId !== todo.id);
        setTodolist(updatedToDoList);
      };

      const handleEditButton = (itemId, editedValue) => {
        const updatedToDo = [...todolist].map((todo) => {
            if(todo.id === itemId){
                todo.value = editedValue;
            }
            return todo;
        });
        setTodolist(updatedToDo);
      }
    return(
        <div className='container'>
            <div className='title'>TO DO LIST</div>
            <div className='sub-container'>
                <input type="text" value ={input} onInput={(e) => handleInputText(e)}/>
                <button className="addBtn" onClick={(e) => handleAddList(e)}> Add</button> 
             </div>
            
                {todolist.map((item) => {
                    return(
                        <div className='item-display'>
                            <ToDoListDisplay item={item} 
                                handleDeleteButton={handleDeleteButton} 
                                handleEditButton={handleEditButton}
                                />
                            </div>
                        )
                    })
                }
            
        </div>
    )
    
}

export default ToDoList;