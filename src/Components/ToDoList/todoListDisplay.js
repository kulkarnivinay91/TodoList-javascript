import { useState } from 'react';
import './todolist.css';

const ToDoListDisplay = ({ item, handleDeleteButton, handleEditButton }) => {

    const [isEditEnabled, setIsEditEnabled] = useState(false);

    return(
        <>
            <div className="item" key={item.id}>
                {item.value}
            </div>

            {isEditEnabled && 
                <input type="text" value ={item.value} onChange={(e) => {handleEditButton(item.id, e.target.value)}} />
            }

            <div className='btn-container'>
                <button className="btn-edit" onClick={() => { setIsEditEnabled(true) }}>Edit</button>
                <button className="btn-delete" onClick={() => { handleDeleteButton(item.id) }}>Delete</button>
            </div>
        </>
    )
}

export default ToDoListDisplay;