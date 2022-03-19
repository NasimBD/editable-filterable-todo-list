import React, { useState } from 'react';
import { MdDelete, MdEdit, MdCheckBoxOutlineBlank, MdCheck } from 'react-icons/md';
import { ToDoForm } from './ToDoForm';

export const ToDo = ({todo, ToDos, setToDos}) => {
  const [Edit, setEdit] = useState({id: null, text: ''})

  const handleItemStatus = () => {
    setToDos(ToDos.map(item => {
        if(item.id === todo.id){
            item.status = !item.status
        }
        return item;
    }))
  }
  

  const deleteToDo = () => {
    setToDos(ToDos.filter(item => item.id !== todo.id));
  }


  const editToDo = () => {
    setEdit({id: todo.id, text: todo.text});
  }


  const updateTodo = (input) => {
    setToDos(ToDos.map(item => {
      if(item.id === todo.id){
        todo.text = input;
      }
      setEdit({id: null, text: ''});
      return item;
    }));
}


  return (
    <li className="mb-2">
     {
              Edit.id ? 
              <>
                 <ToDoForm Edit={Edit} setEdit={setEdit} onSubmit={updateTodo}/>
              </> :
              <div className={`todo-row ${todo.status ? 'completed' : ''}`}>
                <button type="button" className={todo.status ? 'btn btn-completed' : 'btn btn-uncompleted'} onClick={handleItemStatus}>{todo.status ? <MdCheck/> : <MdCheckBoxOutlineBlank/>}</button>
                <span className="">{todo.text}</span>
                <div>
                  <button type="button" className="btn btn-delete" onClick={deleteToDo}><MdDelete/></button>
                  <button type="button" className="btn btn-edit" onClick={editToDo}><MdEdit/></button>
                </div>
              </div>
            }
    </li>
           
  )
}
